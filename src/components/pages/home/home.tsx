import { Component, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome {
  render() {
    return (
      <ion-content>
        <ion-button href="/login">Login Now</ion-button>
      </ion-content>
    );
  }
}
