import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate, j as renderScript } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR1mHeqF.mjs';
import { $ as $$ButtonVide } from '../chunks/Button_vide_6S6ECTKh.mjs';
import { $ as $$Hero } from '../chunks/Hero_B19kAvJr.mjs';
import { c as ProduitByRegionAndCategorie, b as allProduitSorted } from '../chunks/backend_DhH19apL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardProd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardProd;
  const { ...prod } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-white rounded-3xl w-[350px] mb-4 border-4 text-center pt-10 pb-5 mx-auto hover:scale-102 transition ${prod.Region === "Amerique Latine" ? "border-red" : prod.Region === "Afrique Central" ? "border-orange" : prod.Region === "Afrique du Nord" ? "border-yellow" : prod.Region === "Moyen Orient" ? "border-green" : prod.Region === "Europe" ? "border-purple" : prod.Region === "Asie du Sud Est" ? "border-pink" : "border-gray-500"}`, "class")}> <img${addAttribute(prod.img, "src")}${addAttribute(prod.Nom, "alt")} class="pb-10 h-48 mx-auto"> <div class="p-4"> <p class="font-lilitaone text-xl pb-5 mb-2">${prod.Nom}</p> <div class="flex flex-col space-y-3"> ${renderComponent($$result, "Button2", $$ButtonVide, { "text": "Plus d'infos", "link": `/produits/${prod.id}`, ...prod })}</div> </div> </div>`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/components/Card_prod.astro", void 0);

const img = "/_astro/produits.DE5J6G8L.webp";

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let produit = [];
  let regions = [
    "Tout",
    "Amerique Latine",
    "Afrique Central",
    "Afrique du Nord",
    "Moyen Orient",
    "Europe",
    "Asie"
  ];
  let categories = ["Tout", "Snacks", "Drinks", "Epices", "Autre"];
  const url = new URL(Astro2.request.url);
  const rawRegion = url.searchParams.get("Region");
  const rawCategorie = url.searchParams.get("Categorie");
  const selectedRegion = rawRegion ? decodeURIComponent(rawRegion) : "Tout";
  const selectedCategorie = rawCategorie ? decodeURIComponent(rawCategorie) : "Tout";
  if (selectedRegion !== "Tout" || selectedCategorie !== "Tout") {
    produit = await ProduitByRegionAndCategorie(selectedRegion, selectedCategorie);
    regions = [selectedRegion, ...regions.filter((r) => r !== selectedRegion)];
    categories = [selectedCategorie, ...categories.filter((c) => c !== selectedCategorie)];
  } else {
    produit = await allProduitSorted();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "nos produits du monde, s\xE9lectionn\xE9s pour vous !" })} ${maybeRenderHead()}<img${addAttribute(img, "src")} alt="nos produits du monde, sélectionnés pour vous !"> <div class="mt-30 space-y-10"> <div class="space-y-3 text-center"> <h2 class="text-5xl font-lilitaone text-white [-webkit-text-stroke:1.5px_black] uppercase">
Nos Produits
</h2> <p class="font-montserrat text-xl">Pour les fans de gourmandises</p> </div> <div class="flex flex-wrap justify-center gap-4 my-6"> <p class="font-montserrat text-lg text-red font-bold">
Amérique Latine
</p> <span class="self-center">•</span> <p class="font-montserrat text-lg text-orange font-bold">
Afrique Central
</p> <span class="self-center">•</span> <p class="font-montserrat text-lg text-yellow font-bold">
Afrique du Nord
</p> <span class="self-center">•</span> <p class="font-montserrat text-lg text-green font-bold">
Moyen Orient
</p> <span class="self-center">•</span> <p class="font-montserrat text-lg text-purple font-bold">
Europe
</p> <span class="self-center">•</span> <p class="font-montserrat text-lg text-pink font-bold">
Asie
</p> </div> <form method="GET" class="flex flex-col gap-4 ml-20 mt-25" id="filterForm"> <div class="flex gap-8 items-center"> <div> <label for="Region" class="font-montserrat mr-2 text-lg font-medium text-[15px]">Filtrer par régions :</label> <select name="Region" id="regionSelect" class="cursor-pointer text-[15px] border-2 rounded-xl"> ${regions.map((region) => renderTemplate`<option${addAttribute(region, "value")}${addAttribute(region === selectedRegion, "selected")}> ${region} </option>`)} </select> </div> <div> <label for="Categorie" class="font-montserrat mr-2 text-lg font-medium text-[15px]">Filtrer par catégorie :</label> <select name="Categorie" id="categorieSelect" class="cursor-pointer text-[15px] border-2 rounded-xl"> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")}${addAttribute(cat === selectedCategorie, "selected")}> ${cat} </option>`)} </select> </div> </div> </form> <div class="grid grid-cols-3 justify-center mb-20"> ${produit.map((prod) => renderTemplate`${renderComponent($$result2, "Card", $$CardProd, { ...prod })}`)} </div> ${renderScript($$result2, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/index.astro?astro&type=script&index=0&lang.ts")} </div>` })}`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/index.astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/index.astro";
const $$url = "/produits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
