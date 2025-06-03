import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-1/3 md:top-4/10 md:left-20 w-full md:w-auto px-4 md:px-0"> <div class="text-center relative"> <h1 class="absolute z-5 top-1/2 text-[40px] md:text-[75px] w-full md:w-250 uppercase text-start [-webkit-text-stroke:1px_black] font-lilitaone text-white mb-4 leading-tight md:leading-20"> ${title} </h1> </div> </div>`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/components/Hero.astro", void 0);

export { $$Hero as $ };
