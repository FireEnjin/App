import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import { Component, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome {
  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  render() {
    return (
      <ion-content>
        <ion-button
          onClick={() =>
            this.fireenjinTrigger.emit({
              name: "openModal",
              payload: {
                component: "modal-login",
              },
            })
          }
        >
          Login Now
        </ion-button>
      </ion-content>
    );
  }
}
