import { Component, Listen, State, h } from "@stencil/core";
import User from "../../../models/User";
import Fuse from "fuse.js";
import state from "../../../store";

@Component({
  tag: "page-trigger-list",
  styleUrl: "trigger-list.css",
})
export class PageTriggerList {
  filterBarEl: any;

  @State() searchResults: any[];
  @State() paginationEl: any;

  @Listen("ionChange")
  async search(event) {
    await User.add({
      firstName: "C",
      lastName: "J",
    } as any);
    const user = new User();
    user.firstName = "Bob";
    user.lastName = "Johnson";
    console.log(await user.save());
    const query = event?.target?.value;
    const fuse = new Fuse(state?.triggers || [], {
      keys: ["subject", "description"],
    });
    this.searchResults = await fuse.search(query).map((result) => result?.item);
  }

  @Listen("ionCancel")
  async cancel() {
    this.searchResults = null;
  }

  render() {
    const triggers = this.searchResults || state?.triggers || [];

    return [
      <ion-content>
        <div
          class="ion-padding"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <fireenjin-search-bar
            ref={(el) => (this.filterBarEl = el)}
            paginationEl={this.paginationEl}
            filters={[
              {
                name: "tags",
                label: "Tags",
                icon: "pricetags",
                multiple: true,
                options: [
                  {
                    label: "Imported",
                    value: "imported",
                  },
                ],
              },
            ]}
          />
          <ion-button
            style={{ display: "table-cell", marginLeft: "auto" }}
            fill="solid"
            color="primary"
            shape="round"
            href="/triggers/new"
          >
            Add
          </ion-button>
        </div>
        <ion-list class="ion-no-padding">
          {triggers
            .sort(function (a: any, b: any) {
              var subjectA = a?.subject?.toUpperCase?.() || "";
              var subjectB = b?.subject?.toUpperCase?.() || "";
              if (subjectA < subjectB) {
                return -1;
              }
              if (subjectA > subjectB) {
                return 1;
              }

              // names must be equal
              return 0;
            })
            .sort(function (a: any, b: any) {
              var typeA = a?.type?.toUpperCase?.() || "";
              var typeB = b?.type?.toUpperCase?.() || "";
              if (typeA < typeB) {
                return -1;
              }
              if (typeA > typeB) {
                return 1;
              }

              // names must be equal
              return 0;
            })
            .map((trigger, index) => [
              triggers?.[index - 1]?.type !== trigger?.type && (
                <ion-item-divider>{trigger.type}</ion-item-divider>
              ),
              <ion-item href={`/triggers/${trigger?.id}`} detail>
                <ion-label>
                  <h2>{trigger?.subject || trigger?.id || ""}</h2>
                  <p>{trigger?.description || "No Description on File..."}</p>
                </ion-label>
              </ion-item>,
            ])}
        </ion-list>
      </ion-content>,
    ];
  }
}
