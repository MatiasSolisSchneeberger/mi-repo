/* empty css                                      */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, f as renderTransition, d as renderComponent } from '../chunks/astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import { a as $$ButtonPrimario, $ as $$Titulo, b as $$Layout } from '../chunks/Layout_oqMgRqbP.mjs';
import { $ as $$HeroImage } from '../chunks/HeroImage_DdSik-L_.mjs';
import 'clsx';
/* empty css                                 */
import { e as eras } from '../chunks/songs_BYCJa7wA.mjs';
import { $ as $$SubTitulo } from '../chunks/SubTitulo_CW7WNb9W.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$a = createAstro("https:matiassolisschneeberger.github.io");
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Chip;
  const { icono, era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<chip${addAttribute([
    "cursor-pointer transition hover:ease-in-out hover:duration-125 hover:scale-105 rounded-lg border-solid  border flex flex-row gap-0 items-center justify-center shrink-0 h-8 relative overflow-hidden",
    {
      "bg-debut-200       border-debut-600": era === "debut",
      "bg-fearless-200    border-fearless-600": era === "fearless",
      "bg-speakNow-200    border-speakNow-600": era === "speakNow",
      "bg-red-200         border-red-600": era === "red",
      "bg-1989-200        border-1989-600": era === "1989",
      "bg-reputation-200  border-reputation-600": era === "reputation",
      "bg-lover-200       border-lover-600": era === "lover",
      "bg-folklore-200    border-folklore-600": era === "folklore",
      "bg-evermore-200    border-evermore-600": era === "evermore",
      "bg-midnights-200   border-midnights-600": era === "midnights",
      "bg-TTPD-200        border-TTPD-600": era === "TTPD",
      "bg-mashup-200      border-mashup-600": era === "mashup"
    }
  ], "class:list")} style="
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3); 
    "> <div${addAttribute([
    "pt-1.5 pb-1.5 flex flex-row gap-2 items-center justify-center shrink-0 h-8 relative",
    {
      "pl-2 pr-4": icono === "Izq",
      "px-4": icono === null,
      "pl-4 pr-2": icono === "Der"
    }
  ], "class:list")}> ${renderSlot($$result, $$slots["before"])} <p${addAttribute([
    "text-center text-title-small relative flex items-center justify-center",
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
      "text-TTPD-900": era === "TTPD"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)"> ${renderSlot($$result, $$slots["default"])} </p> ${renderSlot($$result, $$slots["after"])}</div></chip>`;
}, "/home/user/mi-repo/src/components/Chip.astro", void 0);

