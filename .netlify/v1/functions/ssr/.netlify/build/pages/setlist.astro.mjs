/* empty css                                    */
import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DnNbMkkd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Title } from '../chunks/Title_Cq2YfD_p.mjs';
import { a as $$Layout } from '../chunks/Layout_1fUuJijd.mjs';
export { renderers } from '../renderers.mjs';

const $$Setlist = createComponent(($$result, $$props, $$slots) => {
  const era = "midnights";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Setlist", "era": era }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "era": era, "titulo": "Setlist", "texto": "Estos son los setlist de The Eras Tour, previo a la inclusi\xF3n de TTPD al setlist y despu\xE9s de la inclusi\xF3n" })} ` })}`;
}, "D:/Matias/Facultad/Programacion/prueba2/src/pages/setlist.astro", void 0);

const $$file = "D:/Matias/Facultad/Programacion/prueba2/src/pages/setlist.astro";
const $$url = "/mi-repo/setlist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Setlist,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
