import "@fireenjin/mx";
import * as jsonLogic from "json-logic-js";
import {
  DatabaseService,
  FireEnjin,
  FireEnjinTriggerInput,
} from "@fireenjin/sdk";
import {
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import state from "../../../store";

@Component({
  tag: "page-template",
  styleUrl: "template.css",
})
export class PageTemplate {
  editorEl: any;

  @Element() appTemplateEl: any;
  @Event() fireenjinTrigger: EventEmitter<FireEnjinTriggerInput>;

  @Prop() fireenjin: FireEnjin;
  @Prop() templateId: string;
  @Prop() db: DatabaseService;

  @State() isLoading = false;
  @State() renderedTemplateHtml: any;
  @State() viewCode = false;
  @State() template: any;

  @Listen("fireenjinSuccess", { target: "document" })
  onSuccess(event) {
    if (event?.detail?.endpoint === "findTemplate") {
      this.template = event.detail?.data?.template || null;
    } else if (
      event?.detail?.endpoint === "addTemplate" &&
      this.templateId === "new"
    ) {
      const routerEl = document.querySelector("ion-router");
      this.templateId = event?.detail?.data?.addTemplate?.id || "new";
      if (routerEl) routerEl.push(`/templates/${this.templateId}`);
    } else if (event?.detail?.endpoint === "editTemplate") {
      if (this.editorEl?.fetchData) this.editorEl.fetchData();
    }
  }

  async sync(template: any) {
    if (!template?.id) return;
    let response;
    try {
      response = await fetch(
        `https://us-central1-${
          state.config.env === "live" ? "the-flood-team" : "ftms-ca85b"
        }.cloudfunctions.net/api/template/${template.id}`,
        {
          method: "POST",
          body: JSON.stringify(template),
        }
      );
    } catch (e) {
      console.log("Error syncing template to live site!");
    }

    return response?.json ? response.json() : null;
  }

  async openPdfPreview() {
    if (!this.editorEl?.save) return;
    await this.editorEl.save();
    await this.editorEl.generatePdf();
  }

  componentDidLoad() {
    if (!Build?.isBrowser) return;
    this.db.watchDocument("templates", this.templateId, () => {
      this.editorEl.fetchData();
    });
  }

  render() {
    const pin: any = {
      href: `/templates/${this.templateId}`,
      name: this.template?.subject || "Template",
      icon: "document",
    };
    return [
      <ion-content>
        {Build?.isBrowser && (
          <fireenjin-mx-editor
            class={{
              "is-on-canvas": ["contract", "pdf", "email"].includes(
                this.template?.type
              ),
            }}
            ref={(el) => (this.editorEl = el)}
            templateData={this.template?.sampleData}
            isPreviewing={state?.isPreviewing}
            templateId={this.templateId}
            partials={state?.partials || []}
            helpers={{
              formatUSD: (amount) => {
                const formatter = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                });

                return formatter.format(amount ? amount : 0);
              },
              logic: (context, rules, tempData) =>
                jsonLogic.apply(
                  JSON.parse(rules.replace('"@tempData"', tempData)),
                  {
                    ...context,
                    tempData,
                  }
                ),
            }}
            types={[
              {
                label: "Component",
                value: "component",
              },
              {
                label: "Email",
                value: "email",
              },
              {
                label: "Contract",
                value: "contract",
              },
              {
                label: "PDF",
                value: "pdf",
              },
              {
                label: "Feed Card",
                value: "feed",
              },
              {
                label: "Message",
                value: "message",
              },
              {
                label: "Web Page",
                value: "page",
              },
            ]}
          />
        )}
      </ion-content>,
      <ion-footer>
        <fireenjin-chip-bar>
          <ion-router-link onClick={() => this.editorEl?.save?.()}>
            <ion-chip>
              <ion-icon name="save" />
              <ion-label>Save</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link onClick={() => this.editorEl?.togglePreview?.()}>
            <ion-chip>
              <ion-icon
                name={!!this.editorEl?.isPreviewing ? "eye-off" : "eye"}
              />
              <ion-label>Preview</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link
            onClick={() => this.editorEl?.openTemplateInfoModal?.()}
          >
            <ion-chip>
              <ion-icon name="information" />
              <ion-label>Info</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link onClick={() => this.editorEl?.openHeaderModal?.()}>
            <ion-chip>
              <ion-icon name="code-slash" />
              <ion-label>Header</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link onClick={() => this.editorEl?.openFooterModal?.()}>
            <ion-chip>
              <ion-icon name="code-slash" />
              <ion-label>Footer</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link
            onClick={() => this.editorEl?.openSampleDataModal?.()}
          >
            <ion-chip>
              <ion-icon name="code-slash" />
              <ion-label>Sample Data</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link
            onClick={() => this.editorEl?.openSendEmailModal?.()}
          >
            <ion-chip>
              <ion-icon name="mail" />
              <ion-label>Email</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link onClick={() => this.openPdfPreview()}>
            <ion-chip>
              <ion-icon name="document" />
              <ion-label>PDF</ion-label>
            </ion-chip>
          </ion-router-link>
          <ion-router-link
            onClick={() =>
              this.fireenjinTrigger.emit({
                name: "pin",
                payload: pin,
              })
            }
          >
            <ion-chip>
              <ion-icon name="pin" />
              <ion-label>
                {(state?.pins || []).map((p) => p?.href)?.includes(pin?.href)
                  ? "Unpin"
                  : "Pin"}
              </ion-label>
            </ion-chip>
          </ion-router-link>
        </fireenjin-chip-bar>
      </ion-footer>,
    ];
  }
}
