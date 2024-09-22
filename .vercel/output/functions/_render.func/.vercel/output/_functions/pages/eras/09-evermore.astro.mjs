/* empty css                                         */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import { $ as $$Titulo, b as $$Layout } from '../../chunks/Layout_oqMgRqbP.mjs';
import { $ as $$StarSVG, a as $$CircleXSVGCopy, b as $$CalendarSVG, c as $$CircleCaretRightSVG } from '../../chunks/CircleXSVG copy_BGYoAe3v.mjs';
import { $ as $$MusicSVG } from '../../chunks/MusicSVG_un2stqHt.mjs';
import { e as eras } from '../../chunks/songs_BYCJa7wA.mjs';
import { $ as $$HeroImage } from '../../chunks/HeroImage_DdSik-L_.mjs';
import { $ as $$Notas } from '../../chunks/Notas_BgLWwpfn.mjs';
import { $ as $$MapPinSVG, a as $$MicrofonoSvg } from '../../chunks/MicrofonoSvg_CY1dD72R.mjs';
import { $ as $$SubTitulo } from '../../chunks/SubTitulo_CW7WNb9W.mjs';
export { renderers } from '../../renderers.mjs';

const $$09Evermore = createComponent(($$result, $$props, $$slots) => {
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
  let era = erasArreglo[8];
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
  })} </section> ${eraData.notas?.length > 0 && renderTemplate`${renderComponent($$result2, "Notas", $$Notas, { "era": era, "titulo": "Notas" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc text-title-medium list-inside"> ${eraData.notas?.map(({ nota }) => {
    return renderTemplate`<li>${nota}</li>`;
  })} </ul> ` })}`} </main> ` })}`;
}, "/home/user/mi-repo/src/pages/eras/09-evermore.astro", void 0);

const $$file = "/home/user/mi-repo/src/pages/eras/09-evermore.astro";
const $$url = "/swifties-eras-tour/eras/09-evermore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$09Evermore,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
