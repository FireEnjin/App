import "@ionic/core";
import "@fireenjin/components";
import { initializeApp } from "@firebase/app";
import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { modalController, setupConfig } from "@ionic/core";
import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import env from "./helpers/env";
import state from "./store";

setupConfig({
  mode: "md",
});

if (typeof window?.addEventListener === "function") {
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

  window.addEventListener("load", async () => {
    try {
      const templatesQuery = await db.getCollection("templates");
      state.templates = (templatesQuery?.docs || []).map((templateDoc) => ({
        id: templateDoc.id,
        ...templateDoc.data(),
      }));
    } catch (error) {
      console.log("Error getting templates", error);
    }
  });
}
