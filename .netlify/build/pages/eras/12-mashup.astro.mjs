/* empty css                                       */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from '../../chunks/Layout_1fUuJijd.mjs';
import { $ as $$TablaCanciones } from '../../chunks/TablaCanciones_BK6e8zvo.mjs';
import { e as eras, $ as $$HeroImage } from '../../chunks/HeroImage_YSnapdxp.mjs';
export { renderers } from '../../renderers.mjs';

const $$12Mashup = createComponent(($$result, $$props, $$slots) => {
  const era = "debut";
  const eraData = eras.find((e) => e.albums === era);
  if (!eraData) return null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${era} | Swifties Eras Tour`, "era": era }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute(`bg-${era}-100 py-12 px-8 md:px-32 space-y-6 flex flex-col gap-2.5 gap-y-0 items-start justify-start self-stretch shrink-0 relative`, "class")}> <div class="w-full rounded-3xl overflow-hidden"> ${renderComponent($$result2, "HeroImage", $$HeroImage, { "era": era, "boton": false, "pagAnt": eraData?.anterior, "pagSig": eraData?.siguiente })} </div> ${renderComponent($$result2, "TablaCanciones", $$TablaCanciones, { "era": era })} </main> ` })}`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/pages/eras/12-mashup.astro", void 0);

const $$file = "D:/Matias/Facultad/Programacion/prueba2/src/pages/eras/12-mashup.astro";
const $$url = "/mi-repo/eras/12-mashup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$12Mashup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
