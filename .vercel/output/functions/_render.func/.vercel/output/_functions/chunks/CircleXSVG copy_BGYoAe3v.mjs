import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$3 = createAstro("https:matiassolisschneeberger.github.io");
const $$CalendarSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CalendarSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute(["icon icon-tabler icons-tabler-filled icon-tabler-calendar", [
    {
      "fill-debut-900": era === "debut",
      "fill-fearless-900": era === "fearless",
      "fill-speakNow-900": era === "speakNow",
      "fill-red-900": era === "red",
      "fill-1989-900": era === "1989",
      "fill-reputation-900": era === "reputation",
      "fill-lover-900": era === "lover",
      "fill-folklore-900": era === "folklore",
      "fill-evermore-900": era === "evermore",
      "fill-midnights-900": era === "midnights",
      "fill-TTPD-900": era === "TTPD",
      "fill-mashup-900": era === "mashup"
    }
  ]], "class:list")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z"></path> <path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/CalendarSVG.astro", void 0);

const $$Astro$2 = createAstro("https:matiassolisschneeberger.github.io");
const $$CircleCaretRightSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CircleCaretRightSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-circle-caret-right", [
    {
      "stroke-debut-900": era === "debut",
      "stroke-fearless-900": era === "fearless",
      "stroke-speakNow-900": era === "speakNow",
      "stroke-red-900": era === "red",
      "stroke-1989-900": era === "1989",
      "stroke-reputation-900": era === "reputation",
      "stroke-lover-900": era === "lover",
      "stroke-folklore-900": era === "folklore",
      "stroke-evermore-900": era === "evermore",
      "stroke-midnights-900": era === "midnights",
      "stroke-TTPD-900": era === "TTPD",
      "stroke-mashup-900": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 12l-4 -4v8z"></path> <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/CircleCaretRightSVG.astro", void 0);

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$StarSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StarSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute(["icon icon-tabler icons-tabler-filled icon-tabler-star", [
    {
      "fill-debut-100": era === "debut",
      "fill-fearless-100": era === "fearless",
      "fill-speakNow-100": era === "speakNow",
      "fill-red-100": era === "red",
      "fill-1989-100": era === "1989",
      "fill-reputation-100": era === "reputation",
      "fill-lover-100": era === "lover",
      "fill-folklore-100": era === "folklore",
      "fill-evermore-100": era === "evermore",
      "fill-midnights-100": era === "midnights",
      "fill-TTPD-100": era === "TTPD",
      "fill-mashup-100": era === "mashup"
    }
  ]], "class:list")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/StarSVG.astro", void 0);

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$CircleXSVGCopy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CircleXSVGCopy;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute(["icon icon-tabler icons-tabler-filled icon-tabler-circle-x", [
    {
      "fill-debut-100": era === "debut",
      "fill-fearless-100": era === "fearless",
      "fill-speakNow-100": era === "speakNow",
      "fill-red-100": era === "red",
      "fill-1989-100": era === "1989",
      "fill-reputation-100": era === "reputation",
      "fill-lover-100": era === "lover",
      "fill-folklore-100": era === "folklore",
      "fill-evermore-100": era === "evermore",
      "fill-midnights-100": era === "midnights",
      "fill-TTPD-100": era === "TTPD",
      "fill-mashup-100": era === "mashup"
    }
  ]], "class:list")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/CircleXSVG copy.astro", void 0);

export { $$StarSVG as $, $$CircleXSVGCopy as a, $$CalendarSVG as b, $$CircleCaretRightSVG as c };
