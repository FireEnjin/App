import {
  Component,
  ComponentInterface,
  h,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import { loadingController } from "@ionic/core";

import { AuthService } from "@fireenjin/sdk";
import state from "../../../store";

@Component({
  tag: "page-login",
  styleUrl: "login.css",
})
export class PageLogin implements ComponentInterface {
  @Prop() auth: AuthService;
  @Prop({ mutable: true }) email: string;

  @State() error: string;
  @State() isAwaitingEmail = false;
  @State() isUsingEmailLink = false;
  @State() password: string;

  @Listen("ionChange")
  onChange(event) {
    if (event?.target?.name === "email" && event?.target?.value) {
      this.email = event.target.value;
    } else if (event?.target?.name === "password" && event?.target?.value) {
      this.password = event.target.value;
    }
  }

  async presentLoading() {
    const loading = await loadingController.create({
      cssClass: "my-custom-class",
      message: "Please wait...",
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!", role, data);
  }

  async login(type: string) {
    this.error = null;
    this.presentLoading();
    let res;
    try {
      res =
        type === "email"
          ? this.isUsingEmailLink
            ? await this.auth.withEmailLink(this.email, {
                url: state?.config?.url,
                dynamicLinkDomain: state?.config?.dynamicLinkDomain,
                iOS: {
                  bundleId: "net.madnessenjin.gerdau",
                },
                android: {
                  packageName: "net.madnessenjin.gerdau",
                  installApp: false,
                  minimumVersion: "12",
                },
                handleCodeInApp: true,
              })
            : await this.auth.withEmail(this.email, this.password)
          : await this.auth.withSocial(type);
      if (res?.user?.uid || res?.data?.user) {
        const routerEl = document.querySelector("ion-router");
        routerEl.push("dashboard");
      }
      if (type === "email" && this.isUsingEmailLink) {
        this.isAwaitingEmail = true;
      }
    } catch (error) {
      this.error = error.message;
    }
  }

  async sendPasswordReset() {
    if (!this.email?.length) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      this.presentLoading();
      await this.auth.sendPasswordReset(this.email);
      this.isAwaitingEmail = true;
    } catch (error) {
      this.error = error.message;
    }
  }

  render() {
    return [
      <app-header pageTitle="Login"></app-header>,
      <ion-content class="ion-padding">
        <fireenjin-app-icon
          style={{ width: "90%", maxWidth: "300px", margin: "20px auto" }}
        />
        {this.error && (
          <ion-label
            style={{
              display: "block",
              maxWidth: "500px",
              margin: "15px auto 0 auto",
            }}
            color="danger"
          >
            <ion-icon name="information-circle" /> {this.error}
          </ion-label>
        )}
        {this.isAwaitingEmail ? (
          <ion-grid style={{ maxWidth: "500px", margin: "0 auto" }}>
            <ion-row>
              <ion-col class="ion-padding">
                <ion-icon
                  style={{
                    display: "block",
                    width: "100px",
                    height: "100px",
                    color: "var(--ion-color-medium-tint)",
                    margin: "15px auto",
                  }}
                  name="mail"
                />
                <ion-label>
                  We sent an email to {this.email} with instructions. Please
                  check your inbox and spam folders.
                </ion-label>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-button
                  fill="outline"
                  expand="block"
                  onClick={() => (this.isAwaitingEmail = false)}
                >
                  <ion-icon slot="start" name="arrow-back" />
                  <ion-label>Go Back</ion-label>
                </ion-button>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
        ) : (
          <ion-grid style={{ maxWidth: "500px", margin: "0 auto" }}>
            <ion-row>
              <ion-col>
                <fireenjin-input
                  name="email"
                  type="email"
                  label="Email Address"
                  labelPosition="stacked"
                  placeholder="j.doe@gerdau.com"
                  value={this.email}
                  required
                />
                {!this.isUsingEmailLink && (
                  <fireenjin-input
                    name="password"
                    type="password"
                    labelPosition="stacked"
                    label="Password"
                    required
                  />
                )}
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-button
                  fill="outline"
                  expand="block"
                  onClick={() =>
                    (this.isUsingEmailLink = !this.isUsingEmailLink)
                  }
                >
                  <ion-icon
                    slot="start"
                    name={!this.isUsingEmailLink ? "mail" : "lock-closed"}
                  />
                  <ion-label>
                    {this.isUsingEmailLink
                      ? "Sign-in with Password"
                      : "Sign-in With Email Link"}
                  </ion-label>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button
                  color="warning"
                  expand="block"
                  onClick={() => this.login("email")}
                >
                  <ion-label>Sign-in</ion-label>
                  <ion-icon slot="end" name="log-in" />
                </ion-button>
              </ion-col>
            </ion-row>
            {!this.isUsingEmailLink && (
              <ion-row>
                <ion-col>
                  <ion-button
                    fill="clear"
                    color="medium"
                    expand="block"
                    onClick={() => this.sendPasswordReset()}
                  >
                    Forgot my Password
                  </ion-button>
                </ion-col>
              </ion-row>
            )}
          </ion-grid>
        )}
      </ion-content>,
    ];
  }
}
