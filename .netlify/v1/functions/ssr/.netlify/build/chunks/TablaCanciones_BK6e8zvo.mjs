import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { e as eras, a as $$Emojie } from './HeroImage_YSnapdxp.mjs';

const $$Astro = createAstro("https:matiassolisschneeberger.github.io");
const $$TablaCanciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TablaCanciones;
  const { era } = Astro2.props;
  const eraData = eras.find((e) => e.albums === era);
  if (!eraData) return null;
  return renderTemplate`${maybeRenderHead()}<table${addAttribute(`bg-${era}-400 rounded-3xl p-2.5 flex flex-col gap-2 gap-y-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden table-auto space-y-2.5`, "class")}> <thead class="w-full flex flex-row gap-2"> <tr${addAttribute(`bg-${era}-500 rounded-2xl p-2.5 flex gap-0 items-center justify-center w-full`, "class")}> <th${addAttribute([
    "text-center text-title-medium sm:text-headline-small relative w-full",
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
      "text-TTPD-100": era === "TTPD"
    }
  ], "class:list")}>
Canciones
</th> </tr> <tr${addAttribute(`bg-${era}-500 rounded-2xl p-2.5 flex gap-0 items-center justify-center w-full`, "class")}> <th${addAttribute([
    "text-center text-title-medium sm:text-headline-small relative w-full",
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
      "text-TTPD-100": era === "TTPD"
    }
  ], "class:list")}>
Fechas
</th> </tr> <tr${addAttribute(`bg-${era}-500 rounded-2xl p-2.5 flex gap-0 items-center justify-center w-full`, "class")}> <th${addAttribute([
    "text-center text-title-medium sm:text-headline-small relative w-full",
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
      "text-TTPD-100": era === "TTPD"
    }
  ], "class:list")}>
Lugares
</th> </tr> </thead> <tbody${addAttribute(`text-${era}-800 w-full flex flex-col gap-1 rounded-2xl items-start justify-start self-stretch shrink-0 relative overflow-hidden`, "class")}> <!-- canciones --> ${eraData?.canciones.map(
    ({ title, info, etiquetas }) => {
      return renderTemplate`<tr${addAttribute(["w-full flex-row gap-2 rounded-2xl p-2.5 flex items-center justify-center", [
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
          "bg-TTPD-200": era === "TTPD"
        }
      ]], "class:list")}> <td class=" w-full rounded-2xl relative justify-center"> <p${addAttribute([
        "text-title-medium text-center",
        {
          "text-debut-400": etiquetas.principal === "sinCantar" && era === "debut",
          "text-fearless-400": etiquetas.principal === "sinCantar" && era === "fearless",
          "text-speakNow-400": etiquetas.principal === "sinCantar" && era === "speakNow",
          "text-red-400": etiquetas.principal === "sinCantar" && era === "red",
          "text-1989-400": etiquetas.principal === "sinCantar" && era === "1989",
          "text-reputation-400": etiquetas.principal === "sinCantar" && era === "reputation",
          "text-lover-400": etiquetas.principal === "sinCantar" && era === "lover",
          "text-folklore-400": etiquetas.principal === "sinCantar" && era === "folklore",
          "text-evermore-400": etiquetas.principal === "sinCantar" && era === "evermore",
          "text-midnights-400": etiquetas.principal === "sinCantar" && era === "midnights",
          "text-TTPD-400": etiquetas.principal === "sinCantar" && era === "TTPD",
          "text-mashup-400": etiquetas.principal === "sinCantar" && era === "mashup"
        }
      ], "class:list")}> <span${addAttribute([
        {
          "hidden": etiquetas.principal !== "setlist"
        }
      ], "class:list")}>Setlist</span> ${title} </p> </td> <td${addAttribute(["flex flex-col w-full", [{ "hidden": etiquetas.principal === "setlist" || etiquetas.principal === "sinCantar" }]], "class:list")}> ${info.map(
        ({ fecha, instrumento }) => {
          if (!instrumento) return null;
          return renderTemplate`<div class="flex flex-row gap-3 justify-center"> <p class="text-title-medium"> ${fecha.dia}/${fecha.mes}/${fecha.a\u00F1o} </p> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": instrumento })} </div>`;
        }
      )} </td> <td${addAttribute(["flex-col w-full", [{ "hidden": etiquetas.principal === "setlist" || etiquetas.principal === "sinCantar" }]], "class:list")}> ${info.map(
        ({ lugar }) => {
          return renderTemplate`<p class="text-title-medium text-center">${lugar}</p>`;
        }
      )} </td> </tr>`;
    }
  )} <!-- divisor --> ${eraData?.extras.length > 0 && renderTemplate`<tr${addAttribute(["w-full flex-row gap-2 rounded-2xl p-0.5 flex items-center justify-center", [
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
      "bg-TTPD-600": era === "TTPD"
    }
  ]], "class:list")}></tr>`} ${eraData?.extras.map(
    ({ title, info }) => {
      return renderTemplate`<tr${addAttribute(["w-full flex-row gap-2 rounded-2xl p-2.5 flex items-center justify-center", [
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
          "bg-TTPD-200": era === "TTPD"
        }
      ]], "class:list")}> <td class=" w-full rounded-2xl relative"> <p class="text-title-medium text-center"> ${title} </p> </td> <td class="flex flex-col w-full"> ${info.map(
        ({ fecha, instrumento }) => {
          if (!instrumento) return null;
          return renderTemplate`<div class="flex flex-row gap-3 justify-center"> <p class="text-title-medium"> ${fecha.dia}/${fecha.mes}/${fecha.a\u00F1o} </p> ${renderComponent($$result, "Emojie", $$Emojie, { "emojie": instrumento })} </div>`;
        }
      )} </td> <td class="flex-col w-full"> ${info.map(
        ({ lugar }) => {
          return renderTemplate`<p class="text-title-medium text-center">${lugar}</p>`;
        }
      )} </td> </tr>`;
    }
  )} </tbody> </table>`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/sections/TablaCanciones.astro", void 0);

export { $$TablaCanciones as $ };
