import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR1mHeqF.mjs';
import { g as getOneRecette, h as allRecettesSorted } from '../../chunks/backend_DhH19apL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allRecette = await allRecettesSorted();
  return allRecette.map((etape) => ({
    params: { id: etape.id.toString() },
    props: { etape }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const rec = await getOneRecette(id);
  let safeEtapes = {};
  if (rec && rec.expand && rec.expand.etapes) {
    if (Array.isArray(rec.expand.etapes) && rec.expand.etapes.length > 0) {
      safeEtapes = rec.expand.etapes[0];
    } else if (typeof rec.expand.etapes === "object") {
      safeEtapes = rec.expand.etapes;
    }
  }
  const listeEtapes = Object.entries(safeEtapes).filter(([key, val]) => key.startsWith("Etape_") && val).sort(([a], [b]) => {
    const numA = parseInt(a.split("_")[1], 10);
    const numB = parseInt(b.split("_")[1], 10);
    return numA - numB;
  });
  if (!rec) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-20 mt-60 space-y-20"> <div class="grid grid-cols-2 gap-10 w-8/10"> <img${addAttribute(rec.img, "src")}${addAttribute(rec.Nom, "alt")}${addAttribute(`h-48 scale-200 mx-auto border-3 rounded-lg ${rec.Region === "Amerique Latine" ? "border-red" : rec.Region === "Afrique Central" ? "border-orange" : rec.Region === "Afrique du Nord" ? "border-yellow" : rec.Region === "Moyen Orient" ? "border-green" : rec.Region === "Europe" ? "border-purple" : rec.Region === "Asie du Sud Est" ? "border-pink" : "border-gray-500"}`, "class")}> <div class="w-[600px] space-y-8 mx-10"> <div class="space-y-2"> <h1 class="font-lilitaone text-6xl [-webkit-text-stroke:1px_black] text-white text-center"> ${rec.Nom} </h1> <p class="font-montserrat text-center">
Origine : ${rec.Region} </p> </div> <div class="font-montserrat text-xl">${unescapeHTML(rec.Description)}</div> </div> </div> <div class="grid grid-cols-2 pt-20 gap-30 w-8/10"> <div class="w-8/10 bg-gray-100 border-t-3 border-b-3 border-r-3 rounded-r-[30px] h-auto"> <div class="flex flex-col justify-center items-center"> <h2 class="text-center mt-15 font-lilitaone uppercase text-4xl">
Ingrédients
</h2> <p class="text-center font-montserrat text-lg mb-10">
(Pour ${rec.nbr_personne} personnes)
</p> <div class="font-montserrat capitalize space-y-5 text-lg">${unescapeHTML(rec.ingredients)}</div> </div> </div> <div class="mb-20"> ${listeEtapes.map(([key, valeur], index) => renderTemplate`<div class="mb-15"${addAttribute(key, "key")}> <h3 class="text-3xl uppercase font-lilitaone font-bold mb-2">
Étape ${index + 1} </h3> <p class="font-montserrat text-l capitalize">${valeur}</p> </div>`)} </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/[id].astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/[id].astro";
const $$url = "/recettes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
