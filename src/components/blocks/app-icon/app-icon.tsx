import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "fireenjin-app-icon",
})
export class icon {
  @Prop() showBackground? = false;

  render() {
    return (
      <Host
        style={{
          display: "block",
        }}
      >
        <div
          class="icon-wrapper"
          style={{
            display: "block",
            margin: "0 auto",
            backgroundColor: this.showBackground
              ? "var(--ion-background-color)"
              : "transparent",
            borderRadius: "100%",
            position: "relative",
            padding: "5px",
          }}
        >
          <svg
            style={{
              display: "block",
              margin: "auto",
              height: `100%`,
              width: `100%`,
            }}
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M199 95C199 85.6112 206.611 78 216 78H357C366.389 78 374 85.6112 374 95V119C374 128.389 366.389 136 357 136H216C206.611 136 199 128.389 199 119V95Z"
              fill="#913DCE"
            />
            <path d="M257 136H317V155H257V136Z" fill="#6D0CB3" />
            <path
              d="M124.769 215L181.269 163H379.769C395.369 163 400.5 175.667 401 182V347.5L330.769 421H164.269L124.769 380.5C121.269 379.5 110 380.5 104.769 380.5C96.7987 380.5 96.3333 372.833 97 367.5C97.6666 323.5 97 232.986 97 226C97 215 104 215 107.769 215H124.769Z"
              fill="#913DCE"
            />
            <path
              d="M35 238C35 229.716 41.7157 223 50 223H55C63.2843 223 70 229.716 70 238V351C70 359.284 63.2843 366 55 366H50C41.7157 366 35 359.284 35 351V238Z"
              fill="#913DCE"
            />
            <path
              d="M428 193C428 184.716 434.716 178 443 178H449C457.284 178 464 184.716 464 193V310C464 318.284 457.284 325 449 325H443C434.716 325 428 318.284 428 310V193Z"
              fill="#913DCE"
            />
            <path d="M70 257H98V329H70V257Z" fill="#6D0CB3" />
            <path d="M401 216H428V287H401V216Z" fill="#6D0CB3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M272.294 228.261C267.892 236.771 254.333 254.497 235.316 257.315C211.544 260.837 191.914 265.239 175.626 289.451C159.31 313.704 189.533 371.331 213.745 378.374C237.957 385.417 285.5 395.102 326 320.266C320.864 325.548 304.958 335.761 282.419 334.353C319.126 312.493 338.326 259.076 310.152 186C308.685 206.69 299.323 250.271 273.614 259.076C275.375 254.527 277.576 241.995 272.294 228.261ZM273.822 285.805C256.004 287.861 215.5 296.5 202.5 337C162 296 234.854 262.174 273.822 285.805Z"
              fill="#EDE548"
            />
          </svg>
        </div>
      </Host>
    );
  }
}
