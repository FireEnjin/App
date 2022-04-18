import "@ionic/core";
import "@fireenjin/components";
import { initializeApp } from "@firebase/app";
import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { modalController, setupConfig } from "@ionic/core";
import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import env from "./helpers/env";
import cleanObjectOfReferences from "./helpers/cleanObjectOfReferences";

setupConfig({
  mode: "md",
});

if (typeof window?.addEventListener === "function") {
  window.addEventListener("load", () => {
    const app = initializeApp(env("firebase", {}));
    const auth = new AuthService({
      app,
      config: {
        tokenLocalStorageKey: "fireenjin:token",
        authLocalStorageKey: "fireenjin:session",
      },
    });
    const db = new DatabaseService({
      app,
    });

    const navigationEl = document.querySelector("block-navigation");
    navigationEl.db = db;

    document.addEventListener("fireenjinSubmit", async (event: CustomEvent) => {
      console.log(event);
      if (event?.detail?.endpoint === "addTemplate") {
        await db.add(
          "templates",
          await cleanObjectOfReferences(event?.detail?.params?.data)
        );
      } else if (event?.detail?.endpoint === "addProject") {
        await db.add(
          "projects",
          await cleanObjectOfReferences(event?.detail?.data)
        );
      }
    });

    document.addEventListener(
      "fireenjinTrigger",
      async (event: CustomEvent<FireEnjinTriggerInput>) => {
        if (event?.detail?.name === "openModal") {
          const modalEl = await modalController.create({
            componentProps: {
              db,
              auth,
            },
            ...(event?.detail?.payload || {}),
          });
          await modalEl.present();
          console.log(event);
        }
      }
    );
  });
}
