import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$Notas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Notas;
  const { era, titulo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative", [
    {
      "text-debut-900": era === "debut",
      "text-fearless-900": era === "fearless",
      "text-speakNow-900": era === "speakNow",
      "text-red-900": era === "red",
      "text-1989-900": era === "1989",
      "text-reputation-900": era === "reputation",
      "text-lover-900": era === "lover",
      "text-folklore-900": era === "folklore",
      "text-evermore-900": era === "evermore",
      "text-midnights-900": era === "midnights",
      "text-TTPD-900": era === "TTPD",
      "text-mashup-900": era === "mashup"
    }
  ]], "class:list")}> <h2 class="text-display-medium relative self-stretch"> ${titulo} </h2> <p class="text-title-medium relative self-stretch" style="letter-spacing: var(--title-medium-letter-spacing, 0.15px)"> ${renderSlot($$result, $$slots["default"])} </p> </section>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/Notas.astro", void 0);

export { $$Notas as $ };
