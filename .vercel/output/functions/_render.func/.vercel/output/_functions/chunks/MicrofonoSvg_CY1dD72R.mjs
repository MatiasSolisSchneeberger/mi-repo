import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$MapPinSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MapPinSVG;
  const { era, estado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-map-pin", [
    {
      "stroke-debut-300": estado === "pasado" && era === "debut",
      "stroke-fearless-300": estado === "pasado" && era === "fearless",
      "stroke-speakNow-300": estado === "pasado" && era === "speakNow",
      "stroke-red-300": estado === "pasado" && era === "red",
      "stroke-1989-300": estado === "pasado" && era === "1989",
      "stroke-reputation-300": estado === "pasado" && era === "reputation",
      "stroke-lover-300": estado === "pasado" && era === "lover",
      "stroke-folklore-300": estado === "pasado" && era === "folklore",
      "stroke-evermore-300": estado === "pasado" && era === "evermore",
      "stroke-midnights-300": estado === "pasado" && era === "midnights",
      "stroke-TTPD-300": estado === "pasado" && era === "TTPD",
      "stroke-mashup-300": estado === "pasado" && era === "mashup"
    },
    {
      "stroke-debut-900": estado === "ahora" && era === "debut",
      "stroke-fearless-900": estado === "ahora" && era === "fearless",
      "stroke-speakNow-900": estado === "ahora" && era === "speakNow",
      "stroke-red-900": estado === "ahora" && era === "red",
      "stroke-1989-900": estado === "ahora" && era === "1989",
      "stroke-reputation-900": estado === "ahora" && era === "reputation",
      "stroke-lover-900": estado === "ahora" && era === "lover",
      "stroke-folklore-900": estado === "ahora" && era === "folklore",
      "stroke-evermore-900": estado === "ahora" && era === "evermore",
      "stroke-midnights-900": estado === "ahora" && era === "midnights",
      "stroke-TTPD-900": estado === "ahora" && era === "TTPD",
      "stroke-mashup-900": estado === "ahora" && era === "mashup"
    },
    {
      "stroke-debut-900": estado === "futuro" && era === "debut",
      "stroke-fearless-900": estado === "futuro" && era === "fearless",
      "stroke-speakNow-900": estado === "futuro" && era === "speakNow",
      "stroke-red-900": estado === "futuro" && era === "red",
      "stroke-1989-900": estado === "futuro" && era === "1989",
      "stroke-reputation-900": estado === "futuro" && era === "reputation",
      "stroke-lover-900": estado === "futuro" && era === "lover",
      "stroke-folklore-900": estado === "futuro" && era === "folklore",
      "stroke-evermore-900": estado === "futuro" && era === "evermore",
      "stroke-midnights-900": estado === "futuro" && era === "midnights",
      "stroke-TTPD-900": estado === "futuro" && era === "TTPD",
      "stroke-mashup-900": estado === "futuro" && era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path></svg>`;
}, "/home/user/mi-repo/src/components/svg/MapPinSVG.astro", void 0);

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$MicrofonoSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MicrofonoSvg;
  const { era, estado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-microphone-2", [
    {
      "stroke-debut-300": estado === "pasado" && era === "debut",
      "stroke-fearless-300": estado === "pasado" && era === "fearless",
      "stroke-speakNow-300": estado === "pasado" && era === "speakNow",
      "stroke-red-300": estado === "pasado" && era === "red",
      "stroke-1989-300": estado === "pasado" && era === "1989",
      "stroke-reputation-300": estado === "pasado" && era === "reputation",
      "stroke-lover-300": estado === "pasado" && era === "lover",
      "stroke-folklore-300": estado === "pasado" && era === "folklore",
      "stroke-evermore-300": estado === "pasado" && era === "evermore",
      "stroke-midnights-300": estado === "pasado" && era === "midnights",
      "stroke-TTPD-300": estado === "pasado" && era === "TTPD",
      "stroke-mashup-300": estado === "pasado" && era === "mashup"
    },
    {
      "stroke-debut-900": estado === "ahora" && era === "debut",
      "stroke-fearless-900": estado === "ahora" && era === "fearless",
      "stroke-speakNow-900": estado === "ahora" && era === "speakNow",
      "stroke-red-900": estado === "ahora" && era === "red",
      "stroke-1989-900": estado === "ahora" && era === "1989",
      "stroke-reputation-900": estado === "ahora" && era === "reputation",
      "stroke-lover-900": estado === "ahora" && era === "lover",
      "stroke-folklore-900": estado === "ahora" && era === "folklore",
      "stroke-evermore-900": estado === "ahora" && era === "evermore",
      "stroke-midnights-900": estado === "ahora" && era === "midnights",
      "stroke-TTPD-900": estado === "ahora" && era === "TTPD",
      "stroke-mashup-900": estado === "ahora" && era === "mashup"
    },
    {
      "stroke-debut-900": estado === "futuro" && era === "debut",
      "stroke-fearless-900": estado === "futuro" && era === "fearless",
      "stroke-speakNow-900": estado === "futuro" && era === "speakNow",
      "stroke-red-900": estado === "futuro" && era === "red",
      "stroke-1989-900": estado === "futuro" && era === "1989",
      "stroke-reputation-900": estado === "futuro" && era === "reputation",
      "stroke-lover-900": estado === "futuro" && era === "lover",
      "stroke-folklore-900": estado === "futuro" && era === "folklore",
      "stroke-evermore-900": estado === "futuro" && era === "evermore",
      "stroke-midnights-900": estado === "futuro" && era === "midnights",
      "stroke-TTPD-900": estado === "futuro" && era === "TTPD",
      "stroke-mashup-900": estado === "futuro" && era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"></path> <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/MicrofonoSvg.astro", void 0);

export { $$MapPinSVG as $, $$MicrofonoSvg as a };
