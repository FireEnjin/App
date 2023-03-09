import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://madnesslabs.net/" target="_blank">
          Made with ♡ by Madness Labs
        </a>
      </footer>
    </>
  );
});
