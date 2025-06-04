import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as renderScript } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR1mHeqF.mjs';
import { $ as $$Hero } from '../chunks/Hero_B19kAvJr.mjs';
import { A as AfriqueNord, a as AmeriqueCentrale, b as AmeriqueLatine, c as AsieEst, E as EuropeEst, O as Orient } from '../chunks/Orient_Dy3YgN7S.mjs';
import { h as allRecettesSorted } from '../chunks/backend_DhH19apL.mjs';
import 'clsx';
import { $ as $$ButtonVide } from '../chunks/Button_vide_6S6ECTKh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const img = "/_astro/accueil.I7erTtr4.webp";

const img_mobile = "/_astro/accueil_mobile.CcOExDrv.webp";

const $$Astro = createAstro();
const $$CarouselRecette = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CarouselRecette;
  const { ...rec } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-[150px] min-w-[200px] max-w-[200px] lg:h-[300px] lg:min-w-[500px] lg:max-w-[500px] border-2 rounded-2xl bg-black overflow-hidden"> <img${addAttribute(rec.img, "src")}${addAttribute(rec.Nom, "alt")} class="h-[140px] w-full lg:h-[290px] rounded-2xl opacity-50 object-cover"> <div class="absolute bottom-2 left-2 bg-white px-2 py-0.5 rounded"> <p class="font-lilitaone text-xs lg:text-xl text-black">${rec.Nom}</p> </div> <div class="absolute top-2 right-2 bg-white px-2 py-0.5 rounded"> <p class="font-montserrat text-xs text-black"> pour : ${rec.nbr_personne} personnes</p> </div> </div>`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/components/Carousel_recette.astro", void 0);

const Arrow = "data:image/svg+xml,%3csvg%20width='83'%20height='41'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M76.033%201.132L44.116%2032.544a3.72%203.72%200%2001-5.232%200L6.968%201.14a3.747%203.747%200%2000-5.253%200%203.61%203.61%200%20000%205.17l31.91%2031.406a11.241%2011.241%200%200015.75%200L81.285%206.31a3.611%203.611%200%20000-5.178%203.747%203.747%200%2000-5.252%200z'%20fill='%23000'/%3e%3c/svg%3e";

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const rec = await allRecettesSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "RETROUVEZ LA CUISINE DU MONDE CHEZ VOUS !", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<img class="hidden lg:block"${addAttribute(img, "src")} alt="RETROUVEZ LA CUISINE DU MONDE CHEZ VOUS !" data-astro-cid-j7pv25f6> <img class="w-full object-cover lg:hidden"${addAttribute(img_mobile, "src")} alt="RETROUVEZ LA CUISINE DU MONDE CHEZ VOUS !" data-astro-cid-j7pv25f6> <div class="relative flex flex-col mt-20 lg:mt-30 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h1 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
Qu'est ce que savoury road ?
</h1> <div class="flex justify-center" data-astro-cid-j7pv25f6> <p class="font-montserrat text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6>
Chez <span class="font-bold" data-astro-cid-j7pv25f6>Savoury Road</span>, nous savons à
                quel point il est difficile de retrouver les produits de son
                pays lorsqu'on vit à l'étranger. C'est pourquoi <span class="font-bold" data-astro-cid-j7pv25f6>nous sélectionnons</span> pour vous des produits alimentaires <span class="font-bold" data-astro-cid-j7pv25f6>authentiques</span> venus <span class="font-bold" data-astro-cid-j7pv25f6>d'Afrique, d'Asie, d'Amérique Latine, d'Europe et d'Orient</span>. Que ce soit pour cuisiner un plat traditionnel ou simplement
                retrouver <span class="font-bold" data-astro-cid-j7pv25f6>un goût familier</span>, nous
                avons ce qu'il vous faut. Notre catalogue évolue constamment
                pour répondre aux besoins de notre communauté et vous offrir
                toujours plus de choix.
</p> </div> <div class="hidden lg:block relative flex flex-col mt-10 space-y-20" data-astro-cid-j7pv25f6> <h2 class="text-center font-lilitaone text-4xl uppercase" data-astro-cid-j7pv25f6>
Choisis ta destination
</h2> <div class="grid grid-cols-3 mx-50 space-y-30" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <img${addAttribute(AfriqueNord, "src")} class="mx-auto h-65" alt="Afrique du Nord" data-astro-cid-j7pv25f6> <a href="../produits" class="font-lilitaone border-
                    border-yellow text-yellow uppercase text-lg hover:w-[250px] transition-all cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px]" data-astro-cid-j7pv25f6>afrique du nord</a> </div> <div data-astro-cid-j7pv25f6> <img${addAttribute(AmeriqueCentrale, "src")} class="mx-auto h-65" alt="Amerique Centrale" data-astro-cid-j7pv25f6> <a href="../produits" class="font-lilitaone uppercase text-lg hover:w-[250px] transition-all border-orange text-orange cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px]" data-astro-cid-j7pv25f6>
