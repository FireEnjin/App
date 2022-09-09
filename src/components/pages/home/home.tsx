import { FireEnjinTriggerInput } from "@fireenjin/sdk";
import { Component, Event, EventEmitter, h } from "@stencil/core";
import state from "../../../store";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome {
  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  render() {
    return (
      <ion-content>
        <h1>It's Time.</h1>
        <fireenjin-form
          fetch="findUser"
          endpoint="editUser"
          fetchKey="user"
          documentId={state?.session?.uid}
          filterData={["firstName", "lastName", "email"]}
        >
          <fireenjin-input name="firstName" data-fill />
          <fireenjin-input name="lastName" data-fill />
          <fireenjin-input type="email" name="email" data-fill />
        </fireenjin-form>
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
