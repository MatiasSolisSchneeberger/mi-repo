/* empty css                                         */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import { $ as $$Titulo, b as $$Layout } from '../../chunks/Layout_oqMgRqbP.mjs';
import { $ as $$StarSVG, a as $$CircleXSVGCopy, b as $$CalendarSVG, c as $$CircleCaretRightSVG } from '../../chunks/CircleXSVG copy_BGYoAe3v.mjs';
import { $ as $$MusicSVG } from '../../chunks/MusicSVG_un2stqHt.mjs';
import { e as eras } from '../../chunks/songs_BYCJa7wA.mjs';
import { $ as $$HeroImage } from '../../chunks/HeroImage_DdSik-L_.mjs';
import { $ as $$MapPinSVG, a as $$MicrofonoSvg } from '../../chunks/MicrofonoSvg_CY1dD72R.mjs';
import { $ as $$SubTitulo } from '../../chunks/SubTitulo_CW7WNb9W.mjs';
export { renderers } from '../../renderers.mjs';

const $$051989 = createComponent(($$result, $$props, $$slots) => {
  const erasArreglo = [
    "debut",
    "fearless",
    "speakNow",
    "red",
    "1989",
    "reputation",
    "lover",
    "folklore",
    "evermore",
    "midnights",
    "TTPD",
    "mashup"
  ];
  let era = erasArreglo[4];
  const eraData = eras.find((e) => e.albums === era);
  if (!eraData) return null;
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
  const album = albumes[era];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${era} | Swifties Eras Tour`, "era": era }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-12 px-8 md:px-32 space-y-6 flex flex-col gap-2.5 gap-y-0 items-start justify-start self-stretch shrink-0 relative"> <div class="w-full rounded-3xl overflow-hidden"> ${renderComponent($$result2, "HeroImage", $$HeroImage, { "era": era, "flechas": true, "boton": false, "pagAnt": eraData?.anterior, "pagSig": eraData?.siguiente })} </div> ${renderComponent($$result2, "Titulo", $$Titulo, { "titulo": `Canciones de ${album}`, "era": era }, { "default": ($$result3) => renderTemplate`
Aquí encontrarás <strong>todas las canciones</strong> de este disco, cada una
			con su propia historia en "The Eras Tour". Algunas ya han sido interpretadas
			en vivo, otras forman parte del setlist regular, y algunas todavía están esperando
			su momento. En cada tarjeta, podrás ver detalles importantes: <strong>la fecha</strong> en que fue cantada,<strong>el instrumento</strong> que la acompañó <em>(¿guitarra o piano?)</em>, y el lugar donde tuvo lugar la actuación. Además, si hubo un <strong>mashup</strong> épico o <strong>un invitado sorpresa especial</strong> , también estará indicado.
			¡Descubre todos los detalles y revive los momentos más icónicos del tour!
` })} <section class="flex w-full gap-6 items-start justify-center flex-wrap content-start self-stretch shrink-0 relative"> ${eraData?.canciones.map(({ title, info, estado }, index) => {
    return renderTemplate`<div${addAttribute([
      "rounded-3xl p-3 flex flex-col gap-2.5 items-center justify-start relative overflow-hidden w-full max-w-sm",
      {
        "bg-debut-400": era === "debut",
        "bg-fearless-400": era === "fearless",
        "bg-speakNow-400": era === "speakNow",
        "bg-red-400": era === "red",
        "bg-1989-400": era === "1989",
        "bg-reputation-400": era === "reputation",
        "bg-lover-400": era === "lover",
        "bg-folklore-400": era === "folklore",
        "bg-evermore-400": era === "evermore",
        "bg-midnights-400": era === "midnights",
        "bg-TTPD-400": era === "TTPD",
        "bg-mashup-400": era === "mashup"
      }
    ], "class:list")}> <header${addAttribute([
      "w-full rounded-xl p-3 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative",
      {
        "bg-debut-800": era === "debut",
        "bg-fearless-800": era === "fearless",
        "bg-speakNow-800": era === "speakNow",
        "bg-red-800": era === "red",
        "bg-1989-800": era === "1989",
        "bg-reputation-800": era === "reputation",
        "bg-lover-800": era === "lover",
        "bg-folklore-800": era === "folklore",
        "bg-evermore-800": era === "evermore",
        "bg-midnights-800": era === "midnights",
        "bg-TTPD-800": era === "TTPD",
        "bg-mashup-800": era === "mashup"
      }
    ], "class:list")}> <h4${addAttribute([
      "w-full text-pretty text-center text-title-large relative flex-1",
      {
        "text-debut-100": era === "debut",
        "text-fearless-100": era === "fearless",
        "text-speakNow-100": era === "speakNow",
        "text-red-100": era === "red",
        "text-1989-100": era === "1989",
        "text-reputation-100": era === "reputation",
        "text-lover-100": era === "lover",
        "text-folklore-100": era === "folklore",
        "text-evermore-100": era === "evermore",
        "text-midnights-100": era === "midnights",
        "text-TTPD-100": era === "TTPD",
        "text-mashup-100": era === "mashup"
      }
    ], "class:list")}> ${`${index + 1}) ${title} `}${" "} ${info.length > 1 && renderTemplate`<span>${`(x${info[info.length - 1]?.tipo})`}</span>`} </h4> </header> <div${addAttribute([
      " px-2 py-2 w-full gap-2 rounded-xl items-center justify-center self-center shrink-0 relative overflow-hidden",
      estado === "Setlist" ? "flex flex-row" : "hidden",
      {
        "bg-debut-600": era === "debut",
        "bg-fearless-600": era === "fearless",
        "bg-speakNow-600": era === "speakNow",
        "bg-red-600": era === "red",
        "bg-1989-600": era === "1989",
        "bg-reputation-600": era === "reputation",
        "bg-lover-600": era === "lover",
        "bg-folklore-600": era === "folklore",
        "bg-evermore-600": era === "evermore",
        "bg-midnights-600": era === "midnights",
        "bg-TTPD-600": era === "TTPD",
        "bg-mashup-600": era === "mashup"
      }
    ], "class:list")}> ${renderComponent($$result2, "StarSVG", $$StarSVG, { "era": era })} <p${addAttribute([
      "text-left text-title-medium relative",
      {
        "text-debut-100": era === "debut",
        "text-fearless-100": era === "fearless",
        "text-speakNow-100": era === "speakNow",
        "text-red-100": era === "red",
        "text-1989-100": era === "1989",
        "text-reputation-100": era === "reputation",
        "text-lover-100": era === "lover",
        "text-folklore-100": era === "folklore",
        "text-evermore-100": era === "evermore",
        "text-midnights-100": era === "midnights",
        "text-TTPD-100": era === "TTPD",
        "text-mashup-100": era === "mashup"
      }
    ], "class:list")}>
Set list
</p> </div> <div${addAttribute([
      " px-2 py-2 w-full gap-2 rounded-xl items-center justify-center self-center shrink-0 relative overflow-hidden",
      estado === "No Cantado" ? "flex flex-row" : "hidden",
      {
        "bg-debut-600": era === "debut",
        "bg-fearless-600": era === "fearless",
        "bg-speakNow-600": era === "speakNow",
        "bg-red-600": era === "red",
        "bg-1989-600": era === "1989",
        "bg-reputation-600": era === "reputation",
        "bg-lover-600": era === "lover",
        "bg-folklore-600": era === "folklore",
        "bg-evermore-600": era === "evermore",
        "bg-midnights-600": era === "midnights",
        "bg-TTPD-600": era === "TTPD",
        "bg-mashup-600": era === "mashup"
      }
    ], "class:list")}> ${renderComponent($$result2, "CircleXSVGCopy", $$CircleXSVGCopy, { "era": era })} <p${addAttribute([
      "text-left text-title-medium relative",
      {
        "text-debut-100": era === "debut",
        "text-fearless-100": era === "fearless",
        "text-speakNow-100": era === "speakNow",
        "text-red-100": era === "red",
        "text-1989-100": era === "1989",
        "text-reputation-100": era === "reputation",
        "text-lover-100": era === "lover",
        "text-folklore-100": era === "folklore",
        "text-evermore-100": era === "evermore",
        "text-midnights-100": era === "midnights",
        "text-TTPD-100": era === "TTPD",
        "text-mashup-100": era === "mashup"
      }
    ], "class:list")}>
Sin Cantar Todavia
</p> </div> ${info.map(
      ({ fecha, tipo, cantSorp, mashupCon, instrumento, lugar }) => {
        return renderTemplate`<div${addAttribute([
          "rounded-xl flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative overflow-hidden",
          { hidden: instrumento === null },
          {
            "bg-debut-200": era === "debut",
            "bg-fearless-200": era === "fearless",
            "bg-speakNow-200": era === "speakNow",
            "bg-red-200": era === "red",
            "bg-1989-200": era === "1989",
            "bg-reputation-200": era === "reputation",
            "bg-lover-200": era === "lover",
            "bg-folklore-200": era === "folklore",
            "bg-evermore-200": era === "evermore",
            "bg-midnights-200": era === "midnights",
            "bg-TTPD-200": era === "TTPD",
            "bg-mashup-200": era === "mashup"
          }
        ], "class:list")}> <div${addAttribute([
          " flex items-center justify-center self-stretch relative",
          {
            "bg-debut-600": era === "debut",
            "bg-fearless-600": era === "fearless",
            "bg-speakNow-600": era === "speakNow",
            "bg-red-600": era === "red",
            "bg-1989-600": era === "1989",
            "bg-reputation-600": era === "reputation",
            "bg-lover-600": era === "lover",
            "bg-folklore-600": era === "folklore",
            "bg-evermore-600": era === "evermore",
            "bg-midnights-600": era === "midnights",
            "bg-TTPD-600": era === "TTPD",
            "bg-mashup-600": era === "mashup"
          }
        ], "class:list")}> <p${addAttribute([
          "text-pretty text-center text-title-medium relative -rotate-90",
          {
            "text-debut-100": era === "debut",
            "text-fearless-100": era === "fearless",
            "text-speakNow-100": era === "speakNow",
            "text-red-100": era === "red",
            "text-1989-100": era === "1989",
            "text-reputation-100": era === "reputation",
            "text-lover-100": era === "lover",
            "text-folklore-100": era === "folklore",
            "text-evermore-100": era === "evermore",
            "text-midnights-100": era === "midnights",
            "text-TTPD-100": era === "TTPD",
            "text-mashup-100": era === "mashup"
          }
        ], "class:list")}>
Dia ${tipo} </p> </div> <div class="px-2 py-2.5 flex flex-col gap-2 items-start justify-center self-stretch flex-1 relative"> <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"> ${renderComponent($$result2, "CalendarSVG", $$CalendarSVG, { "era": era })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}> ${fecha?.dia}/${fecha?.mes}/${fecha?.a\u00F1o} </p> </div> <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"> ${renderComponent($$result2, "MapPinSVG", $$MapPinSVG, { "era": era, "estado": "ahora" })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}> ${lugar} </p> </div> <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"> ${renderComponent($$result2, "CicleCaretRightSVG", $$CircleCaretRightSVG, { "era": era })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")} style="letter-spacing: var(--body-small-letter-spacing, 0.4px)"> ${instrumento} </p> </div> <div${addAttribute([
          "flex flex-row gap-2.5 items-center justify-start shrink-0 relative",
          { hidden: cantSorp === null }
        ], "class:list")}> ${renderComponent($$result2, "MicrofonoSvg", $$MicrofonoSvg, { "era": era, "estado": "ahora" })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}> ${cantSorp} </p> </div> <div${addAttribute([
          "flex flex-row gap-2.5 items-center justify-start shrink-0 relative",
          { hidden: mashupCon === null }
        ], "class:list")}> ${renderComponent($$result2, "MusicSVG", $$MusicSVG, { "era": era })} <p${addAttribute([
          " text-left text-body-large relative text-pretty",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}>
Mashup con: ${mashupCon} </p> </div> </div> </div>`;
      }
    )} </div>`;
  })} ${eraData?.extras.length > 0 && renderTemplate`${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "era": era, "titulo": "Canciones Extras" }, { "default": ($$result3) => renderTemplate`
Estas son las <strong> que no forman parte del disco original</strong>, pero que fueron lanzadas como <strong>singles</strong> o en <strong>colaboraciones</strong> durante la misma época. Aunque no están en el álbum principal, tienen una fuerte conexión con esta era y son piezas clave del legado musical que Taylor Swift construyó en ese momento.
` })}`} ${eraData?.extras.map(({ title, info, estado }, index) => {
    return renderTemplate`<div${addAttribute([
      "rounded-3xl p-3 flex flex-col gap-2.5 items-center justify-start relative overflow-hidden w-full max-w-sm",
      {
        "bg-debut-400": era === "debut",
        "bg-fearless-400": era === "fearless",
        "bg-speakNow-400": era === "speakNow",
        "bg-red-400": era === "red",
        "bg-1989-400": era === "1989",
        "bg-reputation-400": era === "reputation",
        "bg-lover-400": era === "lover",
        "bg-folklore-400": era === "folklore",
        "bg-evermore-400": era === "evermore",
        "bg-midnights-400": era === "midnights",
        "bg-TTPD-400": era === "TTPD",
        "bg-mashup-400": era === "mashup"
      }
    ], "class:list")}> <header${addAttribute([
      "w-full rounded-xl p-3 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative",
      {
        "bg-debut-800": era === "debut",
        "bg-fearless-800": era === "fearless",
        "bg-speakNow-800": era === "speakNow",
        "bg-red-800": era === "red",
        "bg-1989-800": era === "1989",
        "bg-reputation-800": era === "reputation",
        "bg-lover-800": era === "lover",
        "bg-folklore-800": era === "folklore",
        "bg-evermore-800": era === "evermore",
        "bg-midnights-800": era === "midnights",
        "bg-TTPD-800": era === "TTPD",
        "bg-mashup-800": era === "mashup"
      }
    ], "class:list")}> <h4${addAttribute([
      "w-full text-pretty text-center text-title-large relative flex-1",
      {
        "text-debut-100": era === "debut",
        "text-fearless-100": era === "fearless",
        "text-speakNow-100": era === "speakNow",
        "text-red-100": era === "red",
        "text-1989-100": era === "1989",
        "text-reputation-100": era === "reputation",
        "text-lover-100": era === "lover",
        "text-folklore-100": era === "folklore",
        "text-evermore-100": era === "evermore",
        "text-midnights-100": era === "midnights",
        "text-TTPD-100": era === "TTPD",
        "text-mashup-100": era === "mashup"
      }
    ], "class:list")}> ${`${index + 1}) ${title} `}${" "} ${info.length > 1 && renderTemplate`<span>${`(x${info[info.length - 1]?.tipo})`}</span>`} </h4> </header> <div${addAttribute([
      "px-2 py-2 w-full gap-2 rounded-xl items-center justify-center self-center shrink-0 relative overflow-hidden",
      estado === "Setlist" ? "flex flex-row" : "hidden",
      {
        "bg-debut-600": era === "debut",
        "bg-fearless-600": era === "fearless",
        "bg-speakNow-600": era === "speakNow",
        "bg-red-600": era === "red",
        "bg-1989-600": era === "1989",
        "bg-reputation-600": era === "reputation",
        "bg-lover-600": era === "lover",
        "bg-folklore-600": era === "folklore",
        "bg-evermore-600": era === "evermore",
        "bg-midnights-600": era === "midnights",
        "bg-TTPD-600": era === "TTPD",
        "bg-mashup-600": era === "mashup"
      }
    ], "class:list")}> ${renderComponent($$result2, "StarSVG", $$StarSVG, { "era": era })} <p${addAttribute([
      "text-left text-title-medium relative",
      {
        "text-debut-100": era === "debut",
        "text-fearless-100": era === "fearless",
        "text-speakNow-100": era === "speakNow",
        "text-red-100": era === "red",
        "text-1989-100": era === "1989",
        "text-reputation-100": era === "reputation",
        "text-lover-100": era === "lover",
        "text-folklore-100": era === "folklore",
        "text-evermore-100": era === "evermore",
        "text-midnights-100": era === "midnights",
        "text-TTPD-100": era === "TTPD",
        "text-mashup-100": era === "mashup"
      }
    ], "class:list")}>
