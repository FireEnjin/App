import { Component, Listen, State, h } from "@stencil/core";
import Fuse from "fuse.js";
import state from "../../../store";

@Component({
  tag: "page-template-list",
  styleUrl: "template-list.css",
})
export class PageTemplateList {
  filterBarEl: any;

  @State() searchResults: any[];
  @State() paginationEl: any;

  @Listen("ionChange")
  async search(event) {
    const query = event?.target?.value;
    if (!state.templates?.length || !query?.length) {
      this.searchResults = null;
      return;
    }
    const fuse = new Fuse(state.templates, {
      keys: ["subject", "description"],
    });
    this.searchResults = await fuse.search(query).map((result) => result?.item);
  }

  @Listen("ionCancel")
  async cancel() {
    this.searchResults = null;
  }

  render() {
    const templates = this.searchResults || state.templates || [];

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
            href="/templates/new"
          >
            Add
          </ion-button>
        </div>
        <ion-list class="ion-no-padding">
          {templates
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
            .map((template, index) => [
              templates?.[index - 1]?.type !== template?.type && (
                <ion-item-divider>{template.type}</ion-item-divider>
              ),
              <ion-item href={`/templates/${template?.id}`} detail>
                <ion-label>
                  <h2>{template?.subject || template?.id || ""}</h2>
                  <p>{template?.description || "No Description on File..."}</p>
                </ion-label>
              </ion-item>,
            ])}
        </ion-list>
      </ion-content>,
    ];
  }
}
