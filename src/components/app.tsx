import { Component, h } from "@stencil/core";

@Component({
  tag: "fireenjin-app",
})
export class FireEnjinApp {
  componentProps = {};

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route
            url="/"
            component="page-home"
            componentProps={this.componentProps}
          />
          <ion-route
            url="/projects"
            component="page-projects"
            componentProps={this.componentProps}
          />
        </ion-router>
        <ion-router-outlet />
      </ion-app>
    );
  }
}
