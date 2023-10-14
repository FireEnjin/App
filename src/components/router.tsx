import {
  AuthService,
  DatabaseService,
  FireEnjin,
  FireEnjinTriggerInput,
} from "@fireenjin/sdk";
import { modalController } from "@ionic/core";
import { Build, Component, Listen, h } from "@stencil/core";
import { initializeApp } from "@firebase/app";
import env from "../helpers/env";
import state from "../store";
import submitController from "../submit";
import fetchController from "../fetch";

@Component({
  tag: "fireenjin-app-router",
})
export class Router {
  app = Build?.isBrowser ? initializeApp(env("firebase", {})) : null;
  auth = Build?.isBrowser
    ? new AuthService({
        app: this.app,
        config: {
          tokenLocalStorageKey: "fireenjin:token",
          authLocalStorageKey: "fireenjin:session",
          emulate: !!state?.config?.emulate,
        },
      })
    : null;
  db = Build?.isBrowser
    ? new DatabaseService({
        app: this.app,
        emulate: !!state?.config?.emulate,
      })
    : null;
  fireenjin = new FireEnjin({
    onRequest(action, operationName) {
      console.log(operationName);
      return action();
    },
    debug: true,
    onSubmit: submitController(this.db),
    onFetch: fetchController(this.db),
    connections: [
      {
        name: "default",
        url: "https://fireenjin.com/api",
        type: "firebase",
        db: this.db,
      },
    ],
  });

  @Listen("fireenjinTrigger")
  async onTrigger(event: CustomEvent<FireEnjinTriggerInput>) {
    if (event?.detail?.name === "openModal") {
      const modalEl = await modalController.create({
        componentProps: {
          db: this.db,
          auth: this.auth,
        },
        ...(event?.detail?.payload || {}),
      });
      await modalEl.present();
    }
  }

  componentWillLoad() {
    if (!Build?.isBrowser) return;
    (window as any).db = this.db;
    this.auth.onAuthChanged(async (session) => {
      console.log(session);
      state.session = session;
      if (session) {
        // LOGGED IN
        const profile = await this.db.find("users", session?.uid);
        if (!profile)
          await this.db.add(
            "users",
            {
              id: session?.uid,
              email: session?.email,
            },
            session?.uid
          );

        state.templates = await this.db.list("templates", []);
        state.triggers = await this.db.list("triggers", []);
      } else {
        // NOT LOGGED IN
      }
    });
  }

  render() {
    return (
      <ion-app>
        <ion-router use-hash="false">
          <ion-route url="/" component="page-home" />
          <ion-route url="/projects" component="page-projects" />
          <ion-route
            url="/login"
            component="page-home"
            componentProps={{ auth: this.auth }}
          />
          <ion-route
            url="/components/:componentId"
            component="page-component"
            componentProps={{ app: this.app, db: this.db }}
          />
          <ion-route url="/templates" component="page-template-list" />
          <ion-route
            url="/templates/:templateId"
            component="page-template"
            componentProps={{ app: this.app, db: this.db }}
          />
          <ion-route url="/triggers" component="page-trigger-list" />
          <ion-route
            url="/triggers/:triggerId"
            component="page-trigger"
            componentProps={{ app: this.app, db: this.db }}
          />
        </ion-router>
        <main>
          <block-navigation></block-navigation>
          <div class="main-content">
            <ion-router-outlet></ion-router-outlet>
          </div>
        </main>
      </ion-app>
    );
  }
}
