import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR1mHeqF.mjs';
import { $ as $$ButtonVide } from '../chunks/Button_vide_6S6ECTKh.mjs';
import { $ as $$Hero } from '../chunks/Hero_B19kAvJr.mjs';
import { h as allRecettesSorted } from '../chunks/backend_DhH19apL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardRecettes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardRecettes;
  const { ...rec } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-gray-100 w-8/10 flex mx-auto border-4 rounded-[20px] ${rec.Region === "Amerique Latine" ? "border-red" : rec.Region === "Afrique Central" ? "border-orange" : rec.Region === "Afrique du Nord" ? "border-yellow" : rec.Region === "Moyen Orient" ? "border-green" : rec.Region === "Europe" ? "border-purple" : rec.Region === "Asie du Sud Est" ? "border-pink" : "border-gray-500"}`, "class")}> <img${addAttribute(rec.img, "src")}${addAttribute(rec.Nom, "alt")} class="rounded-l-2xl w-75"> <div class="space-y-8 p-4 pl-6"> <p class="font-lilitaone text-2xl">${rec.Nom}</p> <div class="space-y-4 w-9/10"> <p class="font-montserrat text-[15px]"><span class="font-bold">Région : </span> ${rec.Region}</p> <p class="font-montserrat text-[15px]"><span class="font-bold">Description : </span> ${rec.Description}</p> </div> </div> <div class="flex items-center justify-center mr-20"> ${renderComponent($$result, "ButtonVide", $$ButtonVide, { "text": "Acc\xE9der \xE0 la recette", "link": `/recettes/${rec.id}`, ...rec })}</div> </div>`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/components/Card_recettes.astro", void 0);

const img = "/_astro/recettes.CMl73GZR.webp";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const rec = await allRecettesSorted();
  return renderTemplate(_a || (_a = __template(["", ' <script is:browser>\n    window.addEventListener("DOMContentLoaded", () => {\n        const user = JSON.parse(localStorage.getItem("user"));\n        const connectedSection = document.getElementById("connected-section");\n        const notConnectedSection = document.getElementById("not-connected-section");\n        if (!user || !user.email) {\n            notConnectedSection.classList.remove("hidden");\n            connectedSection.classList.add("hidden");\n        } else {\n            notConnectedSection.classList.add("hidden");\n        }\n\n        if (user?.email) {\n            connectedSection.classList.remove("hidden");\n        }\n    });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Les recettes du monde" })} ${maybeRenderHead()}<img${addAttribute(img, "src")} alt="Les recettes du monde"> <div class="relative mt-30 mb-20 space-y-20"> <div class="flex justify-center"> <p class="font-montserrat text-xl w-6/10">
Trouvez ici des <span class="font-bold">recettes faciles et authentiques</span> pour cuisiner avec vos <span class="font-bold">produits préférés</span>. Que ce soit un plat de chez vous ou une nouvelle découverte !
</p> </div> <div class="flex flex-col justify-center space-y-15"> ${rec.map((rec2) => renderTemplate`${renderComponent($$result2, "Card", $$CardRecettes, { ...rec2 })}`)} </div> <div class="space-y-10" id="not-connected-section"> <p class="text-center font-montserrat text-2xl text-green">Connectez-vous pour ajouter une recette</p> <a href="/login" class="font-lilitaone uppercase text-lg text-green border-green hover:w-[300px] transition-all cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[250px] hover:bg-black hover:text-white hover:bg-green hover:text-white">se connecter
</a> </div> <div id="connected-section" class="hidden"> <a href="/recettes/add" class="font-lilitaone uppercase text-lg text-green border-green hover:w-[300px] transition-all cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[250px] hover:bg-black hover:text-white hover:bg-green hover:text-white">Ajouter une recette
</a> </div> </div> ` }));
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/index.astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/index.astro";
const $$url = "/recettes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
