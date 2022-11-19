import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Maker from "~/components/maker/maker";

export default component$(() => {
  return (
    <div>
      <Maker />
      {/* <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
