import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BR1mHeqF.mjs';
import { P as ProduitById, F as FournisseurById, b as allProduitSorted } from '../../chunks/backend_DhH19apL.mjs';
import 'clsx';
import { $ as $$ButtonVide } from '../../chunks/Button_vide_6S6ECTKh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link } = Astro2.props;
  const { ...prod } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(`font-lilitaone uppercase  text-lg hover:w-[250px] transition-all duration-300 cursor-pointer flex justify-center items-center mx-auto text-white rounded-xl h-[50px] w-[200px] ${prod.Region === "Amerique Latine" ? "bg-red" : prod.Region === "Afrique Central" ? "bg-orange" : prod.Region === "Afrique du Nord" ? "bg-yellow" : prod.Region === "Moyen Orient" ? "bg-green" : prod.Region === "Europe" ? "bg-purple" : prod.Region === "Asie du Sud Est" ? "bg-pink" : "bg-gray-500"}`, "class")}>${text}</a>`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/components/Button.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const allProduits = await allProduitSorted();
  return allProduits.map((produit) => ({
    params: { id: produit.id.toString() },
    props: { produit }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const prod = await ProduitById(id);
  const fournisseurs = prod ? await Promise.all(
    prod.Fournisseur.map((id2) => FournisseurById(id2))
  ) : [];
  if (!prod) {
    return Astro2.redirect("/404");
  }
  console.log("ID du produit:", id);
  console.log("Produit trouv\xE9:", prod);
  console.log("ID du fournisseur:", prod.Fournisseurs);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": prod.Nom }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-60 space-y-20"> <div class="flex mr-15"> <img${addAttribute(prod.img, "src")}${addAttribute(prod.Nom, "alt")} class="h-48 scale-150 mx-auto"> <div class="space-y-8 mx-10"> <h1 class="font-lilitaone text-4xl text-center">${prod.Nom}</h1> <div class="font-montserrat text-lg w-[800px]">${unescapeHTML(prod.Description)}</div> </div> </div> <div class="mb-20"> <h2 class="text-center mt-30 font-lilitaone uppercase text-4xl">
où le trouver ?
</h2> <div${addAttribute(`grid gap-10 mt-15 ${fournisseurs.length >= 3 ? "grid-cols-3" : fournisseurs.length === 2 ? "grid-cols-2" : "grid-cols-1"}`, "class")}> ${fournisseurs.length > 0 ? fournisseurs.map((f) => renderTemplate`<div class="text-center space-y-7"> <p class="text-3xl font-lilitaone text-black text-center"> ${f.Nom} </p> ${renderComponent($$result2, "Button", $$Button, { "text": "Acc\xE8der au site", "link": f.Site, ...prod })} </div>`) : renderTemplate`<p class="text-xl font-montserrat text-black col-span-full text-center">
Aucun fournisseur
</p>`} </div> <div class="flex justify-center mt-10"> ${renderComponent($$result2, "Button2", $$ButtonVide, { "text": "Retour aux produits", "link": "javascript:history.back()", ...prod })} </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/[id].astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/[id].astro";
const $$url = "/produits/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
