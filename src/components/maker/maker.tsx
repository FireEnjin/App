import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./maker.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div
      style="position: absolute; top: 0; left: 0; right: 0;
  bottom: 0;"
      onClick$={(event) => {
        console.log(event);
        const newEl = document.createElement("span");
        newEl.style.position = "absolute";
        newEl.style.left = `${event.clientX - 15}px`;
        newEl.style.top = `${event.clientY - 15}px`;
        newEl.style.minHeight = "30px";
        newEl.style.minWidth = "30px";
        newEl.style.background = "#ffffff";
        (event.target as HTMLDivElement).appendChild(newEl);
        newEl.contentEditable = "true";
        newEl.focus();
      }}
    >
      Testing
    </div>
  );
});
