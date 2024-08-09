import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CqaX4VrR.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/eras/01-debut.astro.mjs');
const _page3 = () => import('./pages/eras/02-fearless.astro.mjs');
const _page4 = () => import('./pages/eras/03-speaknow.astro.mjs');
const _page5 = () => import('./pages/eras/04-red.astro.mjs');
const _page6 = () => import('./pages/eras/05-1989.astro.mjs');
const _page7 = () => import('./pages/eras/06-reputation.astro.mjs');
const _page8 = () => import('./pages/eras/07-lover.astro.mjs');
const _page9 = () => import('./pages/eras/08-folklore.astro.mjs');
const _page10 = () => import('./pages/eras/09-evermore.astro.mjs');
const _page11 = () => import('./pages/eras/10-midnights.astro.mjs');
const _page12 = () => import('./pages/eras/11-ttpd.astro.mjs');
const _page13 = () => import('./pages/eras/12-mashup.astro.mjs');
const _page14 = () => import('./pages/outfits.astro.mjs');
const _page15 = () => import('./pages/setlist.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/eras/01-debut.astro", _page2],
    ["src/pages/eras/02-fearless.astro", _page3],
    ["src/pages/eras/03-speakNow.astro", _page4],
    ["src/pages/eras/04-red.astro", _page5],
    ["src/pages/eras/05-1989.astro", _page6],
    ["src/pages/eras/06-reputation.astro", _page7],
    ["src/pages/eras/07-lover.astro", _page8],
    ["src/pages/eras/08-folklore.astro", _page9],
    ["src/pages/eras/09-evermore.astro", _page10],
    ["src/pages/eras/10-midnights.astro", _page11],
    ["src/pages/eras/11-TTPD.astro", _page12],
    ["src/pages/eras/12-mashup.astro", _page13],
    ["src/pages/outfits.astro", _page14],
    ["src/pages/setlist.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2d7adc5b-906a-405a-ae66-917f2ca8ba76"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
