import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D-Dl4BXc.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/login.astro.mjs');
const _page3 = () => import('./pages/chat.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/mentionlegale.astro.mjs');
const _page7 = () => import('./pages/produits/_id_.astro.mjs');
const _page8 = () => import('./pages/produits.astro.mjs');
const _page9 = () => import('./pages/propos.astro.mjs');
const _page10 = () => import('./pages/recettes/add.astro.mjs');
const _page11 = () => import('./pages/recettes/_id_.astro.mjs');
const _page12 = () => import('./pages/recettes.astro.mjs');
const _page13 = () => import('./pages/register.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/login.ts", _page2],
    ["src/pages/chat.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/mentionlegale.astro", _page6],
    ["src/pages/produits/[id].astro", _page7],
    ["src/pages/produits/index.astro", _page8],
    ["src/pages/propos/index.astro", _page9],
    ["src/pages/recettes/add.astro", _page10],
    ["src/pages/recettes/[id].astro", _page11],
    ["src/pages/recettes/index.astro", _page12],
    ["src/pages/register.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8baea7fd-03d6-4182-9e14-4a114dc9d6b1"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
