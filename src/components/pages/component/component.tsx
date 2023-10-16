import { DatabaseService } from "@fireenjin/sdk";
import { Build, Component, Listen, Prop, State, h } from "@stencil/core";

@Component({
  tag: "page-component",
  styleUrl: "component.css",
})
export class PageComponent {
  leftEl: HTMLElement;
  rightEl: HTMLElement;
  codeEditorEl: any;

  @Prop() componentId: string;
  @Prop() db: DatabaseService;

  @State() component: any;
  @State() mouseDown = false;

  @Listen("mouseup")
  @Listen("touchend")
  onMouseUp() {
    this.mouseDown = false;
  }

  @Listen("mousemove")
  onMouseMove(event: MouseEvent) {
    if (!this.mouseDown) return;
    this.leftEl.style.width = `${event.clientX - 200}px`;
    this.codeEditorEl.resize();
  }

  @Listen("touchmove")
  onTouchMove(event: TouchEvent) {
    if (!this.mouseDown) return;
    this.leftEl.style.width = `${event.changedTouches[0]?.clientX - 200}px`;
    this.codeEditorEl.resize();
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.component = await this.db.find("components", this.componentId);
  }

  render() {
    return (
      <ion-content>
        <div class="container split">
          <div ref={(el) => (this.leftEl = el)} class="split__left">
            <fireenjin-form
              documentId={this.componentId}
              endpoint={
                !this.componentId || this.componentId === "new"
                  ? "addComponent"
                  : "editComponent"
              }
            >
              <fireenjin-code-editor
                ref={(el) => (this.codeEditorEl = el)}
                name="code"
                language="mdx"
                value={this.component?.code || ""}
                autoExpand
              />
            </fireenjin-form>
          </div>
          <div
            class="split__bar"
            onMouseDown={() => (this.mouseDown = true)}
            onTouchStart={() => (this.mouseDown = true)}
          />
          <div ref={(el) => (this.rightEl = el)} class="split__right">
            <iframe
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </ion-content>
    );
  }
}
