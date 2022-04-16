import { Component, h, Listen, Prop, State } from "@stencil/core";

@Component({
  tag: "block-navigation",
  styleUrl: "navigation.css",
})
export class BlockNavigation {
  @Prop() links: {
    label?: string;
    icon?: string;
    href?: string;
    activeClassExactMatch?: boolean;
  }[] = [
    {
      label: "Dashboard",
      icon: "home",
      href: "/",
    },
    {
      label: "Projects",
      icon: "grid",
      href: "/projects",
    },
  ];

  @State() activeLink: string;

  @Listen("ionRouteDidChange", {
    target: "body",
  })
  onRouteDidChange(event) {
    this.activeLink = event.detail.to;
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
        <ion-img src="./assets/icon/icon.svg" />
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