const $$Astro$9 = createAstro("https:matiassolisschneeberger.github.io");
const $$ButtonSecundario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ButtonSecundario;
  const { href, era, icono } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank"${addAttribute([
    "rounded-full flex flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "dark:bg-debut-500 dark:hover:bg-debut-300 bg-debut-300 hover:bg-debut-400": era === "debut",
      "dark:bg-fearless-500 dark:hover:bg-fearless-300 bg-fearless-300 hover:bg-fearless-400": era === "fearless",
      "dark:bg-speakNow-500 dark:hover:bg-speakNow-300 bg-speakNow-300 hover:bg-speakNow-400": era === "speakNow",
      "dark:bg-red-500 dark:hover:bg-red-300 bg-red-300 hover:bg-red-400": era === "red",
      "dark:bg-1989-500 dark:hover:bg-1989-300 bg-1989-300 hover:bg-1989-400": era === "1989",
      "dark:bg-reputation-500 dark:hover:bg-reputation-300 bg-reputation-300 hover:bg-reputation-400": era === "reputation",
      "dark:bg-lover-500 dark:hover:bg-lover-300 bg-lover-300 hover:bg-lover-400": era === "lover",
      "dark:bg-folklore-500 dark:hover:bg-folklore-300 bg-folklore-300 hover:bg-folklore-400": era === "folklore",
      "dark:bg-evermore-500 dark:hover:bg-evermore-300 bg-evermore-300 hover:bg-evermore-400": era === "evermore",
      "dark:bg-midnights-500 dark:hover:bg-midnights-300 bg-midnights-300 hover:bg-midnights-400": era === "midnights",
      "dark:bg-TTPD-500 dark:hover:bg-TTPD-300 bg-TTPD-300 hover:bg-TTPD-400": era === "TTPD",
      "dark:bg-mashup-500 dark:hover:bg-mashup-300 bg-mashup-300 hover:bg-mashup-400": era === "mashup"
    }
  ], "class:list")}> <div${addAttribute([
    "px-4 py-4 flex flex-row gap-2 items-center justify-center self-stretch flex-1 relative",
    {
      "sm:pl-4 sm:pr-6": icono === "Izq",
      "sm:px-6": icono === null,
      "sm:pl-6 sm:pr-4": icono === "Der"
    }
  ], "class:list")}> ${renderSlot($$result, $$slots["before"])} <p${addAttribute([
    "hidden sm:flex text-center text-title-small relative items-center justify-center",
    {
      "text-debut-800 dark:text-debut-100": era === "debut",
      "text-fearless-800 dark:text-fearless-100": era === "fearless",
      "text-speakNow-800 dark:text-speakNow-100": era === "speakNow",
      "text-red-800 dark:text-red-100": era === "red",
      "text-1989-800 dark:text-1989-100": era === "1989",
      "text-reputation-800 dark:text-reputation-100": era === "reputation",
      "text-lover-800 dark:text-lover-100": era === "lover",
      "text-folklore-800 dark:text-folklore-100": era === "folklore",
      "text-evermore-800 dark:text-evermore-100": era === "evermore",
      "text-midnights-800 dark:text-midnights-100": era === "midnights",
      "text-TTPD-800 dark:text-TTPD-100": era === "TTPD",
      "text-mashup-800 dark:text-mashup-100": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)"> ${renderSlot($$result, $$slots["default"])} </p> ${renderSlot($$result, $$slots["after"])} </div> </a>`;
}, "/home/user/mi-repo/src/components/ButtonSecundario.astro", void 0);

const $$Astro$8 = createAstro("https:matiassolisschneeberger.github.io");
const $$LogoDiscos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LogoDiscos;
  const { era } = Astro2.props;
  const imageLogo = {
    debut: "/swifties-eras-tour/images/Logos-Discos/01-Logo-Debut.png",
    fearless: "/swifties-eras-tour/images/Logos-Discos/02-Logo-Fearless.png",
    speakNow: "/swifties-eras-tour/images/Logos-Discos/03-Logo-SpeakNow.png",
    red: "/swifties-eras-tour/images/Logos-Discos/04-Logo-Red.png",
    "1989": "/swifties-eras-tour/images/Logos-Discos/05-Logo-1989.png",
    reputation: "/swifties-eras-tour/images/Logos-Discos/06-Logo-Reputation.png",
    lover: "/swifties-eras-tour/images/Logos-Discos/07-Logo-Lover.png",
    folklore: "/swifties-eras-tour/images/Logos-Discos/08-Logo-Folklore.png",
    evermore: "/swifties-eras-tour/images/Logos-Discos/09-Logo-Evermore.png",
    midnights: "/swifties-eras-tour/images/Logos-Discos/10-Logo-Midnights.png",
    TTPD: "/swifties-eras-tour/images/Logos-Discos/11-Logo-TTPD.png",
    mashup: "/swifties-eras-tour/images/Logos-Discos/12-Logo-Mashups.png"
  };
  const logo = imageLogo[era];
  return renderTemplate`${maybeRenderHead()}<img class="bg-logo-debut self-stretch flex-1 relative h-full w-full object-contain"${addAttribute(logo, "src")}${addAttribute(`Logo del disco ${era}`, "alt")}${addAttribute(renderTransition($$result, "eyb5kg2q", "", "logo-disco"), "data-astro-transition-scope")}>`;
}, "/home/user/mi-repo/src/components/LogoDiscos.astro", "self");

const $$Astro$7 = createAstro("https:matiassolisschneeberger.github.io");
const $$InfoSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$InfoSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg height="18" viewBox="0 -960 960 960" width="18"${addAttribute({
    "dark:fill-debut-600 fill-debut-50": era === "debut",
    "dark:fill-fearless-600 fill-fearless-50": era === "fearless",
    "dark:fill-speakNow-600 fill-speakNow-50": era === "speakNow",
    "dark:fill-red-600 fill-red-50": era === "red",
    "dark:fill-1989-600 fill-1989-50": era === "1989",
    "dark:fill-reputation-600 fill-reputation-50": era === "reputation",
    "dark:fill-lover-600 fill-lover-50": era === "lover",
    "dark:fill-folklore-600 fill-folklore-50": era === "folklore",
    "dark:fill-evermore-600 fill-evermore-50": era === "evermore",
    "dark:fill-midnights-600 fill-midnights-50": era === "midnights",
    "dark:fill-TTPD-600 fill-TTPD-50": era === "TTPD",
    "dark:fill-mashup-600 fill-mashup-50": era === "mashup"
  }, "class:list")}> <path d="M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/InfoSvg.astro", void 0);

