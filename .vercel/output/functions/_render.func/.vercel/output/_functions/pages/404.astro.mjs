/* empty css                                      */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_zfqlYxpS.mjs';
import 'kleur/colors';
import { $ as $$Titulo, a as $$ButtonPrimario, b as $$Layout } from '../chunks/Layout_oqMgRqbP.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const era = "reputation";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | Swifties Eras Tour", "era": era }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dark py-12 px-8 md:px-32 space-y-6 flex flex-col gap-2.5 gap-y-0 items-start justify-start self-stretch shrink-0 relative"> ${renderComponent($$result2, "Title", $$Titulo, { "era": era, "titulo": "Error 404" }, { "default": ($$result3) => renderTemplate`
Parece que te has perdido, intenta volviendo a la pagina inicial
` })} ${renderComponent($$result2, "ButtonPrimario", $$ButtonPrimario, { "href": "/swifties-eras-tour", "era": era, "icono": null }, { "default": ($$result3) => renderTemplate`
Inicio
` })} </main> ` })}`;
}, "/home/user/mi-repo/src/pages/404.astro", void 0);

const $$file = "/home/user/mi-repo/src/pages/404.astro";
const $$url = "/swifties-eras-tour/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
