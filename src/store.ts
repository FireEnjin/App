import { createStore } from "@stencil/store";
import env from "./helpers/env";

const { state, onChange } = createStore({
  config: env() as {
    emulate?: boolean;
    env?: string;
    functions?: {
      url?: string;
    };
    firebase?: {
      apiKey: string;
      authDomain: string;
      databaseURL: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
    };
    messaging?: {
      vapidKey?: string;
    };
    url?: string;
    dynamicLinkDomain?: string;
  },
  version:
    localStorage?.getItem && localStorage.getItem("fireenjin:version")
      ? localStorage.getItem("fireenjin:version")
      : "1.1.0",
  profile: (localStorage?.getItem && localStorage.getItem("fireenjin:profile")
    ? JSON.parse(localStorage.getItem("fireenjin:profile"))
    : {}) as any,
  session: null as any,
  templates: (localStorage?.getItem &&
  localStorage.getItem("fireenjin:templates")
    ? JSON.parse(localStorage.getItem("fireenjin:templates"))
    : []) as any[],
  partials: (localStorage?.getItem && localStorage.getItem("fireenjin:partials")
    ? JSON.parse(localStorage.getItem("fireenjin:partials"))
    : []) as any[],
  isOnline: false,
  claims:
    localStorage?.getItem && localStorage.getItem("fireenjin:claims")
      ? JSON.parse(localStorage.getItem("fireenjin:claims"))
      : {
          admin: false,
          tester: false,
          onboarded: false,
        },
  pins: (localStorage?.getItem && localStorage.getItem("fireenjin:pins")
    ? JSON.parse(localStorage.getItem("fireenjin:pins"))
    : []) as any[],
  feed: (localStorage?.getItem && localStorage.getItem("fireenjin:feed")
    ? JSON.parse(localStorage.getItem("fireenjin:feed"))
    : []) as any[],
  editorSizes: (localStorage?.getItem &&
  localStorage.getItem("fireenjin:editorSizes")
    ? JSON.parse(localStorage.getItem("fireenjin:editorSizes"))
    : [50, 50]) as number[],
  isPreviewing: (localStorage?.getItem &&
  localStorage.getItem("fireenjin:isPreviewing")
    ? JSON.parse(localStorage.getItem("fireenjin:isPreviewing"))
    : false) as boolean,
});

onChange("editorSizes", (value) => {
  localStorage.setItem("fireenjin:editorSizes", JSON.stringify(value));
});

onChange("isPreviewing", (value) => {
  localStorage.setItem("fireenjin:isPreviewing", JSON.stringify(value));
});

onChange("feed", (value) => {
  localStorage.setItem("fireenjin:feed", JSON.stringify(value));
});

onChange("pins", (value) => {
  localStorage.setItem("fireenjin:pins", JSON.stringify(value));
});

onChange("claims", (value) => {
  localStorage.setItem("fireenjin:claims", JSON.stringify(value));
});

onChange("profile", (value) => {
  localStorage.setItem("fireenjin:profile", JSON.stringify(value));
});

onChange("version", (value) => {
  localStorage.setItem("fireenjin:version", value);
});

onChange("templates", (value) => {
  localStorage.setItem("fireenjin:templates", JSON.stringify(value));
});

onChange("partials", (value) => {
  localStorage.setItem("fireenjin:partials", JSON.stringify(value));
});

export default state;