const $$Astro$6 = createAstro("https:matiassolisschneeberger.github.io");
const $$SpotifySvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SpotifySvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg viewBox="0 0 256 256" width="18" height="18" preserveAspectRatio="xMidYMid"> <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"${addAttribute({
    "fill-debut-900 dark:fill-debut-50": era === "debut",
    "fill-fearless-900 dark:fill-fearless-50": era === "fearless",
    "fill-speakNow-900 dark:fill-speakNow-50": era === "speakNow",
    "fill-red-900 dark:fill-red-50": era === "red",
    "fill-1989-900 dark:fill-1989-50": era === "1989",
    "fill-reputation-900 dark:fill-reputation-50": era === "reputation",
    "fill-lover-900 dark:fill-lover-50": era === "lover",
    "fill-folklore-900 dark:fill-folklore-50": era === "folklore",
    "fill-evermore-900 dark:fill-evermore-50": era === "evermore",
    "fill-midnights-900 dark:fill-midnights-50": era === "midnights",
    "fill-TTPD-900 dark:fill-TTPD-50": era === "TTPD",
    "fill-mashup-900 dark:fill-mashup-50": era === "mashup"
  }, "class:list")}></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/SpotifySvg.astro", void 0);

const $$Astro$5 = createAstro("https:matiassolisschneeberger.github.io");
const $$YTMusicSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$YTMusicSvg;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" xml:space="preserve" viewBox="0 0 192 192"> <path fill="none" d="M0 0h192v192H0z"></path> <circle cx="96" cy="96" r="88"${addAttribute({
    "fill-debut-900 dark:fill-debut-200": era === "debut",
    "fill-fearless-900 dark:fill-fearless-200": era === "fearless",
    "fill-speakNow-900 dark:fill-speakNow-200": era === "speakNow",
    "fill-red-900 dark:fill-red-200": era === "red",
    "fill-1989-900 dark:fill-1989-200": era === "1989",
    "fill-reputation-900 dark:fill-reputation-200": era === "reputation",
    "fill-lover-900 dark:fill-lover-200": era === "lover",
    "fill-folklore-900 dark:fill-folklore-200": era === "folklore",
    "fill-evermore-900 dark:fill-evermore-200": era === "evermore",
    "fill-midnights-900 dark:fill-midnights-200": era === "midnights",
    "fill-TTPD-900 dark:fill-TTPD-200": era === "TTPD",
    "fill-mashup-900 dark:fill-mashup-200": era === "mashup"
  }, "class:list")}></circle> <path${addAttribute([
    {
      "fill-debut-50 dark:fill-debut-700": era === "debut",
      "fill-fearless-50 dark:fill-fearless-700": era === "fearless",
      "fill-speakNow-50 dark:fill-speakNow-700": era === "speakNow",
      "fill-red-50 dark:fill-red-700": era === "red",
      "fill-1989-50 dark:fill-1989-700": era === "1989",
      "fill-reputation-50 dark:fill-reputation-700": era === "reputation",
      "fill-lover-50 dark:fill-lover-700": era === "lover",
      "fill-folklore-50 dark:fill-folklore-700": era === "folklore",
      "fill-evermore-50 dark:fill-evermore-700": era === "evermore",
      "fill-midnights-50 dark:fill-midnights-700": era === "midnights",
      "fill-TTPD-50 dark:fill-TTPD-700": era === "TTPD",
      "fill-mashup-50 dark:fill-mashup-700": era === "mashup"
    }
  ], "class:list")} d="M96 50.32c25.19 0 45.68 20.49 45.68 45.68S121.19 141.68 96 141.68 50.32 121.19 50.32 96 70.81 50.32 96 50.32m0-6.4c-28.76 0-52.08 23.32-52.08 52.08 0 28.76 23.32 52.08 52.08 52.08s52.08-23.32 52.08-52.08c0-28.76-23.32-52.08-52.08-52.08z"></path> <path${addAttribute([
    {
      "fill-debut-50 dark:fill-debut-700": era === "debut",
      "fill-fearless-50 dark:fill-fearless-700": era === "fearless",
      "fill-speakNow-50 dark:fill-speakNow-700": era === "speakNow",
      "fill-red-50 dark:fill-red-700": era === "red",
      "fill-1989-50 dark:fill-1989-700": era === "1989",
      "fill-reputation-50 dark:fill-reputation-700": era === "reputation",
      "fill-lover-50 dark:fill-lover-700": era === "lover",
      "fill-folklore-50 dark:fill-folklore-700": era === "folklore",
      "fill-evermore-50 dark:fill-evermore-700": era === "evermore",
      "fill-midnights-50 dark:fill-midnights-700": era === "midnights",
      "fill-TTPD-50 dark:fill-TTPD-700": era === "TTPD",
      "fill-mashup-50 dark:fill-mashup-700": era === "mashup"
    }
  ], "class:list")} d="m79 122 45-26-45-26z"></path> </svg> </div>`;
}, "/home/user/mi-repo/src/components/svg/YTMusicSvg.astro", void 0);

const $$Astro$4 = createAstro("https:matiassolisschneeberger.github.io");
const $$TarjetaCancion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TarjetaCancion;
  const { eraTarjeta, taylor, spotify, linkPage, YTmusic } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(eraTarjeta, "id")}${addAttribute([
    "transition ease-in-out delay-0 duration-200 shadow-sm hover:shadow-md rounded-3xl flex-wrap self-start shrink-0 overflow-hidden flex flex-col gap-0 justify-center flex-1 sm:min-w-[400px] w-full sm:max-w-[450px] relative px-2.5 space-y-2.5 py-2.5",
    {
      "dark:bg-debut-500       dark:shadow-debut-950      dark:hover:shadow-debut-950      bg-debut-200       shadow-debut-600      hover:shadow-debut-600": eraTarjeta === "debut",
      "dark:bg-fearless-500    dark:shadow-fearless-950   dark:hover:shadow-fearless-950   bg-fearless-200    shadow-fearless-600   hover:shadow-fearless-600": eraTarjeta === "fearless",
      "dark:bg-speakNow-500    dark:shadow-speakNow-950   dark:hover:shadow-speakNow-950   bg-speakNow-200    shadow-speakNow-600   hover:shadow-speakNow-600": eraTarjeta === "speakNow",
      "dark:bg-red-500         dark:shadow-red-950        dark:hover:shadow-red-950        bg-red-200         shadow-red-600        hover:shadow-red-600": eraTarjeta === "red",
      "dark:bg-1989-500        dark:shadow-1989-950       dark:hover:shadow-1989-950       bg-1989-200        shadow-1989-600       hover:shadow-1989-600": eraTarjeta === "1989",
      "dark:bg-reputation-500  dark:shadow-reputation-950 dark:hover:shadow-reputation-950 bg-reputation-200  shadow-reputation-600 hover:shadow-reputation-600": eraTarjeta === "reputation",
      "dark:bg-lover-500       dark:shadow-lover-950      dark:hover:shadow-lover-950      bg-lover-200       shadow-lover-600      hover:shadow-lover-600": eraTarjeta === "lover",
      "dark:bg-folklore-500    dark:shadow-folklore-950   dark:hover:shadow-folklore-950   bg-folklore-200    shadow-folklore-600   hover:shadow-folklore-600": eraTarjeta === "folklore",
      "dark:bg-evermore-500    dark:shadow-evermore-950   dark:hover:shadow-evermore-950   bg-evermore-200    shadow-evermore-600   hover:shadow-evermore-600": eraTarjeta === "evermore",
      "dark:bg-midnights-500   dark:shadow-midnights-950  dark:hover:shadow-midnights-950  bg-midnights-200   shadow-midnights-600  hover:shadow-midnights-600": eraTarjeta === "midnights",
      "dark:bg-TTPD-500        dark:shadow-TTPD-950       dark:hover:shadow-TTPD-950       bg-TTPD-200        shadow-TTPD-600       hover:shadow-TTPD-600": eraTarjeta === "TTPD",
      "dark:bg-mashup-500      dark:shadow-mashup-950     dark:hover:shadow-mashup-950     bg-mashup-200      shadow-mashup-600     hover:shadow-mashup-600": eraTarjeta === "mashup"
    }
  ], "class:list")}${addAttribute(renderTransition($$result, "qvlyxzhx", "", "tarjeta-tabla"), "data-astro-transition-scope")}> <header class="w-full flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative space-y-2.5"> <!-- logo --> <div${addAttribute([
    "rounded-2xl p-2 flex flex-col gap-0 items-center justify-center self-stretch shrink-0 h-[72px] relative",
    {
      "bg-debut-400 dark:bg-debut-300": eraTarjeta === "debut",
      "bg-fearless-400 dark:bg-fearless-300": eraTarjeta === "fearless",
      "bg-speakNow-400 dark:bg-speakNow-300": eraTarjeta === "speakNow",
      "bg-red-400 dark:bg-red-300": eraTarjeta === "red",
      "bg-1989-400 dark:bg-1989-300": eraTarjeta === "1989",
      "bg-reputation-400 dark:bg-reputation-300": eraTarjeta === "reputation",
      "bg-lover-400 dark:bg-lover-300": eraTarjeta === "lover",
      "bg-folklore-400 dark:bg-folklore-300": eraTarjeta === "folklore",
      "bg-evermore-400 dark:bg-evermore-300": eraTarjeta === "evermore",
      "bg-midnights-400 dark:bg-midnights-300": eraTarjeta === "midnights",
      "bg-TTPD-400 dark:bg-TTPD-300": eraTarjeta === "TTPD",
      "bg-mashup-400 dark:bg-mashup-300": eraTarjeta === "mashup"
    }
  ], "class:list")}> ${renderComponent($$result, "LogoDiscos", $$LogoDiscos, { "era": eraTarjeta })} </div> <!-- Taylor --> <div${addAttribute([
    "group transition rounded-xl ease-in-out delay-0 duration-200 h-[350px] bg-cover bg-center  flex flex-col items-center justify-end self-stretch shrink-0 relative overflow-hidden",
    {
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/01-Portada-TaylorSwift.png')]": eraTarjeta === "debut",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/02-Portada-Fearless.png')]": eraTarjeta === "fearless",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/03-Portada-SpeakNow.png')]": eraTarjeta === "speakNow",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/04-Portada-Red.png')]": eraTarjeta === "red",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/05-Portada-1989.png')]": eraTarjeta === "1989",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/06-Portada-Reputation.png')]": eraTarjeta === "reputation",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/07-Portada-Lover.png')]": eraTarjeta === "lover",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/08-Portada-Folklore.png')]": eraTarjeta === "folklore",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/09-Portada-Evermore.png')]": eraTarjeta === "evermore",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/10-Portada-Midnights.png')]": eraTarjeta === "midnights",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/11-Portada-TTPD.png')]": eraTarjeta === "TTPD",
      "bg-[url('/swifties-eras-tour/images/Portadas-Discos/12-Portada-Mashup.png')]": eraTarjeta === "mashup"
    }
  ], "class:list")}> <div${addAttribute([
    "w-full h-full flex rounded-xl overflow-hidden justify-center absolute mix-blend-multiply z-20",
    {
      "bg-debut-300": eraTarjeta === "debut",
      "bg-fearless-300": eraTarjeta === "fearless",
      "bg-speakNow-300": eraTarjeta === "speakNow",
      "bg-red-300": eraTarjeta === "red",
      "bg-1989-300": eraTarjeta === "1989",
      "bg-reputation-300": eraTarjeta === "reputation",
      "bg-lover-300": eraTarjeta === "lover",
      "bg-folklore-300": eraTarjeta === "folklore",
      "bg-evermore-300": eraTarjeta === "evermore",
      "bg-midnights-300": eraTarjeta === "midnights",
      "bg-TTPD-300": eraTarjeta === "TTPD",
      "bg-mashup-300": eraTarjeta === "mashup"
    }
  ], "class:list")}></div> <img class="group-hover:scale-110 overflow-hidden transition ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative h-full z-10"${addAttribute(taylor, "src")}${addAttribute(`Taylor en la era ${eraTarjeta}`, "alt")} style="mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);"> <div class="overflow-hidden rounded-xl backdrop-blur-[2px] w-full h-full flex justify-center absolute mix-blend-multiply z-1"></div> </div> </header> <!-- Canciones --> <section class="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative w-full"> ${renderSlot($$result, $$slots["default"])} </section> <!-- seccion de botones --> <section class="w-full flex justify-end space-x-2.5"> ${renderComponent($$result, "ButtonSecundario", $$ButtonSecundario, { "era": eraTarjeta, "href": spotify, "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "SpotifySvg", $$SpotifySvg, { "era": eraTarjeta, "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Spotify
` })} ${renderComponent($$result, "ButtonSecundario", $$ButtonSecundario, { "era": eraTarjeta, "href": YTmusic, "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "YTMusicSvg", $$YTMusicSvg, { "era": eraTarjeta, "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
YTMusic
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": eraTarjeta, "href": linkPage, "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoSvg", $$InfoSvg, { "era": eraTarjeta, "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Mas info
` })} </section> </article>`;
}, "/home/user/mi-repo/src/components/TarjetaCancion.astro", "self");

const $$Astro$3 = createAstro("https:matiassolisschneeberger.github.io");
const $$Emojie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Emojie;
  const { emojie } = Astro2.props;
  const imageEmojie = {
    debut: "/swifties-eras-tour/images/Emojis/01.taylorSwift.png",
    fearless: "/swifties-eras-tour/images/Emojis/02.fearless.png",
    speakNow: "/swifties-eras-tour/images/Emojis/03.speakNow.png",
    red: "/swifties-eras-tour/images/Emojis/04.red.png",
    "1989": "/swifties-eras-tour/images/Emojis/05.1989.png",
    reputation: "/swifties-eras-tour/images/Emojis/06.reputation.png",
    lover: "/swifties-eras-tour/images/Emojis/07.lover.png",
    folklore: "/swifties-eras-tour/images/Emojis/08.folklore.png",
    evermore: "/swifties-eras-tour/images/Emojis/09.evermore.png",
    midnights: "/swifties-eras-tour/images/Emojis/10.midnights.png",
    TTPD: "/swifties-eras-tour/images/Emojis/11.TTPD.png",
    mashup: "/swifties-eras-tour/images/Emojis/12.MashUp.png",
    piano: "/swifties-eras-tour/images/Emojis/13.piano.png",
    pelicula: "/swifties-eras-tour/images/Emojis/14.Pel\xEDcula.png",
    setlist: "/swifties-eras-tour/images/Emojis/15.setlist.png",
    guitarra: "/swifties-eras-tour/images/Emojis/16.guitarra.png",
    cantante: "/swifties-eras-tour/images/Emojis/17.cantante.png",
    pin: "/swifties-eras-tour/images/Emojis/20.pin.png",
    calendario: "/swifties-eras-tour/images/Emojis/21.calendario.png",
    sinCantar: "/swifties-eras-tour/images/Emojis/cross-mark_274c (1).png"
  };
  const imagen = imageEmojie[emojie] || "/swifties-eras-tour/images/Emojis/19.nada.png";
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(imagen, "src")}${addAttribute([
    "w-[18px] h-[18px] relative",
    {
      "hidden": imagen === "/swifties-eras-tour/images/Emojis/19.nada.png",
      "opacity-0": imagen === "/swifties-eras-tour/images/Emojis/cross-mark_274c (1).png"
    }
  ], "class:list")}${addAttribute(emojie, "alt")}>`;
}, "/home/user/mi-repo/src/components/Emojie.astro", void 0);

const $$Astro$2 = createAstro("https:matiassolisschneeberger.github.io");
const $$Cancion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cancion;
  const { eraTarjeta, cancion, indice, emojiePrincipal, emojie2, emojie3, emojie4, emojie5, emojie6 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pt-1 pb-1 flex flex-row items-center justify-start self-stretch shrink-0 relative overflow-hidden space-x-2 h-min"> <!-- Emojie Principal --> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojiePrincipal })} <!-- Divider Vertical --> <div${addAttribute([
    "w-0.5 rounded-sm h-6",
    {
      "bg-debut-600 dark:bg-debut-200": eraTarjeta === "debut",
      "bg-fearless-600 dark:bg-fearless-200": eraTarjeta === "fearless",
      "bg-speakNow-600 dark:bg-speakNow-200": eraTarjeta === "speakNow",
      "bg-red-600 dark:bg-red-200": eraTarjeta === "red",
      "bg-1989-600 dark:bg-1989-200": eraTarjeta === "1989",
      "bg-reputation-600 dark:bg-reputation-200": eraTarjeta === "reputation",
      "bg-lover-600 dark:bg-lover-200": eraTarjeta === "lover",
      "bg-folklore-600 dark:bg-folklore-200": eraTarjeta === "folklore",
      "bg-evermore-600 dark:bg-evermore-200": eraTarjeta === "evermore",
      "bg-midnights-600 dark:bg-midnights-200": eraTarjeta === "midnights",
      "bg-TTPD-600 dark:bg-TTPD-200": eraTarjeta === "TTPD",
      "bg-mashup-600 dark:bg-mashup-200": eraTarjeta === "mashup"
    }
  ], "class:list")}></div> <!-- Cancion --> <div${addAttribute([
    "text-left text-title-medium relative",
    {
      "text-debut-900 dark:text-debut-100": eraTarjeta === "debut",
      "text-fearless-900 dark:text-fearless-100": eraTarjeta === "fearless",
      "text-speakNow-900 dark:text-speakNow-100": eraTarjeta === "speakNow",
      "text-red-900 dark:text-red-100": eraTarjeta === "red",
      "text-1989-900 dark:text-1989-100": eraTarjeta === "1989",
      "text-reputation-900 dark:text-reputation-100": eraTarjeta === "reputation",
      "text-lover-900 dark:text-lover-100": eraTarjeta === "lover",
      "text-folklore-900 dark:text-folklore-100": eraTarjeta === "folklore",
      "text-evermore-900 dark:text-evermore-100": eraTarjeta === "evermore",
      "text-midnights-900 dark:text-midnights-100": eraTarjeta === "midnights",
      "text-TTPD-900 dark:text-TTPD-100": eraTarjeta === "TTPD",
      "text-mashup-900 dark:text-mashup-100": eraTarjeta === "mashup"
    }
  ], "class:list")}> <p class="inline"> ${cancion} <sup${addAttribute(indice !== 1 ? "inline" : "hidden", "class:list")}>
(x${indice})
</sup> </p> </div> <!-- Emojie Adicionales --> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie2 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie3 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie4 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie5 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie6 })} </div>`;
}, "/home/user/mi-repo/src/components/Cancion.astro", void 0);

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$SectionCanciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionCanciones;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article id="Canciones" class="py-12 px-8 sm:px-10 xl:px-28 space-y-6"> <!-- Titulo --> ${renderComponent($$result, "Title", $$Titulo, { "era": era, "titulo": "Canciones Sorpresas" }, { "default": ($$result2) => renderTemplate`
A lo largo del icónico "The Eras Tour", Taylor Swift nos ha sorprendido con actuaciones inolvidables, regalándonos momentos únicos con canciones inesperadas. Aquí tienes una lista de todas las canciones sorpresa interpretadas hasta ahora, cada una con su propio toque mágico y especial, que solo un verdadero fanático puede apreciar. ¡Descubre si tu favorita fue parte del setlist sorpresa!
` })} <!-- Botontes/Etiquetas --> <section class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"> <!-- Botones --> <div class="rounded-3xl flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative"> ${renderComponent($$result, "Subtitle", $$SubTitulo, { "era": era, "titulo": "Eras" }, { "default": ($$result2) => renderTemplate`
Selecciona una era para ver las canciones que hicieron historia en cada concierto.
` })} <!-- Botones de las eras --> <div class="flex flex-row gap-3 items-center justify-center flex-wrap self-stretch shrink-0 relative"> ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "debut", "href": "#debut", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "debut", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Taylor Swift
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "fearless", "href": "#fearless", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "fearless", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Fearless
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "speakNow", "href": "#speakNow", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "speakNow", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Speak Now
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "red", "href": "#red", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "red", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Red
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "1989", "href": "#1989", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "1989", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
1989
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "reputation", "href": "#reputation", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "reputation", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Reputation
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "lover", "href": "#lover", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "lover", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Lover
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "folklore", "href": "#folklore", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "folklore", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Folklore
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "evermore", "href": "#evermore", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "evermore", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Evermore
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "midnights", "href": "#midnights", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "midnights", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Midnights
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "TTPD", "href": "#TTPD", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "TTPD", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
The Tortured Poets Department
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "mashup", "href": "#mashup", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "mashup", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Mashups
` })} </div> </div> <!-- Etiquetas --> <div class="rounded-3xl flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative"> ${renderComponent($$result, "Subtitle", $$SubTitulo, { "era": era, "titulo": "Etiquetas" }, { "default": ($$result2) => renderTemplate`
Estos íconos representan detalles clave de cada canción, como el instrumento o si hubo un mashup.
` })} <!-- Etiquetas --> <div class="flex flex-row gap-3 items-center justify-center flex-wrap self-stretch shrink-0 relative"> ${renderComponent($$result, "Chip", $$Chip, { "era": "red", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "guitarra", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Guitarra
` })} ${renderComponent($$result, "Chip", $$Chip, { "era": "folklore", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "piano", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Piano
` })} ${renderComponent($$result, "Chip", $$Chip, { "era": "fearless", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "setlist", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Setlist
` })} ${renderComponent($$result, "Chip", $$Chip, { "era": "debut", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "cantante", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Cantante Sorpresa
` })} ${renderComponent($$result, "Chip", $$Chip, { "era": "evermore", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "pelicula", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Pelicula
` })} ${renderComponent($$result, "Chip", $$Chip, { "era": "reputation", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "mashup", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Mashup
` })} </div> </div> </section> <!-- TarjetasCanciones --> <section class="flex sm:flex-row flex-col gap-6 items-center justify-center flex-wrap self-stretch shrink-0 relative py-0"> ${eras.map(({ albums, foto, Spotify, canciones, extras, linkPage, YTMusic }) => {
    return renderTemplate`${renderComponent($$result, "TarjetaCancion", $$TarjetaCancion, { "eraTarjeta": albums, "taylor": foto, "spotify": Spotify, "linkPage": linkPage, "YTmusic": YTMusic }, { "default": ($$result2) => renderTemplate`${canciones.map(
      ({ title, info, etiquetas }) => {
        return renderTemplate`${renderComponent($$result2, "Cancion", $$Cancion, { "eraTarjeta": albums, "cancion": title, "indice": info.length, "emojiePrincipal": etiquetas.principal, "emojie2": etiquetas.segundo, "emojie3": etiquetas.tercer, "emojie4": etiquetas.cuarto, "emojie5": etiquetas.quinto, "emojie6": etiquetas.sexto })}`;
      }
    )}${extras.length > 0 && renderTemplate`<div${addAttribute([
      "w-full rounded-sm h-0.5",
      {
        "bg-debut-900": albums === "debut",
        "bg-fearless-900": albums === "fearless",
        "bg-speakNow-900": albums === "speakNow",
        "bg-red-900": albums === "red",
        "bg-1989-900": albums === "1989",
        "bg-reputation-900": albums === "reputation",
        "bg-lover-900": albums === "lover",
        "bg-folklore-900": albums === "folklore",
        "bg-evermore-900": albums === "evermore",
        "bg-midnights-900": albums === "midnights",
        "bg-TTPD-900": albums === "TTPD",
        "bg-mashup-900": albums === "mashup"
      }
    ], "class:list")}></div>`}${extras.map(({ title, info, etiquetas }) => {
      return renderTemplate`${renderComponent($$result2, "Cancion", $$Cancion, { "eraTarjeta": albums, "cancion": title, "indice": info.length, "emojiePrincipal": etiquetas.principal, "emojie2": etiquetas.segundo, "emojie3": etiquetas.tercer, "emojie4": etiquetas.cuarto, "emojie5": etiquetas.quinto, "emojie6": etiquetas.sexto })}`;
    })}` })}`;
  })} </section> </article>`;
}, "/home/user/mi-repo/src/sections/SectionCanciones.astro", void 0);

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$SectionDates = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionDates;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article id="Conciertos"${addAttribute(`py-12 px-8 sm:px-10 xl:px-28 space-y-6`, "class")}> ${renderComponent($$result, "Titulo", $$Titulo, { "era": era, "titulo": "Fecha de conciertos" }, { "default": ($$result2) => renderTemplate`
"Estas son todas las fechas The Eras Tour, las pasadas, las actuales, y las futuras."
` })} <section class="flex flex-col gap-6 self-stretch shrink-0 relative items-center"> ${renderComponent($$result, "Subtitle", $$SubTitulo, { "era": era, "titulo": "Fechas Actuales" })} <!-- {
                concerts.ahora.length > 0 && <div class="flex flex-col sm:flex-row gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative">
                    {
                    concerts.ahora.slice(0, maxFechasToShow).map(({ fecha, lugar, telonero }, index) => {
                        const eraFecha = eras[index % eras.length];  // Alterna entre las eras
                        return (
                            <TarjetaFecha 
                                estado="ahora"
                                eraFecha={eraFecha}
                                dia={fecha.dia}
                                mes={fecha.mes}
                                año={fecha.año}
                                pais={lugar.pais}
                                ciudad={lugar.ciudad}
                                estadio={lugar.estadio}
                                telonero={telonero}
                            />
                        );
                    })}
                    
                </div>
            } --> ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "icono": null, "era": era, "href": "/swifties-eras-tour/conciertos" }, { "default": ($$result2) => renderTemplate`
Ver mas fechas
` })} </section> </article> <!-- creo que ya se como hacer para que no se muestren las fechas --> `;
}, "/home/user/mi-repo/src/sections/SectionDates.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const eras = ["debut", "fearless", "speakNow", "red", "1989", "reputation", "lover", "folklore", "evermore", "midnights", "TTPD", "mashup"];
  let eraIndex = 9;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Swifties Eras Tour", "era": eras[eraIndex] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroImage", $$HeroImage, { "era": eras[eraIndex], "flechas": false, "boton": true, "pagAnt": "/swifties-eras-tour/", "pagSig": "/swifties-eras-tour/" })} ${renderComponent($$result2, "SectionCanciones", $$SectionCanciones, { "era": eras[eraIndex] })} ${renderComponent($$result2, "SectionDates", $$SectionDates, { "era": eras[eraIndex] })} ` })} `;
}, "/home/user/mi-repo/src/pages/index.astro", void 0);

const $$file = "/home/user/mi-repo/src/pages/index.astro";
const $$url = "/swifties-eras-tour";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
