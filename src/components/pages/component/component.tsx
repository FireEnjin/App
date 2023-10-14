import { DatabaseService } from "@fireenjin/sdk";
import { Build, Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "page-component",
  styleUrl: "component.css",
})
export class PageComponent {
  @Prop() componentId: string;
  @Prop() db: DatabaseService;

  @State() component: any;

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.component = await this.db.find("components", this.componentId);
  }

  render() {
    return (
      <ion-content class="ion-padding has-header">
        <fireenjin-form
          documentId={this.componentId}
          endpoint={
            !this.componentId || this.componentId === "new"
              ? "addComponent"
              : "editComponent"
          }
        >
          <fireenjin-code-editor
            name="code"
            value={this.component?.code || ""}
          />
        </fireenjin-form>
      </ion-content>
    );
  }
}
