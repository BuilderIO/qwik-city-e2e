import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  MUIButton,
  MUIOutlinedCard,
  MUISlider,
  TableApp,
} from "../../integrations/react/mui";

export default component$(() => {
  const show = useSignal(false);
  const count = useSignal(0);
  const variant = useSignal<"contained" | "outlined" | "text">("contained");

  return (
    <>
      <h1>Qwik React</h1>

      <select
        value={variant.value}
        onChange$={(ev) => {
          variant.value = (ev.target as any).value;
        }}
      >
        <option>text</option>
        <option>outlined</option>
        <option selected>contained</option>
      </select>

      <MUISlider
        value={count.value}
        onChange$={(_, value) => {
          count.value = value as number;
        }}
      />

      <MUIOutlinedCard
        client:load
        word="Handsome"
        meaning="Good looking person"
      />

      <MUIButton variant={variant.value} host:onClick$={() => alert("click")}>
        Slider is {count.value}
      </MUIButton>

      <button onClick$={() => (show.value = true)}>Show table</button>
      {show.value && (
        <TableApp client:visible>Slider is {count.value}</TableApp>
      )}
      <h4 class="finished-qwik">Everything rendered</h4>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