amerique centrale</a> </div> <div data-astro-cid-j7pv25f6> <img${addAttribute(AmeriqueLatine, "src")} class="mx-auto h-65" alt="Amerique Latine" data-astro-cid-j7pv25f6> <a href="../produits" class="font-lilitaone uppercase text-lg hover:w-[250px] transition-all cursor-pointer border-red text-red mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px]" data-astro-cid-j7pv25f6>amerique latine</a> </div> <div data-astro-cid-j7pv25f6> <img${addAttribute(AsieEst, "src")} class="mx-auto h-65" alt="Asie de l'Est" data-astro-cid-j7pv25f6> <a href="../produits" class="font-lilitaone uppercase text-lg hover:w-[250px] transition-all cursor-pointer border-pink text-pink mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px]" data-astro-cid-j7pv25f6>
asie du sud est</a> </div> <div data-astro-cid-j7pv25f6> <img${addAttribute(EuropeEst, "src")} class="mx-auto h-65" alt="Europe de l'Est" data-astro-cid-j7pv25f6> <a href="../produits" class="font-lilitaone uppercase text-lg hover:w-[250px] transition-all cursor-pointer mx-auto border-purple text-purple rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px]" data-astro-cid-j7pv25f6>europe de l'est</a> </div> <div data-astro-cid-j7pv25f6> <img${addAttribute(Orient, "src")} class="mx-auto h-65" alt="Orient" data-astro-cid-j7pv25f6> <a href="../produits" class="font-lilitaone uppercase text-lg hover:w-[250px] transition-all cursor-pointer mx-auto rounded-xl border-green text-green border-3 flex justify-center items-center h-[50px] w-[200px]" data-astro-cid-j7pv25f6>moyen orient</a> </div> </div> </div> <div class="relative flex flex-col mt-10 lg:mt-5 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h2 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
QUELQUE RECETTES TRADITIONELLES
</h2> <div class="flex justify-center" data-astro-cid-j7pv25f6> <p class="font-montserrat text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6>
Découvrez des <span class="font-bold" data-astro-cid-j7pv25f6>recettes authentiques</span>, soigneusement sélectionnées pour vous inspirer en
                    cuisine. Idéales pour <span class="font-bold" data-astro-cid-j7pv25f6>varier vos repas</span>, elles vous invitent à <span class="font-bold" data-astro-cid-j7pv25f6>tester de nouvelles saveurs et techniques</span>.
