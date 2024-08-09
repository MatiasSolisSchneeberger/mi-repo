/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderTransition } from '../chunks/astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$ButtonPrimario, a as $$Layout } from '../chunks/Layout_1fUuJijd.mjs';
import { a as $$Emojie, e as eras, $ as $$HeroImage } from '../chunks/HeroImage_YSnapdxp.mjs';
import { $ as $$Title } from '../chunks/Title_Cq2YfD_p.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$i = createAstro("https:matiassolisschneeberger.github.io");
const $$ArrowUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ArrowUp;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute([
    {
      "fill-debut-800": era === "debut",
      "fill-fearless-800": era === "fearless",
      "fill-speakNow-800": era === "speakNow",
      "fill-red-800": era === "red",
      "fill-1989-800": era === "1989",
      "fill-reputation-800": era === "reputation",
      "fill-lover-800": era === "lover",
      "fill-folklore-800": era === "folklore",
      "fill-evermore-800": era === "evermore",
      "fill-midnights-800": era === "midnights",
      "fill-TTPD-800": era === "TTPD",
      "fill-mashup-800": era === "mashup"
    }
  ], "class:list")}> <path d="M440-647 244-451q-12 12-28 11.5T188-452q-11-12-11.5-28t11.5-28l264-264q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l264 264q11 11 11 27.5T772-452q-12 12-28.5 12T715-452L520-647v447q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-447Z"></path> </svg>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/ArrowUp.astro", void 0);

const $$Astro$h = createAstro("https:matiassolisschneeberger.github.io");
const $$ButtonToUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ButtonToUp;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="button-up" class="shadow-sm hover:shadow-lg fixed bottom-2 right-2 opacity-0 transition-opacity"> <button id="scroll-to-top" style="box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
        0px 4px 8px 3px rgba(0, 0, 0, 0.15)"${addAttribute([
    "fixed bottom-2 right-2 p-2 flex cursor-default items-center justify-center rounded-lg text-primary  motion-safe:transition",
    {
      "bg-debut-300": era === "debut",
      "bg-fearless-300": era === "fearless",
      "bg-speakNow-300": era === "speakNow",
      "bg-red-300": era === "red",
      "bg-1989-300": era === "1989",
      "bg-reputation-300": era === "reputation",
      "bg-lover-300": era === "lover",
      "bg-folklore-300": era === "folklore",
      "bg-evermore-300": era === "evermore",
      "bg-midnights-300": era === "midnights",
      "bg-TTPD-300": era === "TTPD",
      "bg-mashup-300": era === "mashup"
    }
  ], "class:list")}> ${renderComponent($$result, "ArrowUp", $$ArrowUp, { "era": era })} </button> </div> `;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/ButtonToUp.astro", void 0);

const $$Astro$g = createAstro("https:matiassolisschneeberger.github.io");
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Chip;
  const { icono, era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<chip${addAttribute([
    " rounded-lg border-solid  border flex flex-row gap-0 items-center justify-center shrink-0 h-8 relative overflow-hidden",
    {
      "bg-debut-200       border-debut-600": era === "debut",
      "bg-fearless-200    border-fearless-600": era === "fearless",
      "bg-speakNow-200   border-speakNow-600": era === "speakNow",
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
    "> <button${addAttribute([
    "pt-1.5 pb-1.5 flex flex-row gap-2 items-center justify-center shrink-0 h-8 relative",
    {
      "pl-2 pr-4": icono === "Izq",
      "px-4": icono === null,
      "pl-4 pr-2": icono === "Der"
    }
  ], "class:list")}> ${renderSlot($$result, $$slots["before"])} <a${addAttribute([
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
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)"> ${renderSlot($$result, $$slots["default"])} </a> ${renderSlot($$result, $$slots["after"])}</button> </chip>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/Chip.astro", void 0);

const $$Astro$f = createAstro("https:matiassolisschneeberger.github.io");
const $$ButtonSecundario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ButtonSecundario;
  const { href, era, icono } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank"${addAttribute([
    "group rounded-[100px] flex flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "bg-debut-300 hover:bg-debut-400": era === "debut",
      "bg-fearless-300 hover:bg-fearless-400": era === "fearless",
      "bg-speakNow-300 hover:bg-speakNow-400": era === "speakNow",
      "bg-red-300 hover:bg-red-400": era === "red",
      "bg-1989-300 hover:bg-1989-400": era === "1989",
      "bg-reputation-300 hover:bg-reputation-400": era === "reputation",
      "bg-lover-300 hover:bg-lover-400": era === "lover",
      "bg-folklore-300 hover:bg-folklore-400": era === "folklore",
      "bg-evermore-300 hover:bg-evermore-400": era === "evermore",
      "bg-midnights-300 hover:bg-midnights-400": era === "midnights",
      "bg-TTPD-300 hover:bg-TTPD-400": era === "TTPD",
      "bg-mashup-300 hover:bg-mashup-400": era === "mashup"
    }
  ], "class:list")}> <div${addAttribute([
    "px-2.5 py-2.5 flex flex-row gap-2 items-center justify-center self-stretch flex-1 relative",
    {
      "sm:pl-4 sm:pr-6": icono === "Izq",
      "sm:px-6": icono === null,
      "sm:pl-6 sm:pr-4": icono === "Der"
    }
  ], "class:list")}> ${renderSlot($$result, $$slots["before"])} <p${addAttribute([
    "hidden group-hover:flex sm:flex text-center text-title-small relative items-center justify-center",
    {
      "text-debut-800": era === "debut",
      "text-fearless-800": era === "fearless",
      "text-speakNow-800": era === "speakNow",
      "text-red-800": era === "red",
      "text-1989-800": era === "1989",
      "text-reputation-800": era === "reputation",
      "text-lover-800": era === "lover",
      "text-folklore-800": era === "folklore",
      "text-evermore-800": era === "evermore",
      "text-midnights-800": era === "midnights",
      "text-TTPD-800": era === "TTPD",
      "text-mashup-800": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)"> ${renderSlot($$result, $$slots["default"])} </p> ${renderSlot($$result, $$slots["after"])} </div> </a>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/ButtonSecundario.astro", void 0);

const $$Astro$e = createAstro("https:matiassolisschneeberger.github.io");
const $$LogoDiscos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LogoDiscos;
  const { era } = Astro2.props;
  const imageLogo = {
    debut: "/mi-repo/images/Logos-Discos/01-Logo-Debut.png",
    fearless: "/mi-repo/images/Logos-Discos/02-Logo-Fearless.png",
    speakNow: "/mi-repo/images/Logos-Discos/03-Logo-SpeakNow.png",
    red: "/mi-repo/images/Logos-Discos/04-Logo-Red.png",
    "1989": "/mi-repo/images/Logos-Discos/05-Logo-1989.png",
    reputation: "/mi-repo/images/Logos-Discos/06-Logo-Reputation.png",
    lover: "/mi-repo/images/Logos-Discos/07-Logo-Lover.png",
    folklore: "/mi-repo/images/Logos-Discos/08-Logo-Folklore.png",
    evermore: "/mi-repo/images/Logos-Discos/09-Logo-Evermore.png",
    midnights: "/mi-repo/images/Logos-Discos/10-Logo-Midnights.png",
    TTPD: "/mi-repo/images/Logos-Discos/11-Logo-TTPD.png",
    mashup: "/mi-repo/images/Logos-Discos/12-Logo-Mashups.png"
  };
  const logo = imageLogo[era] || "/mi-repo/images/Emojis/cross-mark_274c.png";
  return renderTemplate`${maybeRenderHead()}<img class="bg-logo-debut self-stretch flex-1 relative h-full w-full object-contain"${addAttribute(logo, "src")}${addAttribute(`Logo del disco ${era}`, "alt")}${addAttribute(renderTransition($$result, "eyb5kg2q", "", "logo-disco"), "data-astro-transition-scope")}>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/LogoDiscos.astro", "self");

const $$Astro$d = createAstro("https:matiassolisschneeberger.github.io");
const $$InfoSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$InfoSvg;
  const { era } = Astro2.props;
  const color = {
    debut: "#c3dac0",
    fearless: "#f1c996",
    speakNow: "#e9dfeb",
    red: "#f3d9d8",
    "1989": "#b5e5f8",
    reputation: "#dcdbdc",
    lover: "#fad0e2",
    folklore: "#cdc9c1",
    evermore: "#e2d5c6",
    midnights: "#ccdef1",
    TTPD: "#cdc9bb",
    mashup: "#ffcfc9"
  };
  const iconoColor = color[era] || "#000000";
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg height="18" viewBox="0 -960 960 960" width="18"${addAttribute(iconoColor, "fill")}> <path d="M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/InfoSvg.astro", void 0);

const $$Astro$c = createAstro("https:matiassolisschneeberger.github.io");
const $$SpotifySvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SpotifySvg;
  const { era } = Astro2.props;
  const color = {
    debut: "#1D371F",
    fearless: "#6d241a",
    speakNow: "#5d3e5d",
    red: "#6f2c38",
    "1989": "#124d68",
    reputation: "#3e3c3c",
    lover: "#801b35",
    folklore: "#4d4641",
    evermore: "#584036",
    midnights: "#354873",
    TTPD: "#493f3a",
    mashups: "#80261c"
  };
  const iconoColor = color[era] || "#000000";
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg viewBox="0 0 256 256" width="18" height="18" preserveAspectRatio="xMidYMid"> <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"${addAttribute(iconoColor, "fill")}></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/SpotifySvg.astro", void 0);

const $$Astro$b = createAstro("https:matiassolisschneeberger.github.io");
const $$YTMusicSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$YTMusicSvg;
  const { era } = Astro2.props;
  const color = {
    debut: "#1D371F",
    fearless: "#6d241a",
    speakNow: "#5d3e5d",
    red: "#6f2c38",
    "1989": "#124d68",
    reputation: "#3e3c3c",
    lover: "#801b35",
    folklore: "#4d4641",
    evermore: "#584036",
    midnights: "#354873",
    TTPD: "#493f3a",
    mashups: "#80261c"
  };
  const iconoColor = color[era] || "#000000";
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" xml:space="preserve" viewBox="0 0 192 192"> <path fill="none" d="M0 0h192v192H0z"></path> <circle cx="96" cy="96" r="88"${addAttribute(iconoColor, "fill")}></circle> <path${addAttribute([
    {
      "fill-debut-200": era === "debut",
      "fill-fearless-200": era === "fearless",
      "fill-speakNow-200": era === "speakNow",
      "fill-red-200": era === "red",
      "fill-1989-200": era === "1989",
      "fill-reputation-200": era === "reputation",
      "fill-lover-200": era === "lover",
      "fill-folklore-200": era === "folklore",
      "fill-evermore-200": era === "evermore",
      "fill-midnights-200": era === "midnights",
      "fill-TTPD-200": era === "TTPD",
      "fill-mashup-200": era === "mashup"
    }
  ], "class:list")} d="M96 50.32c25.19 0 45.68 20.49 45.68 45.68S121.19 141.68 96 141.68 50.32 121.19 50.32 96 70.81 50.32 96 50.32m0-6.4c-28.76 0-52.08 23.32-52.08 52.08 0 28.76 23.32 52.08 52.08 52.08s52.08-23.32 52.08-52.08c0-28.76-23.32-52.08-52.08-52.08z"></path> <path${addAttribute([
    {
      "fill-debut-200": era === "debut",
      "fill-fearless-200": era === "fearless",
      "fill-speakNow-200": era === "speakNow",
      "fill-red-200": era === "red",
      "fill-1989-200": era === "1989",
      "fill-reputation-200": era === "reputation",
      "fill-lover-200": era === "lover",
      "fill-folklore-200": era === "folklore",
      "fill-evermore-200": era === "evermore",
      "fill-midnights-200": era === "midnights",
      "fill-TTPD-200": era === "TTPD",
      "fill-mashup-200": era === "mashup"
    }
  ], "class:list")} d="m79 122 45-26-45-26z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/YTMusicSvg.astro", void 0);

