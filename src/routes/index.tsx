import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button, Form } from "@fireenjin/components-qwik";

export default component$(() => {
  return (
    <div>
      <h1>Fire your Enjins!</h1>
      <Button size="large">asdfasd</Button>
      <Form>
        <input name="test" />
      </Form>
    </div>
  );
});

export const head: DocumentHead = {
  title: "FireEnjin",
  meta: [
    {
      name: "description",
      content: "The frameplay to your framework",
    },
  ],
};
