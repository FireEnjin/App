import { Component, h } from "@stencil/core";

@Component({
  tag: "page-projects",
  styleUrl: "projects.css",
})
export class PageProjects {
  render() {
    return (
      <ion-content>
        <ion-list>
          <ion-item>FireEnjin</ion-item>
        </ion-list>
      </ion-content>
    );
  }
}
