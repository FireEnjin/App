/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AuthService, DatabaseService, FireEnjin, FireEnjinTriggerInput } from "@fireenjin/sdk";
import { FirebaseApp } from "@firebase/app";
export namespace Components {
    interface BlockNavigation {
        "db": DatabaseService;
        "links": {
    label?: string;
    icon?: string;
    href?: string;
    activeClassExactMatch?: boolean;
  }[];
    }
    interface FireenjinAppIcon {
        "showBackground"?: boolean;
    }
    interface FireenjinAppRouter {
    }
    interface ModalAddProject {
    }
    interface ModalLogin {
        "auth": AuthService;
    }
    interface PageHome {
    }
    interface PageProjects {
    }
    interface PageTemplate {
        "app": FirebaseApp;
        "db": DatabaseService;
        "fireenjin": FireEnjin;
        "templateId": string;
    }
    interface PageTemplateList {
    }
}
export interface PageHomeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPageHomeElement;
}
export interface PageTemplateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPageTemplateElement;
}
declare global {
    interface HTMLBlockNavigationElement extends Components.BlockNavigation, HTMLStencilElement {
    }
    var HTMLBlockNavigationElement: {
        prototype: HTMLBlockNavigationElement;
        new (): HTMLBlockNavigationElement;
    };
    interface HTMLFireenjinAppIconElement extends Components.FireenjinAppIcon, HTMLStencilElement {
    }
    var HTMLFireenjinAppIconElement: {
        prototype: HTMLFireenjinAppIconElement;
        new (): HTMLFireenjinAppIconElement;
    };
    interface HTMLFireenjinAppRouterElement extends Components.FireenjinAppRouter, HTMLStencilElement {
    }
    var HTMLFireenjinAppRouterElement: {
        prototype: HTMLFireenjinAppRouterElement;
        new (): HTMLFireenjinAppRouterElement;
    };
    interface HTMLModalAddProjectElement extends Components.ModalAddProject, HTMLStencilElement {
    }
    var HTMLModalAddProjectElement: {
        prototype: HTMLModalAddProjectElement;
        new (): HTMLModalAddProjectElement;
    };
    interface HTMLModalLoginElement extends Components.ModalLogin, HTMLStencilElement {
    }
    var HTMLModalLoginElement: {
        prototype: HTMLModalLoginElement;
        new (): HTMLModalLoginElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageProjectsElement extends Components.PageProjects, HTMLStencilElement {
    }
    var HTMLPageProjectsElement: {
        prototype: HTMLPageProjectsElement;
        new (): HTMLPageProjectsElement;
    };
    interface HTMLPageTemplateElement extends Components.PageTemplate, HTMLStencilElement {
    }
    var HTMLPageTemplateElement: {
        prototype: HTMLPageTemplateElement;
        new (): HTMLPageTemplateElement;
    };
    interface HTMLPageTemplateListElement extends Components.PageTemplateList, HTMLStencilElement {
    }
    var HTMLPageTemplateListElement: {
        prototype: HTMLPageTemplateListElement;
        new (): HTMLPageTemplateListElement;
    };
    interface HTMLElementTagNameMap {
        "block-navigation": HTMLBlockNavigationElement;
        "fireenjin-app-icon": HTMLFireenjinAppIconElement;
        "fireenjin-app-router": HTMLFireenjinAppRouterElement;
        "modal-add-project": HTMLModalAddProjectElement;
        "modal-login": HTMLModalLoginElement;
        "page-home": HTMLPageHomeElement;
        "page-projects": HTMLPageProjectsElement;
        "page-template": HTMLPageTemplateElement;
        "page-template-list": HTMLPageTemplateListElement;
    }
}
declare namespace LocalJSX {
    interface BlockNavigation {
        "db"?: DatabaseService;
        "links"?: {
    label?: string;
    icon?: string;
    href?: string;
    activeClassExactMatch?: boolean;
  }[];
    }
    interface FireenjinAppIcon {
        "showBackground"?: boolean;
    }
    interface FireenjinAppRouter {
    }
    interface ModalAddProject {
    }
    interface ModalLogin {
        "auth"?: AuthService;
    }
    interface PageHome {
        "onFireenjinTrigger"?: (event: PageHomeCustomEvent<FireEnjinTriggerInput>) => void;
    }
    interface PageProjects {
    }
    interface PageTemplate {
        "app"?: FirebaseApp;
        "db"?: DatabaseService;
        "fireenjin"?: FireEnjin;
        "onFireenjinTrigger"?: (event: PageTemplateCustomEvent<FireEnjinTriggerInput>) => void;
        "templateId"?: string;
    }
    interface PageTemplateList {
    }
    interface IntrinsicElements {
        "block-navigation": BlockNavigation;
        "fireenjin-app-icon": FireenjinAppIcon;
        "fireenjin-app-router": FireenjinAppRouter;
        "modal-add-project": ModalAddProject;
        "modal-login": ModalLogin;
        "page-home": PageHome;
        "page-projects": PageProjects;
        "page-template": PageTemplate;
        "page-template-list": PageTemplateList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "block-navigation": LocalJSX.BlockNavigation & JSXBase.HTMLAttributes<HTMLBlockNavigationElement>;
            "fireenjin-app-icon": LocalJSX.FireenjinAppIcon & JSXBase.HTMLAttributes<HTMLFireenjinAppIconElement>;
            "fireenjin-app-router": LocalJSX.FireenjinAppRouter & JSXBase.HTMLAttributes<HTMLFireenjinAppRouterElement>;
            "modal-add-project": LocalJSX.ModalAddProject & JSXBase.HTMLAttributes<HTMLModalAddProjectElement>;
            "modal-login": LocalJSX.ModalLogin & JSXBase.HTMLAttributes<HTMLModalLoginElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-projects": LocalJSX.PageProjects & JSXBase.HTMLAttributes<HTMLPageProjectsElement>;
            "page-template": LocalJSX.PageTemplate & JSXBase.HTMLAttributes<HTMLPageTemplateElement>;
            "page-template-list": LocalJSX.PageTemplateList & JSXBase.HTMLAttributes<HTMLPageTemplateListElement>;
        }
    }
}