Set list
</p> </div> <div${addAttribute([
      "px-2 py-2 w-full gap-2 rounded-xl items-center justify-center self-center shrink-0 relative overflow-hidden",
      estado === "No Cantado" ? "flex flex-row" : "hidden",
      {
        "bg-debut-600": era === "debut",
        "bg-fearless-600": era === "fearless",
        "bg-speakNow-600": era === "speakNow",
        "bg-red-600": era === "red",
        "bg-1989-600": era === "1989",
        "bg-reputation-600": era === "reputation",
        "bg-lover-600": era === "lover",
        "bg-folklore-600": era === "folklore",
        "bg-evermore-600": era === "evermore",
        "bg-midnights-600": era === "midnights",
        "bg-TTPD-600": era === "TTPD",
        "bg-mashup-600": era === "mashup"
      }
    ], "class:list")}> ${renderComponent($$result2, "CircleXSVGCopy", $$CircleXSVGCopy, { "era": era })} <p${addAttribute([
      "text-left text-title-medium relative",
      {
        "text-debut-100": era === "debut",
        "text-fearless-100": era === "fearless",
        "text-speakNow-100": era === "speakNow",
        "text-red-100": era === "red",
        "text-1989-100": era === "1989",
        "text-reputation-100": era === "reputation",
        "text-lover-100": era === "lover",
        "text-folklore-100": era === "folklore",
        "text-evermore-100": era === "evermore",
        "text-midnights-100": era === "midnights",
        "text-TTPD-100": era === "TTPD",
        "text-mashup-100": era === "mashup"
      }
    ], "class:list")}>
