import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$SubTitulo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubTitulo;
  const { era, titulo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "flex flex-col w-full gap-3 items-start justify-start self-stretch shrink-0 relative",
    {
      "text-debut-900 dark:text-debut-100": era === "debut",
      "text-fearless-900 dark:text-fearless-100": era === "fearless",
      "text-speakNow-900 dark:text-speakNow-100": era === "speakNow",
      "text-red-900 dark:text-red-100": era === "red",
      "text-1989-900 dark:text-1989-100": era === "1989",
      "text-reputation-900 dark:text-reputation-100": era === "reputation",
      "text-lover-900 dark:text-lover-100": era === "lover",
      "text-folklore-900 dark:text-folklore-100": era === "folklore",
      "text-evermore-900 dark:text-evermore-100": era === "evermore",
      "text-midnights-900 dark:text-midnights-100": era === "midnights",
      "text-TTPD-900 dark:text-TTPD-100": era === "TTPD",
      "text-mashup-900 dark:text-mashup-100": era === "mashup"
    }
  ], "class:list")}> <h2 class="text-center text-headline-large relative self-stretch"> ${titulo} </h2> <p class="text-body-large text-center relative text-pretty self-stretch"> ${renderSlot($$result, $$slots["default"])} </p> </section>`;
}, "/home/user/mi-repo/src/components/SubTitulo.astro", void 0);

export { $$SubTitulo as $ };
