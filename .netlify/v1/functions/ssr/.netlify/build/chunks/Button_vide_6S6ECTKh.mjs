import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ButtonVide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonVide;
  const { text, link } = Astro2.props;
  const { ...prod } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(`font-lilitaone uppercase text-lg hover:w-[250px] transition-all cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px] ${prod.Region === "Amerique Latine" ? "border-red text-red" : prod.Region === "Afrique Central" ? "border-orange text-orange" : prod.Region === "Afrique du Nord" ? "border-yellow text-yellow" : prod.Region === "Moyen Orient" ? "border-green text-green" : prod.Region === "Europe" ? "border-purple text-purple" : prod.Region === "Asie du Sud Est" ? "border-pink text-pink" : "border-black text-black"}`, "class")}>${text}</a>`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/components/Button_vide.astro", void 0);

export { $$ButtonVide as $ };
