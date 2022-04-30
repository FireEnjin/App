import "@ionic/core";
import "@fireenjin/components";
import { initializeApp } from "@firebase/app";
import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { modalController, setupConfig } from "@ionic/core";
import { FireEnjinTriggerInput, FireEnjin } from "@fireenjin/sdk";
import env from "./helpers/env";
import cleanObjectOfReferences from "./helpers/cleanObjectOfReferences";
import state from "./store";

setupConfig({
  mode: "md",
});

if (typeof window?.addEventListener === "function") {
  window.addEventListener("load", async () => {
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
    const enjin = new FireEnjin({
      connections: [
        {
          name: "default",
          type: "graphql",
          url: "https://fireenjin.com/graphql",
        },
      ],
    });

    try {
      const templatesQuery = await db.getCollection("templates");
      state.templates = (templatesQuery?.docs || []).map((templateDoc) => ({
        id: templateDoc.id,
        ...templateDoc.data(),
      }));
      console.log(state.templates);
    } catch (error) {
      console.log("Error getting templates", error);
    }
    try {
      const projectsQuery = await db.getCollection("projects");
      state.projects = (projectsQuery?.docs || []).map((projectDoc) => ({
        id: projectDoc.id,
        ...projectDoc.data(),
      }));
      console.log(state.projects);
    } catch (error) {
      console.log("Error getting projects", error);
    }

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