const $$Astro$a = createAstro("https:matiassolisschneeberger.github.io");
const $$TarjetaCancion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TarjetaCancion;
  const { eraTarjeta, spotify, linkPage, YTmusic } = Astro2.props;
  const imageTaylor = {
    debut: "/mi-repo/images/Fotos/01-TaylorSwift.png",
    fearless: "/mi-repo/images/Fotos/02-Fearless.png",
    speakNow: "/mi-repo/images/Fotos/03-SpeakNow.png",
    red: "/mi-repo/images/Fotos/04-Red.png",
    "1989": "/mi-repo/images/Fotos/05-1989.png",
    reputation: "/mi-repo/images/Fotos/06-Reputation.png",
    lover: "/mi-repo/images/Fotos/07-Lover.png",
    folklore: "/mi-repo/images/Fotos/08-Folklore.png",
    evermore: "/mi-repo/images/Fotos/09-Evermore.png",
    midnights: "/mi-repo/images/Fotos/10-Midnights.png",
    TTPD: "/mi-repo/images/Fotos/11-TTPD.png",
    mashup: "/mi-repo/images/Fotos/12-Mashup.png"
  };
  const taylor = imageTaylor[eraTarjeta] || "/mi-repo/images/Emojis/cross-mark_274c.png";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(eraTarjeta, "id")}${addAttribute([
    "transition ease-in-out delay-0 duration-200 shadow-sm hover:shadow-md rounded-3xl flex-wrap self-start shrink-0 overflow-hidden flex flex-col gap-0 justify-center flex-1 min-w-[400px] max-w-[450px] relative px-2.5 space-y-2.5 py-2.5",
    {
      "bg-debut-200       shadow-debut-600      hover:shadow-debut-900": eraTarjeta === "debut",
      "bg-fearless-200    shadow-fearless-600   hover:shadow-fearless-900": eraTarjeta === "fearless",
      "bg-speakNow-200    shadow-speakNow-600   hover:shadow-speakNow-900": eraTarjeta === "speakNow",
      "bg-red-200         shadow-red-600        hover:shadow-red-900": eraTarjeta === "red",
      "bg-1989-200        shadow-1989-600       hover:shadow-1989-900": eraTarjeta === "1989",
      "bg-reputation-200  shadow-reputation-600 hover:shadow-reputation-900": eraTarjeta === "reputation",
      "bg-lover-200       shadow-lover-600      hover:shadow-lover-900": eraTarjeta === "lover",
      "bg-folklore-200    shadow-folklore-600   hover:shadow-folklore-900": eraTarjeta === "folklore",
      "bg-evermore-200    shadow-evermore-600   hover:shadow-evermore-900": eraTarjeta === "evermore",
      "bg-midnights-200   shadow-midnights-600  hover:shadow-midnights-900": eraTarjeta === "midnights",
      "bg-TTPD-200        shadow-TTPD-600       hover:shadow-TTPD-900": eraTarjeta === "TTPD",
      "bg-mashup-200      shadow-mashup-600     hover:shadow-mashup-900": eraTarjeta === "mashup"
    }
  ], "class:list")}${addAttribute(renderTransition($$result, "qvlyxzhx", "", "tarjeta-tabla"), "data-astro-transition-scope")}> <header class="w-full flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative space-y-2.5"> <!-- logo --> <div${addAttribute([
    "rounded-2xl p-2 flex flex-col gap-0 items-center justify-center self-stretch shrink-0 h-[72px] relative",
    {
      "bg-debut-400": eraTarjeta === "debut",
      "bg-fearless-400": eraTarjeta === "fearless",
      "bg-speakNow-400": eraTarjeta === "speakNow",
      "bg-red-400": eraTarjeta === "red",
      "bg-1989-400": eraTarjeta === "1989",
      "bg-reputation-400": eraTarjeta === "reputation",
      "bg-lover-400": eraTarjeta === "lover",
      "bg-folklore-400": eraTarjeta === "folklore",
      "bg-evermore-400": eraTarjeta === "evermore",
      "bg-midnights-400": eraTarjeta === "midnights",
      "bg-TTPD-400": eraTarjeta === "TTPD",
      "bg-mashup-400": eraTarjeta === "mashup"
    }
  ], "class:list")}> ${renderComponent($$result, "LogoDiscos", $$LogoDiscos, { "era": eraTarjeta })} </div> <!-- Taylor --> <div${addAttribute([
    "group transition ease-in-out delay-0 duration-200 h-[350px]  bg-cover bg-center rounded-xl flex flex-col items-center justify-end self-stretch shrink-0 relative overflow-hidden",
    {
      "bg-[url('/mi-repo/images/Portadas-Discos/01-Portada-TaylorSwift.png')]": eraTarjeta === "debut",
      "bg-[url('/mi-repo/images/Portadas-Discos/02-Portada-Fearless.png')]": eraTarjeta === "fearless",
      "bg-[url('/mi-repo/images/Portadas-Discos/03-Portada-SpeakNow.png')]": eraTarjeta === "speakNow",
      "bg-[url('/mi-repo/images/Portadas-Discos/04-Portada-Red.png')]": eraTarjeta === "red",
      "bg-[url('/mi-repo/images/Portadas-Discos/05-Portada-1989.png')]": eraTarjeta === "1989",
      "bg-[url('/mi-repo/images/Portadas-Discos/06-Portada-Reputation.png')]": eraTarjeta === "reputation",
      "bg-[url('/mi-repo/images/Portadas-Discos/07-Portada-Lover.png')]": eraTarjeta === "lover",
      "bg-[url('/mi-repo/images/Portadas-Discos/08-Portada-Folklore.png')]": eraTarjeta === "folklore",
      "bg-[url('/mi-repo/images/Portadas-Discos/09-Portada-Evermore.png')]": eraTarjeta === "evermore",
      "bg-[url('/mi-repo/images/Portadas-Discos/10-Portada-Midnights.png')]": eraTarjeta === "midnights",
      "bg-[url('/mi-repo/images/Portadas-Discos/11-Portada-TTPD.png')]": eraTarjeta === "TTPD"
    }
  ], "class:list")}> <div${addAttribute([
    "w-full h-full flex justify-center rounded-xl absolute mix-blend-multiply z-20",
    {
      "bg-debut-400": eraTarjeta === "debut",
      "bg-fearless-400": eraTarjeta === "fearless",
      "bg-speakNow-400": eraTarjeta === "speakNow",
      "bg-red-400": eraTarjeta === "red",
      "bg-1989-400": eraTarjeta === "1989",
      "bg-reputation-400": eraTarjeta === "reputation",
      "bg-lover-400": eraTarjeta === "lover",
      "bg-folklore-400": eraTarjeta === "folklore",
      "bg-evermore-400": eraTarjeta === "evermore",
      "bg-midnights-400": eraTarjeta === "midnights",
      "bg-TTPD-400": eraTarjeta === "TTPD",
      "bg-mashup-400": eraTarjeta === "mashup"
    }
  ], "class:list")}></div> <img class="group-hover:scale-105 transition ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl h-full z-10"${addAttribute(taylor, "src")}${addAttribute(`Taylor en la era ${eraTarjeta}`, "alt")} style="mask-image: linear-gradient(to right, transparent 0%, black 05%, black 95%, transparent 100%);"> <div class="backdrop-blur-sm w-full h-full flex justify-center rounded-xl absolute mix-blend-multiply z-1"></div> </div> </header> <!-- Canciones --> <section class="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative w-full"> ${renderSlot($$result, $$slots["default"])} </section> <!-- seccion de botones --> <section class="w-full flex justify-end space-x-2.5"> ${renderComponent($$result, "ButtonSecundario", $$ButtonSecundario, { "era": eraTarjeta, "href": spotify, "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "SpotifySvg", $$SpotifySvg, { "era": eraTarjeta, "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Spotify
` })} ${renderComponent($$result, "ButtonSecundario", $$ButtonSecundario, { "era": eraTarjeta, "href": YTmusic, "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "YTMusicSvg", $$YTMusicSvg, { "era": eraTarjeta, "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
YTMusic
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": eraTarjeta, "href": linkPage, "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoSvg", $$InfoSvg, { "era": eraTarjeta, "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
Mas info
` })} </section> </article>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/TarjetaCancion.astro", "self");

const $$Astro$9 = createAstro("https:matiassolisschneeberger.github.io");
const $$Cancion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Cancion;
  const { eraTarjeta, cancion, emojiePrincipal, emojie2, emojie3, emojie4, emojie5, emojie6 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pt-1 pb-1 flex flex-row items-center justify-start self-stretch shrink-0 relative overflow-hidden space-x-2 h-min"> <!-- Emojie Principal --> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojiePrincipal })} <!-- Divider Vertical --> <div${addAttribute([
    "w-0.5 rounded-sm h-6",
    {
      "bg-debut-900": eraTarjeta === "debut",
      "bg-fearless-900": eraTarjeta === "fearless",
      "bg-speakNow-900": eraTarjeta === "speakNow",
      "bg-red-900": eraTarjeta === "red",
      "bg-1989-900": eraTarjeta === "1989",
      "bg-reputation-900": eraTarjeta === "reputation",
      "bg-lover-900": eraTarjeta === "lover",
      "bg-folklore-900": eraTarjeta === "folklore",
      "bg-evermore-900": eraTarjeta === "evermore",
      "bg-midnights-900": eraTarjeta === "midnights",
      "bg-TTPD-900": eraTarjeta === "TTPD",
      "bg-mashup-900": eraTarjeta === "mashup"
    }
  ], "class:list")}></div> <!-- Cancion --> <p${addAttribute([
    "text-left text-title-medium relative",
    {
      "text-debut-900": eraTarjeta === "debut",
      "text-fearless-900": eraTarjeta === "fearless",
      "text-speakNow-900": eraTarjeta === "speakNow",
      "text-red-900": eraTarjeta === "red",
      "text-1989-900": eraTarjeta === "1989",
      "text-reputation-900": eraTarjeta === "reputation",
      "text-lover-900": eraTarjeta === "lover",
      "text-folklore-900": eraTarjeta === "folklore",
      "text-evermore-900": eraTarjeta === "evermore",
      "text-midnights-900": eraTarjeta === "midnights",
      "text-TTPD-900": eraTarjeta === "TTPD",
      "text-mashup-900": eraTarjeta === "mashup"
    }
  ], "class:list")}> ${cancion} </p> <!-- Emojie Adicionales --> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie2 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie3 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie4 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie5 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie6 })} </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/Cancion.astro", void 0);