Sin Cantar Todavia
</p> </div> ${info.map(
      ({ fecha, tipo, cantSorp, mashupCon, instrumento, lugar }) => {
        return renderTemplate`<div${addAttribute([
          "rounded-xl flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative overflow-hidden",
          { hidden: instrumento === null },
          {
            "bg-debut-200": era === "debut",
            "bg-fearless-200": era === "fearless",
            "bg-speakNow-200": era === "speakNow",
            "bg-red-200": era === "red",
            "bg-1989-200": era === "1989",
            "bg-reputation-200": era === "reputation",
            "bg-lover-200": era === "lover",
            "bg-folklore-200": era === "folklore",
            "bg-evermore-200": era === "evermore",
            "bg-midnights-200": era === "midnights",
            "bg-TTPD-200": era === "TTPD",
            "bg-mashup-200": era === "mashup"
          }
        ], "class:list")}> <div${addAttribute([
          " flex items-center justify-center self-stretch relative",
          {
            "bg-debut-600": era === "debut",
            "bg-fearless-600": era === "fearless",
            "bg-speakNow-600": era === "speakNow",
            "bg-red-600": era === "red",
            "bg-1989-600": era === "1989",
            "bg-reputation-600": era === "reputation",
            "bg-lover-600": era === "lover",
            "bg-folklore-600": era === "folklore",
            "bg-evermore-600": era === "evermore",
            "bg-midnights-600": era === "midnights",
            "bg-TTPD-600": era === "TTPD",
            "bg-mashup-600": era === "mashup"
          }
        ], "class:list")}> <p${addAttribute([
          "text-pretty text-center text-title-medium relative -rotate-90",
          {
            "text-debut-100": era === "debut",
            "text-fearless-100": era === "fearless",
            "text-speakNow-100": era === "speakNow",
            "text-red-100": era === "red",
            "text-1989-100": era === "1989",
            "text-reputation-100": era === "reputation",
            "text-lover-100": era === "lover",
            "text-folklore-100": era === "folklore",
            "text-evermore-100": era === "evermore",
            "text-midnights-100": era === "midnights",
            "text-TTPD-100": era === "TTPD",
            "text-mashup-100": era === "mashup"
          }
        ], "class:list")}>
Dia ${tipo} </p> </div> <div class="px-2 py-2.5 flex flex-col gap-2 items-start justify-center self-stretch flex-1 relative"> <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"> ${renderComponent($$result2, "CalendarSVG", $$CalendarSVG, { "era": era })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}> ${fecha?.dia}/${fecha?.mes}/${fecha?.a\u00F1o} </p> </div> <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"> ${renderComponent($$result2, "MapPinSVG", $$MapPinSVG, { "era": era, "estado": "ahora" })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}> ${lugar} </p> </div> <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"> ${renderComponent($$result2, "CicleCaretRightSVG", $$CircleCaretRightSVG, { "era": era })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")} style="letter-spacing: var(--body-small-letter-spacing, 0.4px)"> ${instrumento} </p> </div> <div${addAttribute([
          "flex flex-row gap-2.5 items-center justify-start shrink-0 relative",
          { hidden: cantSorp === null }
        ], "class:list")}> ${renderComponent($$result2, "MicrofonoSvg", $$MicrofonoSvg, { "era": era, "estado": "ahora" })} <p${addAttribute([
          "text-left text-title-medium relative flex-1",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}> ${cantSorp} </p> </div> <div${addAttribute([
          "flex flex-row gap-2.5 items-center justify-start shrink-0 relative",
          { hidden: mashupCon === null }
        ], "class:list")}> ${renderComponent($$result2, "MusicSVG", $$MusicSVG, { "era": era })} <p${addAttribute([
          " text-left text-body-large relative text-pretty",
          {
            "text-debut-600": era === "debut",
            "text-fearless-600": era === "fearless",
            "text-speakNow-600": era === "speakNow",
            "text-red-600": era === "red",
            "text-1989-600": era === "1989",
            "text-reputation-600": era === "reputation",
            "text-lover-600": era === "lover",
            "text-folklore-600": era === "folklore",
            "text-evermore-600": era === "evermore",
            "text-midnights-600": era === "midnights",
            "text-TTPD-600": era === "TTPD",
            "text-mashup-600": era === "mashup"
          }
        ], "class:list")}>
Mashup con: ${mashupCon} </p> </div> </div> </div>`;
      }
    )} </div>`;
  })} </section> <section class="text-1989-900 dark:text-1989-100 hidden md:block w-full"> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "era": era, "titulo": "1989 Set" }, { "default": ($$result3) => renderTemplate`
