import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderTransition, d as renderComponent } from './astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import { a as $$ButtonPrimario } from './Layout_oqMgRqbP.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https:matiassolisschneeberger.github.io");
const $$ChevronLeftSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ChevronLeftSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-chevron-left", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 6l-6 6l6 6"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/ChevronLeftSVG.astro", void 0);

const $$Astro$1 = createAstro("https:matiassolisschneeberger.github.io");
const $$ChevronRightSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ChevronRightSVG;
  const { era } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-chevron-right", [
    {
      "stroke-debut-100": era === "debut",
      "stroke-fearless-100": era === "fearless",
      "stroke-speakNow-100": era === "speakNow",
      "stroke-red-100": era === "red",
      "stroke-1989-100": era === "1989",
      "stroke-reputation-100": era === "reputation",
      "stroke-lover-100": era === "lover",
      "stroke-folklore-100": era === "folklore",
      "stroke-evermore-100": era === "evermore",
      "stroke-midnights-100": era === "midnights",
      "stroke-TTPD-100": era === "TTPD",
      "stroke-mashup-100": era === "mashup"
    }
  ]], "class:list")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> </svg>`;
}, "/home/user/mi-repo/src/components/svg/ChevronRightSVG.astro", void 0);

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const { era, boton, flechas, pagAnt, pagSig } = Astro2.props;
  const albumes = {
    debut: "Taylor Swift",
    fearless: "Fearless",
    speakNow: "Speak Now",
    red: "Red",
    "1989": "1989",
    reputation: "Reputation",
    lover: "Lover",
    folklore: "Folklore",
    evermore: "Evermore",
    midnights: "Midnights",
    TTPD: "The Tortured Poets Department",
    mashup: "Suprise Songs"
  };
  const album = albumes[era] || "";
  return renderTemplate`${maybeRenderHead()}<div id="Inicio"${addAttribute([
    "px-14 py-32 sm:py-40 sm:px-32 flex flex-col items-center justify-center self-stretch shrink-0 relative space-y-8 bg-cover bg-center w-full",
    {
      "bg-fondos-debut bg-left": era === "debut",
      "bg-fondos-fearless": era === "fearless",
      "bg-fondos-speakNow": era === "speakNow",
      "bg-fondos-red": era === "red",
      "bg-fondos-1989": era === "1989",
      "bg-fondos-reputation": era === "reputation",
      "bg-fondos-lover": era === "lover",
      "bg-fondos-folklore": era === "folklore",
      "bg-fondos-evermore": era === "evermore",
      "bg-fondos-midnights": era === "midnights",
      "bg-fondos-TTPD": era === "TTPD",
      "bg-fondos-mashup bg-left": era === "mashup"
    },
    {
      "py-28": boton === false
    }
  ], "class:list")}${addAttribute(renderTransition($$result, "a655uxbg", "", "hero-image"), "data-astro-transition-scope")}> <!-- derechos de las imagenes  --> <p${addAttribute([
    "text-center text-body-large absolute left-[30px] bottom-[30px]",
    {
      "text-debut-400": era === "debut",
      "text-fearless-400": era === "fearless",
      "text-speakNow-400": era === "speakNow",
      "text-red-400": era === "red",
      "text-1989-400": era === "1989",
      "text-reputation-400": era === "reputation",
      "text-lover-400": era === "lover",
      "text-folklore-400": era === "folklore",
      "text-evermore-400": era === "evermore",
      "text-midnights-400": era === "midnights",
      "text-TTPD-400": era === "TTPD",
      "text-mashup-400": era === "mashup"
    },
    {
      hidden: era === "TTPD"
    }
  ], "class:list")}>
© Disney. All rights reserved.
</p> <p${addAttribute([
    "text-center text-body-large absolute left-[30px] bottom-[30px]",
    {
      "text-debut-400": era === "debut",
      "text-fearless-400": era === "fearless",
      "text-speakNow-400": era === "speakNow",
      "text-red-400": era === "red",
      "text-1989-400": era === "1989",
      "text-reputation-400": era === "reputation",
      "text-lover-400": era === "lover",
      "text-folklore-400": era === "folklore",
      "text-evermore-400": era === "evermore",
      "text-midnights-400": era === "midnights",
      "text-TTPD-400": era === "TTPD",
      "text-mashup-400": era === "mashup"
    },
    {
      hidden: era !== "TTPD"
    }
  ], "class:list")}>
© Taylor Swift, from her official YouTube channel.
</p> <!-- Titulo --> <div class="flex flex-col gap-space-200 items-center justify-center shrink-0 relative space-y-2 overflow-hidden"> <div${addAttribute([
    "text-center text-display-small sm:text-display-large relative self-stretch",
    {
      "text-debut-400": era === "debut",
      "text-fearless-400": era === "fearless",
      "text-speakNow-400": era === "speakNow",
      "text-red-400": era === "red",
      "text-1989-400": era === "1989",
      "text-reputation-400": era === "reputation",
      "text-lover-400": era === "lover",
      "text-folklore-400": era === "folklore",
      "text-evermore-400": era === "evermore",
      "text-midnights-400": era === "midnights",
      "text-TTPD-400": era === "TTPD",
      "text-mashup-400": era === "mashup"
    }
  ], "class:list")} , style="letter-spacing: var(--display-large-letter-spacing, -1px)">
Swifties Eras Tour
</div> <div${addAttribute(`text-center text-headline-small relative self-stretch flex items-center justify-center capitalize text-${era}-400`, "class")} , style="mix-blend-mode: color-dodge"> ${album} </div> </div> <a id="btn-izq"${addAttribute([
    "absolute left-4 y-1/2",
    {
      hidden: flechas === false
    }
  ], "class:list")}${addAttribute(pagAnt, "href")}> ${renderComponent($$result, "ArrowLeft", $$ChevronLeftSVG, { "era": era })} </a> <a id="btn-der"${addAttribute([
    "absolute right-4 y-1/2",
    {
      hidden: flechas === false
    }
  ], "class:list")}${addAttribute(pagSig, "href")}> ${renderComponent($$result, "ArrowRight", $$ChevronRightSVG, { "era": era })} </a> <!-- botones CTA --> <div${addAttribute([
    "flex-row gap-space-400 items-center justify-center shrink-0 relative space-x-4 hidden",
    {
      "sm:flex": boton === true
    }
  ], "class:list")}> ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "#Canciones", "icono": null }, { "default": ($$result2) => renderTemplate`
Canciones
` })} ${renderComponent($$result, "ButtonPrimario", $$ButtonPrimario, { "era": era, "href": "#Conciertos", "icono": null }, { "default": ($$result2) => renderTemplate`
Conciertos
` })} </div> </div>`;
}, "/home/user/mi-repo/src/sections/HeroImage.astro", "self");

export { $$HeroImage as $ };
