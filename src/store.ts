import { createStore } from "@stencil/store";
import env from "./helpers/env";
import getHandlebarsHelpers from "./helpers/getHandlebarsHelpers";

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
  helpers: getHandlebarsHelpers(),
  colors: {
    primary: "#2473bb",
    "primary-rgb": "36, 115, 187",
    "primary-contrast": "#ffffff",
    "primary-contrast-rgb": "255, 255, 255",
    "primary-shade": "#2065a5",
    "primary-tint": "#3a81c2",
    secondary: "#1e3955",
    "secondary-rgb": "30, 57, 85",
    "secondary-contrast": "#ffffff",
    "secondary-contrast-rgb": "255, 255, 255",
    "secondary-shade": "#1a324b",
    "secondary-tint": "#354d66",
    tertiary: "#54b6e7",
    "tertiary-rgb": "84, 182, 231",
    "tertiary-contrast": "#ffffff",
    "tertiary-contrast-rgb": "0, 0, 0",
    "tertiary-shade": "#4aa0cb",
    "tertiary-tint": "#65bde9",
    success: "#79c79d",
    "success-rgb": "121, 199, 157",
    "success-contrast": "#000000",
    "success-contrast-rgb": "0, 0, 0",
    "success-shade": "#6aaf8a",
    "success-tint": "#86cda7",
    warning: "#ffc723",
    "warning-rgb": "255, 199, 35",
    "warning-contrast": "#000000",
    "warning-contrast-rgb": "0, 0, 0",
    "warning-shade": "#e0af1f",
    "warning-tint": "#ffcd39",
    danger: "#db3a5e",
    "danger-rgb": "219, 58, 94",
    "danger-contrast": "#ffffff",
    "danger-contrast-rgb": "255, 255, 255",
    "danger-shade": "#c13353",
    "danger-tint": "#df4e6e",
    dark: "#08141c",
    "dark-rgb": "8, 20, 28",
    "dark-contrast": "#ffffff",
    "dark-contrast-rgb": "255, 255, 255",
    "dark-shade": "#071219",
    "dark-tint": "#212c33",
    medium: "#d8d8d8",
    "medium-rgb": "190, 190, 190",
    "medium-contrast": "#000000",
    "medium-contrast-rgb": "0, 0, 0",
    "medium-shade": "#bebebe",
    "medium-tint": "#dcdcdc",
    light: "#F6F6F6",
    "light-rgb": "248, 248, 248",
    "light-contrast": "#000000",
    "light-contrast-rgb": "0, 0, 0",
    "light-shade": "#d8d8d8",
    "light-tint": "#f7f7f7",
  },
  version:
    localStorage?.getItem && localStorage.getItem("fireenjin:version")
      ? localStorage.getItem("fireenjin:version")
      : "1.1.0",
  profile: (localStorage?.getItem && localStorage.getItem("fireenjin:profile")
    ? JSON.parse(localStorage.getItem("fireenjin:profile"))
    : {}) as any,
  session:
    localStorage?.getItem && localStorage.getItem("fireenjin:session")
      ? JSON.parse(localStorage.getItem("fireenjin:session"))
      : null,
  templates: (localStorage?.getItem &&
  localStorage.getItem("fireenjin:templates")
    ? JSON.parse(localStorage.getItem("fireenjin:templates"))
    : []) as any[],
  projects: (localStorage?.getItem && localStorage.getItem("fireenjin:projects")
    ? JSON.parse(localStorage.getItem("fireenjin:projects"))
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

onChange("session", (value) => {
  localStorage.setItem("fireenjin:session", JSON.stringify(value));
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

onChange("projects", (value) => {
  localStorage.setItem("fireenjin:projects", JSON.stringify(value));
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
