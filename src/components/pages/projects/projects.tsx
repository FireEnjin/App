import { Component, h } from "@stencil/core";
import state from "../../../store";

@Component({
  tag: "page-projects",
  styleUrl: "projects.css",
})
export class PageProjects {
  render() {
    return (
      <ion-content>
        <ion-list>
          {(state?.projects || []).map((project) => (
            <ion-item>{project?.name || "No Name Given"}</ion-item>
          ))}
        </ion-list>
        <fireenjin-form endpoint="addProject">
          <fireenjin-input label="Project Name" name="name" />
        </fireenjin-form>
      </ion-content>
    );
  }
}