const $$Astro$8 = createAstro("https:matiassolisschneeberger.github.io");
const $$CancionMashup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CancionMashup;
  const { fromEra, viaEra, toEra, cancion, emojiePrincipal, emojie2, emojie3, emojie4, emojie5, emojie6 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pt-1 pb-1 flex flex-row items-center justify-start self-stretch shrink-0 relative overflow-hidden space-x-2 h-min"> <!-- Emojie Principal --> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojiePrincipal })} <!-- Divider Vertical --> <div class:list="bg-mashup-900 w-0.5 rounded-sm h-6"></div> <!-- Cancion --> <p${addAttribute([
    "bg-gradient-to-r text-mashup-900 text-left font-title-medium-font-family text-title-medium-font-size  font-title-medium-font-weight relative leading-normal",
    {
      "from-debut-400": fromEra === "debut",
      "from-fearless-400": fromEra === "fearless",
      "from-speakNow-400": fromEra === "speakNow",
      "from-red-400": fromEra === "red",
      "from-1989-400": fromEra === "1989",
      "from-reputation-400": fromEra === "reputation",
      "from-lover-400": fromEra === "lover",
      "from-folklore-400": fromEra === "folklore",
      "from-evermore-400": fromEra === "evermore",
      "from-midnights-400": fromEra === "midnights",
      "from-TTPD-400": fromEra === "TTPD"
    },
    {
      "via-debut-400": viaEra === "debut",
      "via-fearless-400": viaEra === "fearless",
      "via-speakNow-400": viaEra === "speakNow",
      "via-red-400": viaEra === "red",
      "via-1989-400": viaEra === "1989",
      "via-reputation-400": viaEra === "reputation",
      "via-lover-400": viaEra === "lover",
      "via-folklore-400": viaEra === "folklore",
      "via-evermore-400": viaEra === "evermore",
      "via-midnights-400": viaEra === "midnights",
      "via-TTPD-400": viaEra === "TTPD",
      "": viaEra === "null"
    },
    {
      "to-debut-400": toEra === "debut",
      "to-fearless-400": toEra === "fearless",
      "to-speakNow-400": toEra === "speakNow",
      "to-red-400": toEra === "red",
      "to-1989-400": toEra === "1989",
      "to-reputation-400": toEra === "reputation",
      "to-lover-400": toEra === "lover",
      "to-folklore-400": toEra === "folklore",
      "to-evermore-400": toEra === "evermore",
      "to-midnights-400": toEra === "midnights",
      "to-TTPD-400": toEra === "TTPD"
    }
  ], "class:list")}> ${cancion} </p> <!-- Emojie Adicionales --> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie2 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie3 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie4 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie5 })} ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": emojie6 })} </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/CancionMashup.astro", void 0);

const $$Astro$7 = createAstro("https:matiassolisschneeberger.github.io");
const $$SectionCanciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionCanciones;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article id="Canciones" class="py-12 px-8 sm:px-10 xl:px-28 space-y-6"> <!-- Titulo --> ${renderComponent($$result, "Title", $$Title, { "era": era, "titulo": "Canciones Sorpresas", "texto": "Estas fueron las canciones sorpresas que hubieron hasta ahora en \u201CThe Eras Tour\u201D." })} <!-- Botontes/Etiquetas --> <section class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"> <!-- Botones --> <div class="rounded-3xl flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative"> <h3${addAttribute([
    "text-center text-headline-medium relative self-stretch",
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
  ], "class:list")}>
Eras
</h3> <!-- Botones de las eras --> <div class="flex flex-row gap-3 items-center justify-center flex-wrap self-stretch shrink-0 relative"> ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": "debut", "href": "#debut", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "debut", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
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
` })} </div> </div> <!-- Etiquetas --> <div class="rounded-3xl flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative"> <h3${addAttribute([
    "text-center text-headline-medium relative self-stretch",
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
  ], "class:list")}>
Etiquetas
</h3> <!-- Etiquetas --> <div class="flex flex-row gap-3 items-center justify-center flex-wrap self-stretch shrink-0 relative"> ${renderComponent($$result, "Chip", $$Chip, { "era": "red", "icono": "Izq" }, { "before": ($$result2) => renderTemplate`${renderComponent($$result2, "Emojie", $$Emojie, { "emojie": "guitarra", "slot": "before" })}`, "default": ($$result2) => renderTemplate` 
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
` })} </div> </div> </section> <!-- TarjetasCanciones --> <section class="flex flex-row gap-6 items-center justify-center flex-wrap self-stretch shrink-0 relative py-0"> ${eras.map(({ albums, Spotify, canciones, extras, linkPage, YTMusic }) => {
    return renderTemplate`${renderComponent($$result, "TarjetaCancion", $$TarjetaCancion, { "eraTarjeta": albums, "spotify": Spotify, "linkPage": linkPage, "YTmusic": YTMusic }, { "default": ($$result2) => renderTemplate`${canciones.map(
      ({ title, etiquetas }) => {
        return renderTemplate`${renderComponent($$result2, "Cancion", $$Cancion, { "eraTarjeta": albums, "cancion": title, "emojiePrincipal": etiquetas.principal, "emojie2": etiquetas.segundo, "emojie3": etiquetas.tercer, "emojie4": etiquetas.cuarto, "emojie5": etiquetas.quinto, "emojie6": etiquetas.sexto })}`;
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
    ], "class:list")}></div>`}${extras.map(({ title, etiquetas }) => {
      return renderTemplate`${renderComponent($$result2, "Cancion", $$Cancion, { "eraTarjeta": albums, "cancion": title, "emojiePrincipal": etiquetas.principal, "emojie2": etiquetas.segundo, "emojie3": etiquetas.tercer, "emojie4": etiquetas.cuarto, "emojie5": etiquetas.quinto, "emojie6": etiquetas.sexto })}`;
    })}` })}`;
  })} ${renderComponent($$result, "CancionMashup", $$CancionMashup, { "fromEra": "debut", "viaEra": "null", "toEra": "red", "cancion": "Our Song x All too well", "emojiePrincipal": "", "emojie2": "", "emojie3": "", "emojie4": "", "emojie5": "", "emojie6": "" })} </section> </article>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/sections/SectionCanciones.astro", void 0);

const $$Astro$6 = createAstro("https:matiassolisschneeberger.github.io");
const $$Subtitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Subtitle;
  const { era, titulo, texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative"> <h2${addAttribute(`text-${era}-900 text-center text-headline-large relative self-stretch`, "class:list")}> ${titulo} </h2> <p${addAttribute(["text-${era}-900 text-title-medium relative self-stretch", [{ "hidden": texto === null }]], "class:list")}> ${texto} </p> </section>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/Subtitle.astro", void 0);

const $$Astro$5 = createAstro("https:matiassolisschneeberger.github.io");
const $$CiudadSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CiudadSvg;
  const { era, estado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute(
    [
      {
        "fill-debut-300": estado === "pasado" && era === "debut",
        "fill-fearless-300": estado === "pasado" && era === "fearless",
        "fill-speakNow-300": estado === "pasado" && era === "speakNow",
        "fill-red-300": estado === "pasado" && era === "red",
        "fill-1989-300": estado === "pasado" && era === "1989",
        "fill-reputation-300": estado === "pasado" && era === "reputation",
        "fill-lover-300": estado === "pasado" && era === "lover",
        "fill-folklore-300": estado === "pasado" && era === "folklore",
        "fill-evermore-300": estado === "pasado" && era === "evermore",
        "fill-midnights-300": estado === "pasado" && era === "midnights",
        "fill-TTPD-300": estado === "pasado" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "ahora" && era === "debut",
        "fill-fearless-900": estado === "ahora" && era === "fearless",
        "fill-speakNow-900": estado === "ahora" && era === "speakNow",
        "fill-red-900": estado === "ahora" && era === "red",
        "fill-1989-900": estado === "ahora" && era === "1989",
        "fill-reputation-900": estado === "ahora" && era === "reputation",
        "fill-lover-900": estado === "ahora" && era === "lover",
        "fill-folklore-900": estado === "ahora" && era === "folklore",
        "fill-evermore-900": estado === "ahora" && era === "evermore",
        "fill-midnights-900": estado === "ahora" && era === "midnights",
        "fill-TTPD-900": estado === "ahora" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "futuro" && era === "debut",
        "fill-fearless-900": estado === "futuro" && era === "fearless",
        "fill-speakNow-900": estado === "futuro" && era === "speakNow",
        "fill-red-900": estado === "futuro" && era === "red",
        "fill-1989-900": estado === "futuro" && era === "1989",
        "fill-reputation-900": estado === "futuro" && era === "reputation",
        "fill-lover-900": estado === "futuro" && era === "lover",
        "fill-folklore-900": estado === "futuro" && era === "folklore",
        "fill-evermore-900": estado === "futuro" && era === "evermore",
        "fill-midnights-900": estado === "futuro" && era === "midnights",
        "fill-TTPD-900": estado === "futuro" && era === "TTPD"
      }
    ],
    "class:list"
  )}> <path d="M200-120q-33 0-56.5-23.5T120-200v-400q0-33 23.5-56.5T200-680h80v-80q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v240h80q33 0 56.5 23.5T840-440v240q0 33-23.5 56.5T760-120H520v-160h-80v160H200Zm0-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/CiudadSvg.astro", void 0);

const $$Astro$4 = createAstro("https:matiassolisschneeberger.github.io");
const $$LocationSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LocationSvg;
  const { era, estado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute(
    [
      {
        "fill-debut-300": estado === "pasado" && era === "debut",
        "fill-fearless-300": estado === "pasado" && era === "fearless",
        "fill-speakNow-300": estado === "pasado" && era === "speakNow",
        "fill-red-300": estado === "pasado" && era === "red",
        "fill-1989-300": estado === "pasado" && era === "1989",
        "fill-reputation-300": estado === "pasado" && era === "reputation",
        "fill-lover-300": estado === "pasado" && era === "lover",
        "fill-folklore-300": estado === "pasado" && era === "folklore",
        "fill-evermore-300": estado === "pasado" && era === "evermore",
        "fill-midnights-300": estado === "pasado" && era === "midnights",
        "fill-TTPD-300": estado === "pasado" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "ahora" && era === "debut",
        "fill-fearless-900": estado === "ahora" && era === "fearless",
        "fill-speakNow-900": estado === "ahora" && era === "speakNow",
        "fill-red-900": estado === "ahora" && era === "red",
        "fill-1989-900": estado === "ahora" && era === "1989",
        "fill-reputation-900": estado === "ahora" && era === "reputation",
        "fill-lover-900": estado === "ahora" && era === "lover",
        "fill-folklore-900": estado === "ahora" && era === "folklore",
        "fill-evermore-900": estado === "ahora" && era === "evermore",
        "fill-midnights-900": estado === "ahora" && era === "midnights",
        "fill-TTPD-900": estado === "ahora" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "futuro" && era === "debut",
        "fill-fearless-900": estado === "futuro" && era === "fearless",
        "fill-speakNow-900": estado === "futuro" && era === "speakNow",
        "fill-red-900": estado === "futuro" && era === "red",
        "fill-1989-900": estado === "futuro" && era === "1989",
        "fill-reputation-900": estado === "futuro" && era === "reputation",
        "fill-lover-900": estado === "futuro" && era === "lover",
        "fill-folklore-900": estado === "futuro" && era === "folklore",
        "fill-evermore-900": estado === "futuro" && era === "evermore",
        "fill-midnights-900": estado === "futuro" && era === "midnights",
        "fill-TTPD-900": estado === "futuro" && era === "TTPD"
      }
    ],
    "class:list"
  )}> <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-373q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/LocationSvg.astro", void 0);

