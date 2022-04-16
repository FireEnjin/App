import { Component, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome {
  render() {
    return (
      <ion-content>
        <ion-img src="./assets/icon/icon.png" />
      </ion-content>
    );
  }
}
