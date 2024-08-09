/* empty css                                    */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ButtonPrimario, a as $$Layout } from '../chunks/Layout_1fUuJijd.mjs';
import { $ as $$Title } from '../chunks/Title_Cq2YfD_p.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const era = "reputation";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | Swifties Eras Tour", "era": era }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-12 px-8 md:px-32 space-y-6 flex flex-col gap-2.5 gap-y-0 items-start justify-start self-stretch shrink-0 relative"> ${renderComponent($$result2, "Title", $$Title, { "era": era, "titulo": "Error 404", "texto": "Parece que te has perdido, intenta volviendo a la pagina inicial" })} ${renderComponent($$result2, "ButtonPrimario", $$ButtonPrimario, { "href": "/mi-repo", "era": era, "icono": null }, { "default": ($$result3) => renderTemplate`
Inicio
` })} </main> ` })}`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/pages/404.astro", void 0);

const $$file = "D:/Matias/Facultad/Programacion/prueba2/src/pages/404.astro";
const $$url = "/mi-repo/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