const $$Astro$3 = createAstro("https:matiassolisschneeberger.github.io");
const $$MicrofonoSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MicrofonoSvg;
  const { era, estado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute(
    [
      {
        "fill-debut-300": estado === "pasado" && era === "debut",
        "fill-fearless-300": estado === "pasado" && era === "fearless",
        "fill-speakNow-300": estado === "pasado" && era === "speakNow",
        "fill-red-300": estado === "pasado" && era === "red",
        "fill-1989-300": estado === "pasado" && era === "1989",
        "fill-reputation-300": estado === "pasado" && era === "reputation",
        "fill-lover-300": estado === "pasado" && era === "lover",
        "fill-folklore-300": estado === "pasado" && era === "folklore",
        "fill-evermore-300": estado === "pasado" && era === "evermore",
        "fill-midnights-300": estado === "pasado" && era === "midnights",
        "fill-TTPD-300": estado === "pasado" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "ahora" && era === "debut",
        "fill-fearless-900": estado === "ahora" && era === "fearless",
        "fill-speakNow-900": estado === "ahora" && era === "speakNow",
        "fill-red-900": estado === "ahora" && era === "red",
        "fill-1989-900": estado === "ahora" && era === "1989",
        "fill-reputation-900": estado === "ahora" && era === "reputation",
        "fill-lover-900": estado === "ahora" && era === "lover",
        "fill-folklore-900": estado === "ahora" && era === "folklore",
        "fill-evermore-900": estado === "ahora" && era === "evermore",
        "fill-midnights-900": estado === "ahora" && era === "midnights",
        "fill-TTPD-900": estado === "ahora" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "futuro" && era === "debut",
        "fill-fearless-900": estado === "futuro" && era === "fearless",
        "fill-speakNow-900": estado === "futuro" && era === "speakNow",
        "fill-red-900": estado === "futuro" && era === "red",
        "fill-1989-900": estado === "futuro" && era === "1989",
        "fill-reputation-900": estado === "futuro" && era === "reputation",
        "fill-lover-900": estado === "futuro" && era === "lover",
        "fill-folklore-900": estado === "futuro" && era === "folklore",
        "fill-evermore-900": estado === "futuro" && era === "evermore",
        "fill-midnights-900": estado === "futuro" && era === "midnights",
        "fill-TTPD-900": estado === "futuro" && era === "TTPD"
      }
    ],
    "class:list"
  )}> <path d="M192-680q-15-17-23.5-37t-8.5-43q0-50 35-85t85-35q50 0 85 35t35 85q0 23-8.5 43T368-680H192ZM400-80q-66 0-113-47t-47-113h-4q-16 0-27-10.5T196-276l-32-320q-2-18 10-31t30-13h152q18 0 30 13t10 31l-32 320q-2 15-13 25.5T324-240h-4q0 33 23.5 56.5T400-160q33 0 56.5-23.5T480-240v-480q0-66 47-113t113-47q66 0 113 47t47 113v600q0 17-11.5 28.5T760-80q-17 0-28.5-11.5T720-120v-600q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720v480q0 66-47 113T400-80Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/MicrofonoSvg.astro", void 0);

const $$Astro$2 = createAstro("https:matiassolisschneeberger.github.io");
const $$StadiumSvg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StadiumSvg;
  const { era, estado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="shrink-0 relative overflow-visible"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"${addAttribute(
    [
      {
        "fill-debut-300": estado === "pasado" && era === "debut",
        "fill-fearless-300": estado === "pasado" && era === "fearless",
        "fill-speakNow-300": estado === "pasado" && era === "speakNow",
        "fill-red-300": estado === "pasado" && era === "red",
        "fill-1989-300": estado === "pasado" && era === "1989",
        "fill-reputation-300": estado === "pasado" && era === "reputation",
        "fill-lover-300": estado === "pasado" && era === "lover",
        "fill-folklore-300": estado === "pasado" && era === "folklore",
        "fill-evermore-300": estado === "pasado" && era === "evermore",
        "fill-midnights-300": estado === "pasado" && era === "midnights",
        "fill-TTPD-300": estado === "pasado" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "ahora" && era === "debut",
        "fill-fearless-900": estado === "ahora" && era === "fearless",
        "fill-speakNow-900": estado === "ahora" && era === "speakNow",
        "fill-red-900": estado === "ahora" && era === "red",
        "fill-1989-900": estado === "ahora" && era === "1989",
        "fill-reputation-900": estado === "ahora" && era === "reputation",
        "fill-lover-900": estado === "ahora" && era === "lover",
        "fill-folklore-900": estado === "ahora" && era === "folklore",
        "fill-evermore-900": estado === "ahora" && era === "evermore",
        "fill-midnights-900": estado === "ahora" && era === "midnights",
        "fill-TTPD-900": estado === "ahora" && era === "TTPD"
      },
      {
        "fill-debut-900": estado === "futuro" && era === "debut",
        "fill-fearless-900": estado === "futuro" && era === "fearless",
        "fill-speakNow-900": estado === "futuro" && era === "speakNow",
        "fill-red-900": estado === "futuro" && era === "red",
        "fill-1989-900": estado === "futuro" && era === "1989",
        "fill-reputation-900": estado === "futuro" && era === "reputation",
        "fill-lover-900": estado === "futuro" && era === "lover",
        "fill-folklore-900": estado === "futuro" && era === "folklore",
        "fill-evermore-900": estado === "futuro" && era === "evermore",
        "fill-midnights-900": estado === "futuro" && era === "midnights",
        "fill-TTPD-900": estado === "futuro" && era === "TTPD"
      }
    ],
    "class:list"
  )}> <path d="M120-712v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17Zm600 0v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17Zm-280-40v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17ZM336-88q-98-11-177-39.5T80-200v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 45-79.5 73.5T623-87q-9 1-16-5.5t-7-15.5v-52q0-50-35-85t-85-35q-50 0-85 35t-35 85v51q0 10-7 16t-17 5Zm144-432q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520Z"></path> </svg> </div>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/svg/StadiumSvg.astro", void 0);

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$TarjetaFecha = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TarjetaFecha;
  const { estado, eraFecha, dia, mes, a\u00F1o, pais, ciudad, estadio, telonero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "rounded-3xl p-3 flex flex-row gap-2.5 items-center justify-start flex-1 h-40 min-w-[400px] relative overflow-hidden",
    {
      "bg-debut-200": estado === "pasado" && eraFecha === "debut",
      "bg-fearless-200": estado === "pasado" && eraFecha === "fearless",
      "bg-speakNow-200": estado === "pasado" && eraFecha === "speakNow",
      "bg-red-200": estado === "pasado" && eraFecha === "red",
      "bg-1989-200": estado === "pasado" && eraFecha === "1989",
      "bg-reputation-200": estado === "pasado" && eraFecha === "reputation",
      "bg-lover-200": estado === "pasado" && eraFecha === "lover",
      "bg-folklore-200": estado === "pasado" && eraFecha === "folklore",
      "bg-evermore-200": estado === "pasado" && eraFecha === "evermore",
      "bg-midnights-200": estado === "pasado" && eraFecha === "midnights",
      "bg-TTPD-200": estado === "pasado" && eraFecha === "TTPD"
    },
    {
      "bg-debut-300": estado === "ahora" && eraFecha === "debut",
      "bg-fearless-300": estado === "ahora" && eraFecha === "fearless",
      "bg-speakNow-300": estado === "ahora" && eraFecha === "speakNow",
      "bg-red-300": estado === "ahora" && eraFecha === "red",
      "bg-1989-300": estado === "ahora" && eraFecha === "1989",
      "bg-reputation-300": estado === "ahora" && eraFecha === "reputation",
      "bg-lover-300": estado === "ahora" && eraFecha === "lover",
      "bg-folklore-300": estado === "ahora" && eraFecha === "folklore",
      "bg-evermore-300": estado === "ahora" && eraFecha === "evermore",
      "bg-midnights-300": estado === "ahora" && eraFecha === "midnights",
      "bg-TTPD-300": estado === "ahora" && eraFecha === "TTPD"
    },
    {
      "bg-debut-300": estado === "futuro" && eraFecha === "debut",
      "bg-fearless-300": estado === "futuro" && eraFecha === "fearless",
      "bg-speakNow-300": estado === "futuro" && eraFecha === "speakNow",
      "bg-red-300": estado === "futuro" && eraFecha === "red",
      "bg-1989-300": estado === "futuro" && eraFecha === "1989",
      "bg-reputation-300": estado === "futuro" && eraFecha === "reputation",
      "bg-lover-300": estado === "futuro" && eraFecha === "lover",
      "bg-folklore-300": estado === "futuro" && eraFecha === "folklore",
      "bg-evermore-300": estado === "futuro" && eraFecha === "evermore",
      "bg-midnights-300": estado === "futuro" && eraFecha === "midnights",
      "bg-TTPD-300": estado === "futuro" && eraFecha === "TTPD"
    }
  ], "class:list")}> <!-- cuadro de fecha --> <div class="flex flex-col gap-0 items-center justify-center self-stretch shrink-0 relative rounded-xl  overflow-hidden"> <!-- Cuadro de Ahora --> <div${addAttribute([
    "bg-schemes-error rounded-tl-xl rounded-tr-xl pr-3.5 pl-3.5 flex flex-col gap-0 items-center justify-start shrink-0 w-full relative overflow-hidden",
    {
      "hidden": estado !== "ahora"
    }
  ], "class:list")}> <div class="text-schemes-error-container text-center text-title-small relative self-stretch" style="letter-spacing: var(--title-small-letter-spacing, 0.1px)">
