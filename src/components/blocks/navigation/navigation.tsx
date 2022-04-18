import { DatabaseService } from "@fireenjin/sdk";
import { Build, Component, h, Listen, Prop, State } from "@stencil/core";
import state from "../../../store";

@Component({
  tag: "block-navigation",
  styleUrl: "navigation.css",
})
export class BlockNavigation {
  @Prop() db: DatabaseService;
  @Prop() links: {
    label?: string;
    icon?: string;
    href?: string;
    activeClassExactMatch?: boolean;
  }[] = [
    {
      label: "Home",
      icon: "home",
      href: "/",
    },
    {
      label: "Projects",
      icon: "grid",
      href: "/projects",
    },
    {
      label: "Templates",
      icon: "create",
      href: "/templates",
    },
  ];

  @State() activeLink: string;

  @Listen("ionRouteDidChange", {
    target: "body",
  })
  onRouteDidChange(event) {
    this.activeLink = event.detail.to;
  }

  @Listen("load", { target: "window" })
  async onLoad() {
    if (!Build?.isBrowser) return;
    try {
      const templatesQuery = await this.db.getCollection("templates");
      state.templates = (templatesQuery?.docs || []).map((templateDoc) => ({
        id: templateDoc.id,
        ...templateDoc.data(),
      }));
      console.log(state.templates);
    } catch (error) {
      console.log("Error getting templates", error);
    }
    try {
      const projectsQuery = await this.db.getCollection("projects");
      state.projects = (projectsQuery?.docs || []).map((projectDoc) => ({
        id: projectDoc.id,
        ...projectDoc.data(),
      }));
      console.log(state.projects);
    } catch (error) {
      console.log("Error getting projects", error);
    }
  }

  setItemClasses(link: string | string[], exact = false) {
    return typeof link === "string"
      ? exact && link === this.activeLink
        ? "ion-activated"
        : !exact && this.activeLink && this.activeLink.indexOf(link) >= 0
        ? "ion-activated"
        : null
      : link.indexOf(this.activeLink) >= 0
      ? "ion-activated"
      : null;
  }

  render() {
    return (
      <ion-list>
        <fireenjin-app-icon showBackground />
        {(this.links || []).map((link) => (
          <ion-item
            lines="none"
            href={link?.href || "#"}
            class={
              link?.href
                ? this.setItemClasses(
                    link.href,
                    link?.activeClassExactMatch || link?.href === "/"
                  )
                : ""
            }
          >
            {link?.icon && <ion-icon name={link.icon} slot="start" />}
            {link?.label && <ion-label>{link.label}</ion-label>}
          </ion-item>
        ))}
      </ion-list>
    );
  }
}
