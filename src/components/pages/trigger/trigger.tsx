import { Build, Component, Listen, Prop, State, h } from "@stencil/core";
import state from "../../../store";
import getEventTypeOptions from "../../../helpers/getEventTypeOptions";
import getModelOptions from "../../../helpers/getModelOptions";

@Component({
  tag: "page-trigger",
  styleUrl: "trigger.css",
})
export class PageTrigger {
  @Prop() triggerId: string;

  @State() model = "User";
  @State() schema: any;

  @Listen("fireenjinSuccess")
  onSubmit(event) {
    if (
      event?.detail?.endpoint === "addTrigger" &&
      event?.detail?.data?.addTrigger?.id
    ) {
      document
        .querySelector("ion-router")
        .push(`/triggers/${event?.detail?.data?.addTrigger?.id}`);
    }
  }

  @Listen("ionChange", { target: "body" })
  onChange(event) {
    console.log(event);
    if (event.target.name === "model") this.model = event.target.value;
  }

  async componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.schema =
      (await (await fetch("/assets/json/graphql.schema.json"))?.json?.()) || {};
  }

  render() {
    return (
      <ion-content class="ion-padding has-header">
        <fireenjin-mx-trigger-editor
          triggerId={this.triggerId}
          triggerOptions={getEventTypeOptions()}
          modelOptions={getModelOptions()}
          actionOptions={{
            alert: {
              templates: state?.templates,
            },
            email: {
              templates: state?.templates,
            },
          }}
          groupOptions={[
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "Company",
              value: "company",
            },
            {
              label: "Project",
              value: "project",
            },
            {
              label: "User",
              value: "user",
            },
          ]}
          schema={this.schema}
        />
      </ion-content>
    );
  }
}