Ahora
</div> </div> <div${addAttribute([
    "pr-3.5 pl-3.5 flex flex-col gap-0 items-center justify-center flex-1 relative overflow-hidden",
    {
      "bg-debut-300": estado === "pasado" && eraFecha === "debut",
      "bg-fearless-300": estado === "pasado" && eraFecha === "fearless",
      "bg-speakNow-300": estado === "pasado" && eraFecha === "speakNow",
      "bg-red-300": estado === "pasado" && eraFecha === "red",
      "bg-1989-300": estado === "pasado" && eraFecha === "1989",
      "bg-reputation-300": estado === "pasado" && eraFecha === "reputation",
      "bg-lover-300": estado === "pasado" && eraFecha === "lover",
      "bg-folklore-300": estado === "pasado" && eraFecha === "folklore",
      "bg-evermore-300": estado === "pasado" && eraFecha === "evermore",
      "bg-midnights-300": estado === "pasado" && eraFecha === "midnights",
      "bg-TTPD-300": estado === "pasado" && eraFecha === "TTPD"
    },
    {
      "bg-debut-600": estado === "ahora" && eraFecha === "debut",
      "bg-fearless-600": estado === "ahora" && eraFecha === "fearless",
      "bg-speakNow-600": estado === "ahora" && eraFecha === "speakNow",
      "bg-red-600": estado === "ahora" && eraFecha === "red",
      "bg-1989-600": estado === "ahora" && eraFecha === "1989",
      "bg-reputation-600": estado === "ahora" && eraFecha === "reputation",
      "bg-lover-600": estado === "ahora" && eraFecha === "lover",
      "bg-folklore-600": estado === "ahora" && eraFecha === "folklore",
      "bg-evermore-600": estado === "ahora" && eraFecha === "evermore",
      "bg-midnights-600": estado === "ahora" && eraFecha === "midnights",
      "bg-TTPD-600": estado === "ahora" && eraFecha === "TTPD"
    },
    {
      "bg-debut-600": estado === "futuro" && eraFecha === "debut",
      "bg-fearless-600": estado === "futuro" && eraFecha === "fearless",
      "bg-speakNow-600": estado === "futuro" && eraFecha === "speakNow",
      "bg-red-600": estado === "futuro" && eraFecha === "red",
      "bg-1989-600": estado === "futuro" && eraFecha === "1989",
      "bg-reputation-600": estado === "futuro" && eraFecha === "reputation",
      "bg-lover-600": estado === "futuro" && eraFecha === "lover",
      "bg-folklore-600": estado === "futuro" && eraFecha === "folklore",
      "bg-evermore-600": estado === "futuro" && eraFecha === "evermore",
      "bg-midnights-600": estado === "futuro" && eraFecha === "midnights",
      "bg-TTPD-600": estado === "futuro" && eraFecha === "TTPD"
    }
  ], "class:list")}> <p${addAttribute([
    "text-left text-display-small relativ",
    {
      "text-debut-200": eraFecha === "debut",
      "text-fearless-200": eraFecha === "fearless",
      "text-speakNow-200": eraFecha === "speakNow",
      "text-red-200": eraFecha === "red",
      "text-1989-200": eraFecha === "1989",
      "text-reputation-200": eraFecha === "reputation",
      "text-lover-200": eraFecha === "lover",
      "text-folklore-200": eraFecha === "folklore",
      "text-evermore-200": eraFecha === "evermore",
      "text-midnights-200": eraFecha === "midnights",
      "text-TTPD-200": eraFecha === "TTPD"
    }
  ], "class:list")}> ${dia} </p> <p${addAttribute([
    "text-left text-display-small relative",
    {
      "text-debut-200": eraFecha === "debut",
      "text-fearless-200": eraFecha === "fearless",
      "text-speakNow-200": eraFecha === "speakNow",
      "text-red-200": eraFecha === "red",
      "text-1989-200": eraFecha === "1989",
      "text-reputation-200": eraFecha === "reputation",
      "text-lover-200": eraFecha === "lover",
      "text-folklore-200": eraFecha === "folklore",
      "text-evermore-200": eraFecha === "evermore",
      "text-midnights-200": eraFecha === "midnights",
      "text-TTPD-200": eraFecha === "TTPD"
    }
  ], "class:list")}> ${mes} </p> <p${addAttribute([
    " text-left text-title-small relative",
    {
      "text-debut-200": eraFecha === "debut",
      "text-fearless-200": eraFecha === "fearless",
      "text-speakNow-200": eraFecha === "speakNow",
      "text-red-200": eraFecha === "red",
      "text-1989-200": eraFecha === "1989",
      "text-reputation-200": eraFecha === "reputation",
      "text-lover-200": eraFecha === "lover",
      "text-folklore-200": eraFecha === "folklore",
      "text-evermore-200": eraFecha === "evermore",
      "text-midnights-200": eraFecha === "midnights",
      "text-TTPD-200": eraFecha === "TTPD"
    }
  ], "class:list")}> ${a\u00F1o} </p> </div> </div> <div class="flex flex-col items-start justify-between self-stretch shrink-0 relative overflow-hidden"> <div class="flex flex-row gap-[5px] items-center justify-start shrink-0 relative"> ${renderComponent($$result, "CiudadSvg", $$CiudadSvg, { "era": eraFecha, "estado": estado })} <p${addAttribute([
    "text-left text-headline-medium relative",
    {
      "text-debut-300": estado === "pasado" && eraFecha === "debut",
      "text-fearless-300": estado === "pasado" && eraFecha === "fearless",
      "text-speakNow-300": estado === "pasado" && eraFecha === "speakNow",
      "text-red-300": estado === "pasado" && eraFecha === "red",
      "text-1989-300": estado === "pasado" && eraFecha === "1989",
      "text-reputation-300": estado === "pasado" && eraFecha === "reputation",
      "text-lover-300": estado === "pasado" && eraFecha === "lover",
      "text-folklore-300": estado === "pasado" && eraFecha === "folklore",
      "text-evermore-300": estado === "pasado" && eraFecha === "evermore",
      "text-midnights-300": estado === "pasado" && eraFecha === "midnights",
      "text-TTPD-300": estado === "pasado" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "ahora" && eraFecha === "debut",
      "text-fearless-900": estado === "ahora" && eraFecha === "fearless",
      "text-speakNow-900": estado === "ahora" && eraFecha === "speakNow",
      "text-red-900": estado === "ahora" && eraFecha === "red",
      "text-1989-900": estado === "ahora" && eraFecha === "1989",
      "text-reputation-900": estado === "ahora" && eraFecha === "reputation",
      "text-lover-900": estado === "ahora" && eraFecha === "lover",
      "text-folklore-900": estado === "ahora" && eraFecha === "folklore",
      "text-evermore-900": estado === "ahora" && eraFecha === "evermore",
      "text-midnights-900": estado === "ahora" && eraFecha === "midnights",
      "text-TTPD-900": estado === "ahora" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "futuro" && eraFecha === "debut",
      "text-fearless-900": estado === "futuro" && eraFecha === "fearless",
      "text-speakNow-900": estado === "futuro" && eraFecha === "speakNow",
      "text-red-900": estado === "futuro" && eraFecha === "red",
      "text-1989-900": estado === "futuro" && eraFecha === "1989",
      "text-reputation-900": estado === "futuro" && eraFecha === "reputation",
      "text-lover-900": estado === "futuro" && eraFecha === "lover",
      "text-folklore-900": estado === "futuro" && eraFecha === "folklore",
      "text-evermore-900": estado === "futuro" && eraFecha === "evermore",
      "text-midnights-900": estado === "futuro" && eraFecha === "midnights",
      "text-TTPD-900": estado === "futuro" && eraFecha === "TTPD"
    }
  ], "class:list")}> ${ciudad} </p> </div> <div class="flex flex-row gap-[5px] items-center justify-start shrink-0 relative"> ${renderComponent($$result, "LocationSvg", $$LocationSvg, { "era": eraFecha, "estado": estado })} <p${addAttribute([
    "text-left text-headline-medium relative",
    {
      "text-debut-300": estado === "pasado" && eraFecha === "debut",
      "text-fearless-300": estado === "pasado" && eraFecha === "fearless",
      "text-speakNow-300": estado === "pasado" && eraFecha === "speakNow",
      "text-red-300": estado === "pasado" && eraFecha === "red",
      "text-1989-300": estado === "pasado" && eraFecha === "1989",
      "text-reputation-300": estado === "pasado" && eraFecha === "reputation",
      "text-lover-300": estado === "pasado" && eraFecha === "lover",
      "text-folklore-300": estado === "pasado" && eraFecha === "folklore",
      "text-evermore-300": estado === "pasado" && eraFecha === "evermore",
      "text-midnights-300": estado === "pasado" && eraFecha === "midnights",
      "text-TTPD-300": estado === "pasado" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "ahora" && eraFecha === "debut",
      "text-fearless-900": estado === "ahora" && eraFecha === "fearless",
      "text-speakNow-900": estado === "ahora" && eraFecha === "speakNow",
      "text-red-900": estado === "ahora" && eraFecha === "red",
      "text-1989-900": estado === "ahora" && eraFecha === "1989",
      "text-reputation-900": estado === "ahora" && eraFecha === "reputation",
      "text-lover-900": estado === "ahora" && eraFecha === "lover",
      "text-folklore-900": estado === "ahora" && eraFecha === "folklore",
      "text-evermore-900": estado === "ahora" && eraFecha === "evermore",
      "text-midnights-900": estado === "ahora" && eraFecha === "midnights",
      "text-TTPD-900": estado === "ahora" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "futuro" && eraFecha === "debut",
      "text-fearless-900": estado === "futuro" && eraFecha === "fearless",
      "text-speakNow-900": estado === "futuro" && eraFecha === "speakNow",
      "text-red-900": estado === "futuro" && eraFecha === "red",
      "text-1989-900": estado === "futuro" && eraFecha === "1989",
      "text-reputation-900": estado === "futuro" && eraFecha === "reputation",
      "text-lover-900": estado === "futuro" && eraFecha === "lover",
      "text-folklore-900": estado === "futuro" && eraFecha === "folklore",
      "text-evermore-900": estado === "futuro" && eraFecha === "evermore",
      "text-midnights-900": estado === "futuro" && eraFecha === "midnights",
      "text-TTPD-900": estado === "futuro" && eraFecha === "TTPD"
    }
  ], "class:list")}> ${pais} </p> </div> <div class="flex flex-row gap-[5px] items-center justify-start shrink-0 relative"> ${renderComponent($$result, "StadiumSvg", $$StadiumSvg, { "era": eraFecha, "estado": estado })} <p${addAttribute([
    "text-left text-title-medium relative",
    {
      "text-debut-300": estado === "pasado" && eraFecha === "debut",
      "text-fearless-300": estado === "pasado" && eraFecha === "fearless",
      "text-speakNow-300": estado === "pasado" && eraFecha === "speakNow",
      "text-red-300": estado === "pasado" && eraFecha === "red",
      "text-1989-300": estado === "pasado" && eraFecha === "1989",
      "text-reputation-300": estado === "pasado" && eraFecha === "reputation",
      "text-lover-300": estado === "pasado" && eraFecha === "lover",
      "text-folklore-300": estado === "pasado" && eraFecha === "folklore",
      "text-evermore-300": estado === "pasado" && eraFecha === "evermore",
      "text-midnights-300": estado === "pasado" && eraFecha === "midnights",
      "text-TTPD-300": estado === "pasado" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "ahora" && eraFecha === "debut",
      "text-fearless-900": estado === "ahora" && eraFecha === "fearless",
      "text-speakNow-900": estado === "ahora" && eraFecha === "speakNow",
      "text-red-900": estado === "ahora" && eraFecha === "red",
      "text-1989-900": estado === "ahora" && eraFecha === "1989",
      "text-reputation-900": estado === "ahora" && eraFecha === "reputation",
      "text-lover-900": estado === "ahora" && eraFecha === "lover",
      "text-folklore-900": estado === "ahora" && eraFecha === "folklore",
      "text-evermore-900": estado === "ahora" && eraFecha === "evermore",
      "text-midnights-900": estado === "ahora" && eraFecha === "midnights",
      "text-TTPD-900": estado === "ahora" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "futuro" && eraFecha === "debut",
      "text-fearless-900": estado === "futuro" && eraFecha === "fearless",
      "text-speakNow-900": estado === "futuro" && eraFecha === "speakNow",
      "text-red-900": estado === "futuro" && eraFecha === "red",
      "text-1989-900": estado === "futuro" && eraFecha === "1989",
      "text-reputation-900": estado === "futuro" && eraFecha === "reputation",
      "text-lover-900": estado === "futuro" && eraFecha === "lover",
      "text-folklore-900": estado === "futuro" && eraFecha === "folklore",
      "text-evermore-900": estado === "futuro" && eraFecha === "evermore",
      "text-midnights-900": estado === "futuro" && eraFecha === "midnights",
      "text-TTPD-900": estado === "futuro" && eraFecha === "TTPD"
    }
  ], "class:list")}> ${estadio} </p> </div> <div${addAttribute([
    "flex flex-row gap-[5px] items-center justify-start shrink-0 relative",
    {
      "hidden": telonero === ""
    }
  ], "class:list")}> ${renderComponent($$result, "MicrofonoSvg", $$MicrofonoSvg, { "era": eraFecha, "estado": estado })} <p${addAttribute([
    "text-${eraFecha}-900 text-left text-title-small relative",
    {
      "text-debut-300": estado === "pasado" && eraFecha === "debut",
      "text-fearless-300": estado === "pasado" && eraFecha === "fearless",
      "text-speakNow-300": estado === "pasado" && eraFecha === "speakNow",
      "text-red-300": estado === "pasado" && eraFecha === "red",
      "text-1989-300": estado === "pasado" && eraFecha === "1989",
      "text-reputation-300": estado === "pasado" && eraFecha === "reputation",
      "text-lover-300": estado === "pasado" && eraFecha === "lover",
      "text-folklore-300": estado === "pasado" && eraFecha === "folklore",
      "text-evermore-300": estado === "pasado" && eraFecha === "evermore",
      "text-midnights-300": estado === "pasado" && eraFecha === "midnights",
      "text-TTPD-300": estado === "pasado" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "ahora" && eraFecha === "debut",
      "text-fearless-900": estado === "ahora" && eraFecha === "fearless",
      "text-speakNow-900": estado === "ahora" && eraFecha === "speakNow",
      "text-red-900": estado === "ahora" && eraFecha === "red",
      "text-1989-900": estado === "ahora" && eraFecha === "1989",
      "text-reputation-900": estado === "ahora" && eraFecha === "reputation",
      "text-lover-900": estado === "ahora" && eraFecha === "lover",
      "text-folklore-900": estado === "ahora" && eraFecha === "folklore",
      "text-evermore-900": estado === "ahora" && eraFecha === "evermore",
      "text-midnights-900": estado === "ahora" && eraFecha === "midnights",
      "text-TTPD-900": estado === "ahora" && eraFecha === "TTPD"
    },
    {
      "text-debut-900": estado === "futuro" && eraFecha === "debut",
      "text-fearless-900": estado === "futuro" && eraFecha === "fearless",
      "text-speakNow-900": estado === "futuro" && eraFecha === "speakNow",
      "text-red-900": estado === "futuro" && eraFecha === "red",
      "text-1989-900": estado === "futuro" && eraFecha === "1989",
      "text-reputation-900": estado === "futuro" && eraFecha === "reputation",
      "text-lover-900": estado === "futuro" && eraFecha === "lover",
      "text-folklore-900": estado === "futuro" && eraFecha === "folklore",
      "text-evermore-900": estado === "futuro" && eraFecha === "evermore",
      "text-midnights-900": estado === "futuro" && eraFecha === "midnights",
      "text-TTPD-900": estado === "futuro" && eraFecha === "TTPD"
    }
  ], "class:list")}> ${telonero} </p> </div> </div> </article>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/components/TarjetaFecha.astro", void 0);