Aquí puedes ver **todas las combinaciones** del nuevo outfit de la era "1989", donde **las columnas representan las polleras** y **las filas los tops** que Taylor Swift ha lucido en el tour. Explora las distintas opciones que hacen de cada presentación un momento único.
` })} <table class="bg-1989-400 flex rounded-3xl p-2.5 flex-col mt-6 gap-2 gap-y-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden table-auto space-y-2.5"> <thead class="w-full flex flex-row gap-2 h-12"> <tr class="bg-1989-600 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-pink-400 rounded-lg flex h-8 w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <div class="bg-pink-400 rounded-lg flex h-8 w-full "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <div class="bg-orange-400 rounded-lg flex h-8 w-full "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <div class="bg-yellow-400 rounded-lg flex h-8 w-full "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <div class="bg-green-400 rounded-lg flex h-8 w-full "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <div class="bg-cyan-400 rounded-lg flex h-8 w-full "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <div class="bg-purple-400 rounded-lg flex h-8 w-full "></div> </td> </tr> </thead> <tbody${addAttribute(`text-1989-800 w-full flex flex-col gap-1 rounded-2xl items-start justify-start self-stretch shrink-0 relative overflow-hidden`, "class")}> <tr class="bg-1989-500 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-pink-400 rounded-lg flex h-full w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Pink.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Orange.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Gold.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Green.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Aqua.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl " src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Purple.jpg"> </td> </tr> <tr class="bg-1989-500 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-orange-400 rounded-lg flex h-full w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Pink.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Orange.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Gold.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Green.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Aqua.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl " src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Purple.jpg"> </td> </tr> <tr class="bg-1989-500 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-yellow-400 rounded-lg flex h-full w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Pink.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Orange.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Gold.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Green.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Aqua.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl " src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Purple.jpg"> </td> </tr> <tr class="bg-1989-500 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-green-400 rounded-lg flex h-full w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Pink.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Orange.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="opacity-0 hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Gold.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="opacity-0 hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Green.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Aqua.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl " src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Purple.jpg"> </td> </tr> <tr class="bg-1989-500 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-cyan-400 rounded-lg flex h-full w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Pink.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Orange.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Gold.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Green.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Aqua.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl " src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Purple.jpg"> </td> </tr> <tr class="bg-1989-500 gap-2 rounded-2xl p-2.5 flex items-center justify-center w-full"> <td class="text-1989-100 text-center text-headline-small h-[200px] relative w-min"> <div class="bg-purple-400 rounded-lg flex h-full w-8 "></div> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Pink.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Orange.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Gold.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Green.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl" src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Aqua.jpg"> </td> <td class="text-1989-100 text-center text-headline-small w-full relative"> <img class="hover:scale-105 h-[200px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl " src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Purple.jpg"> </td> </tr> </tbody> </table> </section> <section class="md:hidden block"> ${renderComponent($$result2, "Titulo", $$Titulo, { "titulo": "Combinaciones de Tops y Polleras", "era": era }, { "default": ($$result3) => renderTemplate`
Descubre todas las combinaciones de <strong>tops</strong> y <strong>polleras</strong> que Taylor Swift ha usado en la era "1989" durante "The Eras Tour". En esta sección, verás cómo cada top se combina con distintas polleras para crear looks únicos en cada presentación. Explora el carrusel para conocer todos los detalles de los outfits más icónicos de este tour.
` })} <div> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "titulo": "Top Rosa", "era": era }, { "default": ($$result3) => renderTemplate`
Combinaciones del top rosa con todas las polleras usadas en el tour.
` })} <div class="bg-pink-400 carousel carousel-center rounded-3xl max-w-md space-x-2.5 p-4"> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Pink.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Orange.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Gold.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Green.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Aqua.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPink-Purple.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> </div> </div> <div> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "titulo": "Top Naranja", "era": era }, { "default": ($$result3) => renderTemplate`
Combinaciones del top naranja con todas las polleras usadas en el tour.
` })} <div class="bg-orange-400 carousel carousel-center rounded-3xl min-w-min max-w-md space-x-2.5 p-4"> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Pink.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Orange.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Gold.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Green.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Aqua.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewOrange-Purple.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> </div> </div> <div> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "titulo": "Top Amarillo", "era": era }, { "default": ($$result3) => renderTemplate`
Combinaciones del top amarillo con todas las polleras usadas en el tour.
` })} <div class="bg-yellow-400 carousel carousel-center rounded-3xl max-w-md space-x-2.5 p-4"> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Pink.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Orange.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Gold.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Green.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Aqua.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGold-Purple.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> </div> </div> <div> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "titulo": "Top Verde", "era": era }, { "default": ($$result3) => renderTemplate`
Combinaciones del top verde con todas las polleras usadas en el tour. Faltando solamente los las polleras verde y amarilla.
` })} <div class="bg-green-400 carousel carousel-center rounded-3xl max-w-md space-x-2.5 p-4"> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Pink.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Orange.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Aqua.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewGreen-Purple.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> </div> </div> <div> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "titulo": "Top Celeste", "era": era }, { "default": ($$result3) => renderTemplate`
Combinaciones del top celeste con todas las polleras usadas en el tour.
` })} <div class="bg-cyan-400 carousel carousel-center rounded-3xl max-w-md space-x-2.5 p-4"> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Pink.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Orange.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Gold.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Green.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Aqua.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewAqua-Purple.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> </div> </div> <div> ${renderComponent($$result2, "SubTitulo", $$SubTitulo, { "titulo": "Top Violeta", "era": era }, { "default": ($$result3) => renderTemplate`
Combinaciones del top violeta con todas las polleras usadas en el tour.
` })} <div class="bg-purple-400 carousel carousel-center rounded-3xl max-w-md space-x-2.5 p-4"> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Pink.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Orange.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Gold.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Green.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Aqua.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> <div class="carousel-item"> <img src="/swifties-eras-tour/images/Outfits/05-1989/New/NewPurple-Purple.jpg" class="h-[400px] w-full transition object-cover ease-in-out delay-0 duration-200 self-center relativeself-stretch shrink-0 relative rounded-xl"> </div> </div> </div> </section> </main> ` })}`;
}, "/home/user/mi-repo/src/pages/eras/05-1989.astro", void 0);

const $$file = "/home/user/mi-repo/src/pages/eras/05-1989.astro";
const $$url = "/swifties-eras-tour/eras/05-1989";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$051989,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
