import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$MusicSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MusicSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-music", [
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
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M9 17v-13h10v13"></path> <path d="M9 8h10"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/MusicSVG.astro", void 0);

export { $$MusicSVG as $ };