const concerts = {
	pasados: [
		{
			fecha: {
				dia: "17",
				mes: "Mar",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Glendale",
				estadio: "State Farm Stadium"
			},
			telonero: "Paramore, Gayle"
		},
		{
			fecha: {
				dia: "18",
				mes: "Mar",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Glendale",
				estadio: "State Farm Stadium"
			},
			telonero: "Paramore, Gayle"
		},
		{
			fecha: {
				dia: "24",
				mes: "Mar",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Paradisea",
				estadio: "Allegiant Stadium"
			},
			telonero: "Gayle, Beabadoobee"
		},
		{
			fecha: {
				dia: "25",
				mes: "Mar",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Paradisea",
				estadio: "Allegiant Stadium"
			},
			telonero: "Gayle, Beabadoobee"
		},
		{
			fecha: {
				dia: "31",
				mes: "Mar",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Arlington",
				estadio: "AT&T Stadium"
			},
			telonero: "MUNA, Gayle"
		},
		{
			fecha: {
				dia: "1",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Arlington",
				estadio: "AT&T Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "2",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Arlington",
				estadio: "AT&T Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "13",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Tampa",
				estadio: "Raymond James Stadium"
			},
			telonero: "Beabadoobee, Gayle"
		},
		{
			fecha: {
				dia: "14",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Tampa",
				estadio: "Raymond James Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "15",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Tampa",
				estadio: "Raymond James Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "21",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Houston",
				estadio: "NRG Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "22",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Houston",
				estadio: "NRG Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "23",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Houston",
				estadio: "NRG Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "28",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Atlanta",
				estadio: "Mercedes-Benz Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "29",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Atlanta",
				estadio: "Mercedes-Benz Stadium"
			},
			telonero: "Gracie Abrams, Beabadoobee"
		},
		{
			fecha: {
				dia: "30",
				mes: "Abr",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Atlanta",
				estadio: "Mercedes-Benz Stadium"
			},
			telonero: "MUNA, Gayle"
		},
		{
			fecha: {
				dia: "5",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Nashville",
				estadio: "Nissan Stadium"
			},
			telonero: "Phoebe Bridgers, Gracie Abrams"
		},
		{
			fecha: {
				dia: "6",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Nashville",
				estadio: "Nissan Stadium"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "7",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Nashville",
				estadio: "Nissan Stadium"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "12",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Filadelfia",
				estadio: "Lincoln Financial Field"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "13",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Filadelfia",
				estadio: "Lincoln Financial Field"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "14",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Filadelfia",
				estadio: "Lincoln Financial Field"
			},
			telonero: "Phoebe Bridgers, Gracie Abrams"
		},
		{
			fecha: {
				dia: "19",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Foxborough",
				estadio: "Gillette Stadium"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "20",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Foxborough",
				estadio: "Gillette Stadium"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "21",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Foxborough",
				estadio: "Gillette Stadium"
			},
			telonero: "Phoebe Bridgers, Gracie Abrams"
		},
		{
			fecha: {
				dia: "26",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "East Rutherford",
				estadio: "MetLife Stadium"
			},
			telonero: "Phoebe Bridgers, Gayle"
		},
		{
			fecha: {
				dia: "27",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "East Rutherford",
				estadio: "MetLife Stadium"
			},
			telonero: "Phoebe Bridgers, Gracie Abrams"
		},
		{
			fecha: {
				dia: "28",
				mes: "May",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "East Rutherford",
				estadio: "MetLife Stadium"
			},
			telonero: "Phoebe Bridgers, OWENN"
		},
		{
			fecha: {
				dia: "2",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Chicago",
				estadio: "Soldier Field"
			},
			telonero: "Girl in Red, OWENN"
		},
		{
			fecha: {
				dia: "3",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Chicago",
				estadio: "Soldier Field"
			},
			telonero: "Girl in Red, OWENN"
		},
		{
			fecha: {
				dia: "4",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Chicago",
				estadio: "Soldier Field"
			},
			telonero: "MUNA, Gracie Abrams"
		},
		{
			fecha: {
				dia: "9",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Detroit",
				estadio: "Ford Field"
			},
			telonero: "Girl in Red, Gracie Abrams"
		},
		{
			fecha: {
				dia: "10",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Detroit",
				estadio: "Ford Field"
			},
			telonero: "Girl in Red, OWENN"
		},
		{
			fecha: {
				dia: "16",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Pittsburgh",
				estadio: "Acrisure Stadium"
			},
			telonero: "Girl in Red, Gracie Abrams"
		},
		{
			fecha: {
				dia: "17",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Pittsburgh",
				estadio: "Acrisure Stadium"
			},
			telonero: "Girl in Red, OWENN"
		},
		{
			fecha: {
				dia: "23",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Minneapolis",
				estadio: "U.S. Bank Stadium"
			},
			telonero: "Girl in Red, Gracie Abrams"
		},
		{
			fecha: {
				dia: "24",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Minneapolis",
				estadio: "U.S. Bank Stadium"
			},
			telonero: "Girl in Red, OWENN"
		},
		{
			fecha: {
				dia: "30",
				mes: "Jun",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Cincinnati",
				estadio: "Paycor Stadium"
			},
			telonero: "MUNA, Gracie Abrams"
		},
		{
			fecha: {
				dia: "1",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Cincinnati",
				estadio: "Paycor Stadium"
			},
			telonero: "MUNA"
		},
		{
			fecha: {
				dia: "7",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Kansas City",
				estadio: "GEHA Field at Arrowhead Stadium"
			},
			telonero: "MUNA, Gracie Abrams"
		},
		{
			fecha: {
				dia: "8",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Kansas City",
				estadio: "GEHA Field at Arrowhead Stadium"
			},
			telonero: "MUNA, Gracie Abrams"
		},
		{
			fecha: {
				dia: "14",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Denver",
				estadio: "Empower Field at Mile High"
			},
			telonero: "MUNA, Gracie Abrams"
		},
		{
			fecha: {
				dia: "15",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Denver",
				estadio: "Empower Field at Mile High"
			},
			telonero: "MUNA, Gracie Abrams"
		},
		{
			fecha: {
				dia: "22",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Seattle",
				estadio: "Lumen Field"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "23",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Seattle",
				estadio: "Lumen Field"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "28",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Santa Clara",
				estadio: "Levi's Stadium"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "29",
				mes: "Jul",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Santa Clara",
				estadio: "Levi's Stadium"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "3",
				mes: "Ago",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Inglewood",
				estadio: "SoFi Stadium"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "4",
				mes: "Ago",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Inglewood",
				estadio: "SoFi Stadium"
			},
			telonero: "Haim, OWENN"
		},
		{
			fecha: {
				dia: "5",
				mes: "Ago",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Inglewood",
				estadio: "SoFi Stadium"
			},
			telonero: "Haim, Gayle"
		},
		{
			fecha: {
				dia: "7",
				mes: "Ago",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Inglewood",
				estadio: "SoFi Stadium"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "8",
				mes: "Ago",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Inglewood",
				estadio: "SoFi Stadium"
			},
			telonero: "Haim, Gracie Abrams"
		},
		{
			fecha: {
				dia: "9",
				mes: "Ago",
				"año": "2023"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Inglewood",
				estadio: "SoFi Stadium"
			},
			telonero: "Haim, Gayle"
		},
		{
			fecha: {
				dia: "9",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Argentina",
				ciudad: "Buenos Aires",
				estadio: "Estadio River Plate"
			},
			telonero: "Louta, Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "10",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Argentina",
				ciudad: "Buenos Aires",
				estadio: "Estadio River Plate"
			},
			telonero: "Louta, Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "*12",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Argentina",
				ciudad: "Buenos Aires",
				estadio: "Estadio River Plate"
			},
			telonero: "Louta, Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "17",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Brasil",
				ciudad: "Río de Janeiro",
				estadio: "Estadio Olímpico Nilton Santos"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "19",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Brasil",
				ciudad: "Río de Janeiro",
				estadio: "Estadio Olímpico Nilton Santos"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "*20",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Brasil",
				ciudad: "Río de Janeiro",
				estadio: "Estadio Olímpico Nilton Santos"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "24",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Brasil",
				ciudad: "São Paulo",
				estadio: "Allianz Parque"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "25",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Brasil",
				ciudad: "São Paulo",
				estadio: "Allianz Parque"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "26",
				mes: "Nov",
				"año": "2023"
			},
			lugar: {
				pais: "Brasil",
				ciudad: "São Paulo",
				estadio: "Allianz Parque"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "7",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Japón",
				ciudad: "Tokio",
				estadio: "Tokyo Dome"
			},
			telonero: ""
		},
		{
			fecha: {
				dia: "8",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Japón",
				ciudad: "Tokio",
				estadio: "Tokyo Dome"
			},
			telonero: ""
		},
		{
			fecha: {
				dia: "9",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Japón",
				ciudad: "Tokio",
				estadio: "Tokyo Dome"
			},
			telonero: ""
		},
		{
			fecha: {
				dia: "10",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Japón",
				ciudad: "Tokio",
				estadio: "Tokyo Dome"
			},
			telonero: ""
		},
		{
			fecha: {
				dia: "16",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Melbourne",
				estadio: "Melbourne Cricket Ground"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "17",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Melbourne",
				estadio: "Melbourne Cricket Ground"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "18",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Melbourne",
				estadio: "Melbourne Cricket Ground"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "23",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Sídney",
				estadio: "Accor Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "24",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Sídney",
				estadio: "Accor Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "25",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Sídney",
				estadio: "Accor Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "26",
				mes: "Feb",
				"año": "2024"
			},
			lugar: {
				pais: "Australia",
				ciudad: "Sídney",
				estadio: "Accor Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "2",
				mes: "Mar",
				"año": "2024"
			},
			lugar: {
				pais: "Singapur",
				ciudad: "Singapur",
				estadio: "Singapore National Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "3",
				mes: "Mar",
				"año": "2024"
			},
			lugar: {
				pais: "Singapur",
				ciudad: "Singapur",
				estadio: "Singapore National Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "4",
				mes: "Mar",
				"año": "2024"
			},
			lugar: {
				pais: "Singapur",
				ciudad: "Singapur",
				estadio: "Singapore National Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "7",
				mes: "Mar",
				"año": "2024"
			},
			lugar: {
				pais: "Singapur",
				ciudad: "Singapur",
				estadio: "Singapore National Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "8",
				mes: "Mar",
				"año": "2024"
			},
			lugar: {
				pais: "Singapur",
				ciudad: "Singapur",
				estadio: "Singapore National Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "9",
				mes: "Mar",
				"año": "2024"
			},
			lugar: {
				pais: "Singapur",
				ciudad: "Singapur",
				estadio: "Singapore National Stadium"
			},
			telonero: "Sabrina Carpenter"
		},
		{
			fecha: {
				dia: "9",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Francia",
				ciudad: "Paris",
				estadio: "Paris La Défense Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "10",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Francia",
				ciudad: "Paris",
				estadio: "Paris La Défense Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "11",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Francia",
				ciudad: "Paris",
				estadio: "Paris La Défense Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "12",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Francia",
				ciudad: "Paris",
				estadio: "Paris La Défense Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "17",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Suecia",
				ciudad: "Estocolmo",
				estadio: "Friends Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "18",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Suecia",
				ciudad: "Estocolmo",
				estadio: "Friends Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "19",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Suecia",
				ciudad: "Estocolmo",
				estadio: "Friends Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "24",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Portugal",
				ciudad: "Lisboa",
				estadio: "Estádio da Luz"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "25",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "Portugal",
				ciudad: "Lisboa",
				estadio: "Estádio da Luz"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "29",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "España",
				ciudad: "Madrid",
				estadio: "Estadio Santiago Bernabéu"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "30",
				mes: "May",
				"año": "2024"
			},
			lugar: {
				pais: "España",
				ciudad: "Madrid",
				estadio: "Estadio Santiago Bernabéu"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "2",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Francia",
				ciudad: "Lyno",
				estadio: "Groupama Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "3",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Francia",
				ciudad: "Lyno",
				estadio: "Groupama Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "7",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Edimburgo",
				estadio: "BT Murrayfield Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "8",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Edimburgo",
				estadio: "BT Murrayfield Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "9",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Edimburgo",
				estadio: "BT Murrayfield Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "13",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Liverpool",
				estadio: "Anfield Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "14",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Liverpool",
				estadio: "Anfield Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "15",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Liverpool",
				estadio: "Anfield Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "18",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Cardiff",
				estadio: "Principality Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "21",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore, Mette"
		},
		{
			fecha: {
				dia: "22",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore, Griff"
		},
		{
			fecha: {
				dia: "23",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore, Benson Boone"
		},
		{
			fecha: {
				dia: "28",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Irlanda",
				ciudad: "Dublin",
				estadio: "Aviva Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "29",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Irlanda",
				ciudad: "Dublin",
				estadio: "Aviva Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "30",
				mes: "Jun",
				"año": "2024"
			},
			lugar: {
				pais: "Irlanda",
				ciudad: "Dublin",
				estadio: "Aviva Stadium"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "4",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Países Bajos",
				ciudad: "Amsterdam",
				estadio: "Johan Cruyff Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "5",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Países Bajos",
				ciudad: "Amsterdam",
				estadio: "Johan Cruyff Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "6",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Países Bajos",
				ciudad: "Amsterdam",
				estadio: "Johan Cruyff Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "9",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Suiza",
				ciudad: "Zurich",
				estadio: "Stadion Letzigrund"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "10",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Suiza",
				ciudad: "Zúrich",
				estadio: "Stadion Letzigrund"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "13",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Italia",
				ciudad: "Milán",
				estadio: "San Siro"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "14",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Italia",
				ciudad: "Milán",
				estadio: "San Siro"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "17",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Gelsenkirchen",
				estadio: "Veltins-Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "18",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Gelsenkirchen",
				estadio: "Veltins-Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "19",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Gelsenkirchen",
				estadio: "Veltins-Arena"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "23",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Hamburgo",
				estadio: "Volksparkstadion"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "24",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Hamburgo",
				estadio: "Volksparkstadion"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "27",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Múnich",
				estadio: "Olympiastadion"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "28",
				mes: "Jul",
				"año": "2024"
			},
			lugar: {
				pais: "Alemania",
				ciudad: "Múnich",
				estadio: "Olympiastadion"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "1",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Polonia",
				ciudad: "Varsovia",
				estadio: "PGE Narodowy"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "2",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Polonia",
				ciudad: "Varsovia",
				estadio: "PGE Narodowy"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "3",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Polonia",
				ciudad: "Varsovia",
				estadio: "PGE Narodowy"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "8",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Austria",
				ciudad: "Viena*",
				estadio: "Ernst Happel Stadion"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "9",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Austria",
				ciudad: "Viena*",
				estadio: "Ernst Happel Stadion"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "10",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Austria",
				ciudad: "Viena*",
				estadio: "Ernst Happel Stadion"
			},
			telonero: "Paramore"
		}
	],
	ahora: [
		{
			fecha: {
				dia: "15",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "16",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "17",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "19",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore"
		},
		{
			fecha: {
				dia: "20",
				mes: "Aug",
				"año": "2024"
			},
			lugar: {
				pais: "Reino Unido",
				ciudad: "Londres",
				estadio: "Estadio de Wembley"
			},
			telonero: "Paramore"
		}
	],
	futuro: [
		{
			fecha: {
				dia: "18",
				mes: "Oct",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Miami",
				estadio: "Hard Rock Stadium"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "19",
				mes: "Oct",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Miami",
				estadio: "Hard Rock Stadium"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "20",
				mes: "Oct",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Miami",
				estadio: "Hard Rock Stadium"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "25",
				mes: "Oct",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Nueva Orleans",
				estadio: "Caesars Superdome"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "26",
				mes: "Oct",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Nueva Orleans",
				estadio: "Caesars Superdome"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "27",
				mes: "Oct",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Nueva Orleans",
				estadio: "Caesars Superdome"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "1",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Indianápolis",
				estadio: "Lucas Oil Stadium"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "2",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Indianápolis",
				estadio: "Lucas Oil Stadium"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "3",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "EE UU",
				ciudad: "Indianápolis",
				estadio: "Lucas Oil Stadium"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "14",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Toronto",
				estadio: "Rogers Centre"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "15",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Toronto",
				estadio: "Rogers Centre"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "16",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Toronto",
				estadio: "Rogers Centre"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "21",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Toronto",
				estadio: "Rogers Centre"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "22",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Toronto",
				estadio: "Rogers Centre"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "23",
				mes: "Nov",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Toronto",
				estadio: "Rogers Centre"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "6",
				mes: "Dic",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Vancouver",
				estadio: "BC Place"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "7",
				mes: "Dic",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Vancouver",
				estadio: "BC Place"
			},
			telonero: "Gracie Abrams"
		},
		{
			fecha: {
				dia: "8",
				mes: "Dic",
				"año": "2024"
			},
			lugar: {
				pais: "Canadá",
				ciudad: "Vancouver",
				estadio: "BC Place"
			},
			telonero: "Gracie Abrams"
		}
	]
};

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$SectionDates = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionDates;
  const eras = ["debut", "fearless", "speakNow", "red", "1989", "reputation", "lover", "folklore", "evermore", "midnights", "TTPD"];
  const { era } = Astro2.props;
  const maxFechasToShow = 6;
  return renderTemplate`${maybeRenderHead()}<article id="Conciertos"${addAttribute(`py-12 px-8 sm:px-10 xl:px-28 space-y-6`, "class")}> ${renderComponent($$result, "Title", $$Title, { "era": era, "titulo": "Fecha de conciertos", "texto": "Estas son todas las fechas The Eras Tour, las pasadas, las actuales, y las futuras." })} <section class="flex flex-col gap-6 self-stretch shrink-0 relative items-center"> ${renderComponent($$result, "Subtitle", $$Subtitle, { "era": era, "titulo": "Fechas Actuales", "texto": null })} <div class="flex flex-row gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> ${concerts.ahora.slice(0, maxFechasToShow).map(({ fecha, lugar, telonero }, index) => {
    const eraFecha = eras[index % eras.length];
    return renderTemplate`${renderComponent($$result, "TarjetaFecha", $$TarjetaFecha, { "estado": "ahora", "eraFecha": eraFecha, "dia": fecha.dia, "mes": fecha.mes, "a\xF1o": fecha.a\u00F1o, "pais": lugar.pais, "ciudad": lugar.ciudad, "estadio": lugar.estadio, "telonero": telonero })}`;
  })} </div> ${renderComponent($$result, "Subtitle", $$Subtitle, { "era": era, "titulo": "Proximas Fechas", "texto": null })} <div class="flex flex-row gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> ${concerts.futuro.slice(0, maxFechasToShow).map(({ fecha, lugar, telonero }, index) => {
    const eraFecha = eras[index % eras.length];
    return renderTemplate`${renderComponent($$result, "TarjetaFecha", $$TarjetaFecha, { "estado": "futuro", "eraFecha": eraFecha, "dia": fecha.dia, "mes": fecha.mes, "a\xF1o": fecha.a\u00F1o, "pais": lugar.pais, "ciudad": lugar.ciudad, "estadio": lugar.estadio, "telonero": telonero })}`;
  })} </div> <button id="btn-ver-fut"${addAttribute([
    "px-6 rounded-[100px] flex flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "bg-debut-600 hover:bg-debut-500": era === "debut",
      "bg-fearless-600 hover:bg-fearless-500": era === "fearless",
      "bg-speakNow-600 hover:bg-speakNow-500": era === "speakNow",
      "bg-red-600 hover:bg-red-500": era === "red",
      "bg-1989-600 hover:bg-1989-500": era === "1989",
      "bg-reputation-600 hover:bg-reputation-500": era === "reputation",
      "bg-lover-600 hover:bg-lover-500": era === "lover",
      "bg-folklore-600 hover:bg-folklore-500": era === "folklore",
      "bg-evermore-600 hover:bg-evermore-500": era === "evermore",
      "bg-midnights-600 hover:bg-midnights-500": era === "midnights",
      "bg-TTPD-600 hover:bg-TTPD-500": era === "TTPD",
      "bg-mashup-600 hover:bg-mashup-500": era === "mashup"
    }
  ], "class:list")}> <p${addAttribute([
    "cursor-pointer text-center text-title-small relative flex items-center justify-center",
    {
      "text-debut-50": era === "debut",
      "text-fearless-50": era === "fearless",
      "text-speakNow-50": era === "speakNow",
      "text-red-50": era === "red",
      "text-1989-50": era === "1989",
      "text-reputation-50": era === "reputation",
      "text-lover-50": era === "lover",
      "text-folklore-50": era === "folklore",
      "text-evermore-50": era === "evermore",
      "text-midnights-50": era === "midnights",
      "text-TTPD-50": era === "TTPD",
      "text-mashup-50": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)">
Ver Mas
</p> </button> <div id="masFechas-fut" class="hidden gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> <div class="flex flex-row gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> ${concerts.futuro.slice(maxFechasToShow).map(({ fecha, lugar, telonero }, index) => {
    const eraFecha = eras[index % eras.length];
    return renderTemplate`${renderComponent($$result, "TarjetaFecha", $$TarjetaFecha, { "estado": "futuro", "eraFecha": eraFecha, "dia": fecha.dia, "mes": fecha.mes, "a\xF1o": fecha.a\u00F1o, "pais": lugar.pais, "ciudad": lugar.ciudad, "estadio": lugar.estadio, "telonero": telonero })}`;
  })} </div> </div> <button id="btn-ocul-fut"${addAttribute([
    "hidden px-6 rounded-[100px] flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "bg-debut-600 hover:bg-debut-500": era === "debut",
      "bg-fearless-600 hover:bg-fearless-500": era === "fearless",
      "bg-speakNow-600 hover:bg-speakNow-500": era === "speakNow",
      "bg-red-600 hover:bg-red-500": era === "red",
      "bg-1989-600 hover:bg-1989-500": era === "1989",
      "bg-reputation-600 hover:bg-reputation-500": era === "reputation",
      "bg-lover-600 hover:bg-lover-500": era === "lover",
      "bg-folklore-600 hover:bg-folklore-500": era === "folklore",
      "bg-evermore-600 hover:bg-evermore-500": era === "evermore",
      "bg-midnights-600 hover:bg-midnights-500": era === "midnights",
      "bg-TTPD-600 hover:bg-TTPD-500": era === "TTPD",
      "bg-mashup-600 hover:bg-mashup-500": era === "mashup"
    }
  ], "class:list")}> <p${addAttribute([
    "cursor-pointer text-center text-title-small relative flex items-center justify-center",
    {
      "text-debut-50": era === "debut",
      "text-fearless-50": era === "fearless",
      "text-speakNow-50": era === "speakNow",
      "text-red-50": era === "red",
      "text-1989-50": era === "1989",
      "text-reputation-50": era === "reputation",
      "text-lover-50": era === "lover",
      "text-folklore-50": era === "folklore",
      "text-evermore-50": era === "evermore",
      "text-midnights-50": era === "midnights",
      "text-TTPD-50": era === "TTPD",
      "text-mashup-50": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)">
Ocultar
</p> </button> ${renderComponent($$result, "Subtitle", $$Subtitle, { "era": era, "titulo": "Fechas Pasadas", "texto": null })} <div class="flex flex-row gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> ${concerts.pasados.slice(0, maxFechasToShow).map(({ fecha, lugar, telonero }, index) => {
    const eraFecha = eras[index % eras.length];
    return renderTemplate`${renderComponent($$result, "TarjetaFecha", $$TarjetaFecha, { "estado": "pasado", "eraFecha": eraFecha, "dia": fecha.dia, "mes": fecha.mes, "a\xF1o": fecha.a\u00F1o, "pais": lugar.pais, "ciudad": lugar.ciudad, "estadio": lugar.estadio, "telonero": telonero })}`;
  })} </div> <button id="btn-ver-past"${addAttribute([
    "px-6 rounded-[100px] flex flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "bg-debut-600 hover:bg-debut-500": era === "debut",
      "bg-fearless-600 hover:bg-fearless-500": era === "fearless",
      "bg-speakNow-600 hover:bg-speakNow-500": era === "speakNow",
      "bg-red-600 hover:bg-red-500": era === "red",
      "bg-1989-600 hover:bg-1989-500": era === "1989",
      "bg-reputation-600 hover:bg-reputation-500": era === "reputation",
      "bg-lover-600 hover:bg-lover-500": era === "lover",
      "bg-folklore-600 hover:bg-folklore-500": era === "folklore",
      "bg-evermore-600 hover:bg-evermore-500": era === "evermore",
      "bg-midnights-600 hover:bg-midnights-500": era === "midnights",
      "bg-TTPD-600 hover:bg-TTPD-500": era === "TTPD",
      "bg-mashup-600 hover:bg-mashup-500": era === "mashup"
    }
  ], "class:list")}> <p${addAttribute([
    "cursor-pointer text-center text-title-small relative flex items-center justify-center",
    {
      "text-debut-50": era === "debut",
      "text-fearless-50": era === "fearless",
      "text-speakNow-50": era === "speakNow",
      "text-red-50": era === "red",
      "text-1989-50": era === "1989",
      "text-reputation-50": era === "reputation",
      "text-lover-50": era === "lover",
      "text-folklore-50": era === "folklore",
      "text-evermore-50": era === "evermore",
      "text-midnights-50": era === "midnights",
      "text-TTPD-50": era === "TTPD",
      "text-mashup-50": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)">
Ver Mas
</p> </button> <div id="masFechas-past" class="hidden gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> <div class="flex flex-row gap-6 items-start justify-start flex-wrap self-stretch shrink-0 h-min relative"> ${concerts.pasados.slice(maxFechasToShow).map(({ fecha, lugar, telonero }, index) => {
    const eraFecha = eras[index % eras.length];
    return renderTemplate`${renderComponent($$result, "TarjetaFecha", $$TarjetaFecha, { "estado": "pasado", "eraFecha": eraFecha, "dia": fecha.dia, "mes": fecha.mes, "a\xF1o": fecha.a\u00F1o, "pais": lugar.pais, "ciudad": lugar.ciudad, "estadio": lugar.estadio, "telonero": telonero })}`;
  })} </div> </div> <button id="btn-ocul-past"${addAttribute([
    "hidden px-6 rounded-[100px] flex-col gap-2 items-center justify-center shrink-0 h-10 relative overflow-hidden",
    {
      "bg-debut-600 hover:bg-debut-500": era === "debut",
      "bg-fearless-600 hover:bg-fearless-500": era === "fearless",
      "bg-speakNow-600 hover:bg-speakNow-500": era === "speakNow",
      "bg-red-600 hover:bg-red-500": era === "red",
      "bg-1989-600 hover:bg-1989-500": era === "1989",
      "bg-reputation-600 hover:bg-reputation-500": era === "reputation",
      "bg-lover-600 hover:bg-lover-500": era === "lover",
      "bg-folklore-600 hover:bg-folklore-500": era === "folklore",
      "bg-evermore-600 hover:bg-evermore-500": era === "evermore",
      "bg-midnights-600 hover:bg-midnights-500": era === "midnights",
      "bg-TTPD-600 hover:bg-TTPD-500": era === "TTPD",
      "bg-mashup-600 hover:bg-mashup-500": era === "mashup"
    }
  ], "class:list")}> <p${addAttribute([
    "cursor-pointer text-center text-title-small relative flex items-center justify-center",
    {
      "text-debut-50": era === "debut",
      "text-fearless-50": era === "fearless",
      "text-speakNow-50": era === "speakNow",
      "text-red-50": era === "red",
      "text-1989-50": era === "1989",
      "text-reputation-50": era === "reputation",
      "text-lover-50": era === "lover",
      "text-folklore-50": era === "folklore",
      "text-evermore-50": era === "evermore",
      "text-midnights-50": era === "midnights",
      "text-TTPD-50": era === "TTPD",
      "text-mashup-50": era === "mashup"
    }
  ], "class:list")} style="letter-spacing: var(--title-small-letter-spacing, 0.1px)">
Ocultar
</p> </button> </section> </article> <!-- creo que ya se como hacer para que no se muestren las fechas --> `;
}, "D:/Matias/Facultad/Programacion/prueba2/src/sections/SectionDates.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const era = "midnights";
  return renderTemplate(_a || (_a = __template(["", ` <!-- <script>
	// Ejecutar el script despu\xE9s de que el DOM est\xE9 cargado
	document.addEventListener('DOMContentLoaded', () => {
		// Seleccionar todos los botones con el ID "Ant"
		const buttons = document.querySelectorAll('button#Ant');

		buttons.forEach((button) => {
			button.addEventListener('click', () => {
			console.log('Bot\xF3n clickeado:', button);

			// Obtener el elemento con el ID "Inicio"
			const inicioElement = document.getElementById('Inicio');
			if (inicioElement) {
				console.log('Elemento Inicio encontrado:', inicioElement);
				inicioElement.setAttribute('era', 'debut');
			} else {
				console.error('Elemento Inicio no encontrado');
			}
			});
		});
	});
<\/script> -->`])), renderComponent($$result, "Layout", $$Layout, { "title": "Swifties Eras Tour", "era": era }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroImage", $$HeroImage, { "era": era, "boton": true, "pagAnt": "/mi-repo/eras/05-1989", "pagSig": "/mi-repo/fearlessversion" })} ${renderComponent($$result2, "SectionCanciones", $$SectionCanciones, { "era": era })} ${renderComponent($$result2, "SectionDates", $$SectionDates, { "era": era })} ${renderComponent($$result2, "ButtonToUp", $$ButtonToUp, { "era": era })} ` }));
}, "D:/Matias/Facultad/Programacion/prueba2/src/pages/index.astro", void 0);

const $$file = "D:/Matias/Facultad/Programacion/prueba2/src/pages/index.astro";
const $$url = "/mi-repo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