</p> </div> </div> <div class="relative w-full" data-astro-cid-j7pv25f6> <a href="/recettes" id="carousel" class="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar px-8" data-astro-cid-j7pv25f6> ${rec.slice(0, 5).map((rec2) => renderTemplate`${renderComponent($$result2, "CarouselRecette", $$CarouselRecette, { ...rec2, "data-astro-cid-j7pv25f6": true })}`)} </a> <div class="flex justify-center mb-10 gap-10 mt-7" data-astro-cid-j7pv25f6> <button id="carousel-left" class="z-10 bg-white cursor-pointer rounded-full shadow px-2 py-1" aria-label="Précédent" data-astro-cid-j7pv25f6> <img${addAttribute(Arrow, "src")} class="rotate-90 scale-30" alt="bouton précédent" data-astro-cid-j7pv25f6> </button> <button id="carousel-right" class="z-10 bg-white cursor-pointer rounded-full shadow px-2 py-1" aria-label="Suivant" data-astro-cid-j7pv25f6> <img${addAttribute(Arrow, "src")} class="-rotate-90 scale-30" alt="bouton précédent" data-astro-cid-j7pv25f6> </button> </div> ${renderComponent($$result2, "Button", $$ButtonVide, { "text": "Toutes les recettes", "link": "/recettes", "data-astro-cid-j7pv25f6": true })} </div> <div class="relative flex flex-col mt-10 lg:mt-5 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h2 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
Beosin d'aide ?
</h2> <div class="flex space-y-5 flex-col justify-center" data-astro-cid-j7pv25f6> <p class="font-montserrat mx-auto text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6> <span class="font-bold" data-astro-cid-j7pv25f6>SR Bot</span> est à vos côtés pour vous guider tout au long de votre découverte des produits du monde. Vous pouvez lui <span class="font-bold" data-astro-cid-j7pv25f6>demander des détails</span> sur n'importe quel produit, <span class="font-bold" data-astro-cid-j7pv25f6>découvrir les récits fascinants</span> qui se cachent derrière chaque article ou <span class="font-bold" data-astro-cid-j7pv25f6>obtenir des recommandations sur mesure</span> en fonction de vos goûts personnels.
</p> <p class="font-montserrat mx-auto text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6>
Que vous <span class="font-bold" data-astro-cid-j7pv25f6>cherchiez un produit précis</span> ou que vous <span class="font-bold" data-astro-cid-j7pv25f6>vouliez simplement découvrir de nouvelles possibilités</span>, SR Bot est là pour vous accompagner et rendre chaque expérience d'achat plus enrichissante et intuitive.
</p> </div> ${renderComponent($$result2, "Button", $$ButtonVide, { "text": "D\xE9couvrir SR Bot", "link": "/chat", "data-astro-cid-j7pv25f6": true })} </div> <div class="relative flex flex-col mt-10 lg:mt-5 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h2 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
Nous rejoindre
</h2> <div class="flex space-y-5 flex-col justify-center" data-astro-cid-j7pv25f6> <p class="font-montserrat mx-auto text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6> <span class="font-bold" data-astro-cid-j7pv25f6>En nous rejoignant</span> , vous pourrez <span class="font-bold" data-astro-cid-j7pv25f6>proposer vos propres recettes</span> et enrichir notre sélection avec <span class="font-bold" data-astro-cid-j7pv25f6>vos spécialités favorites</span>.
</p> </div> ${renderComponent($$result2, "Button", $$ButtonVide, { "text": "Se connecter", "link": "/login", "data-astro-cid-j7pv25f6": true })} </div> <div class="relative flex flex-col mt-10 lg:mt-5 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h2 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
Des prix accessibles
</h2> <div class="flex space-y-5 flex-col justify-center" data-astro-cid-j7pv25f6> <p class="font-montserrat mx-auto text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6>
Nous redirigeons nos utilisateurs vers des sites commerçants <span class="font-bold" data-astro-cid-j7pv25f6>soigneusement sélectionnés</span>, garantissant des <span class="font-bold" data-astro-cid-j7pv25f6>prix bas</span> pour une expérience d'achat économique et accessible. En mettant l'accent sur <span class="font-bold" data-astro-cid-j7pv25f6>la qualité</span> et l'accessibilité, nous facilitons la découverte de saveurs exotiques <span class="font-bold" data-astro-cid-j7pv25f6>sans dépasser votre budget</span>.
</p> </div> </div> <div class="relative flex flex-col mt-10 lg:mt-5 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h2 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
Nos avantages
</h2> <div class="flex space-y-5 flex-col justify-center" data-astro-cid-j7pv25f6> <p class="font-montserrat mx-auto text-2lg lg:text-xl w-8/10 lg:w-6/10" data-astro-cid-j7pv25f6> <span class="font-bold" data-astro-cid-j7pv25f6>Nos avantages distinctifs :</span>,  Grâce à un bot alimenté par une Intelligence Artificielle, <span class="font-bold" data-astro-cid-j7pv25f6>nous accompagnons chaque utilisateur dans sa sélection de produits</span> en fonction de ses besoins spécifiques. Ce bot intuitif simplifie la recherche et propose des recommandations personnalisées. De plus, nous offrons <span class="font-bold" data-astro-cid-j7pv25f6>une page dédiée aux recettes traditionnelles des régions que nous couvrons</span>, permettant à nos visiteurs de découvrir et recréer les plats emblématiques de chaque culture.
</p> </div> </div> <div class="relative flex flex-col mt-10 lg:mt-5 mb-20 space-y-20" data-astro-cid-j7pv25f6> <h2 class="mx-auto font-lilitaone text-2xl lg:text-4xl uppercase" data-astro-cid-j7pv25f6>
Notre équipe
</h2> <!-- <div class="flex flex-col lg:grid lg:grid-cols-3 font-montserrat space-y-20">
                <div class="space-y-5 flex flex-col items-center">
                    <img src={Valentine} alt="Valentine GUILLOT" class="w-40 h-40">
                    <div class="space-y-2 text-center">
                        <p class="">Valentine GUILLOT</p>
                        <p class="text-pink font-bold text-xl">Designeuse</p>
                        <p>valentine.guillot@edu.univ-fcomte.fr</p>
                    </div>
                </div>
                <div class="space-y-5 flex flex-col items-center">
                    <img src={Mathis} alt="Mathis GUELLATI" class="w-40 h-40">
                    <div class="space-y-2 text-center">
                        <p class="">Mathis GUELLATI</p>
                        <p class="text-pink font-bold text-xl">Développeur</p>
                        <p>mathis.guellati@edu.univ-fcomte.fr</p>
                    </div>
                </div>
                <div class="space-y-5 flex flex-col items-center">
                    <img src={Ethan} alt="Ethan HENNEQUIN-DE-MEYER" class="w-40 h-40">
                    <div class="space-y-2 text-center">
                        <p class="">Ethan HENNEQUIN-DE-MEYER</p>
                        <p class="text-pink font-bold text-xl">Communicant</p>
                        <p class="w-2/3 mx-auto">ethan.hennequin--de_meyer@edu.univ-fcomte.fr</p>
                    </div>
                </div>
            </div> --> </div> </div>  ${renderScript($$result2, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/index.astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
