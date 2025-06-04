import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR1mHeqF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-60 flex flex-col items-center justify-center space-y-10"> <h1 class="text-6xl">404</h1> <p>Page not found</p> </div> ` })}`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/404.astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
