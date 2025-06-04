import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BR1mHeqF.mjs';
import { a as addMessage } from '../chunks/backend_DhH19apL.mjs';
export { renderers } from '../renderers.mjs';

const Lampe = "data:image/svg+xml,%3csvg%20width='59'%20height='54'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20fill='url(%23a)'%20d='M0%200H59V54H0z'/%3e%3cdefs%3e%3cpattern%20id='a'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23b'%20transform='matrix(.00915%200%200%20.01%20.042%200)'/%3e%3c/pattern%3e%3cimage%20id='b'%20width='100'%20height='100'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,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'/%3e%3c/defs%3e%3c/svg%3e";

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  let success = false;
  let error = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const nom = formData.get("nom");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!nom || !email || !message) {
      error = "Tous les champs sont requis.";
    } else {
      try {
        await addMessage({ nom, email, message });
        return Astro2.redirect("/contact?success=1", 303);
      } catch (e) {
        error = "Une erreur est survenue.";
      }
    }
  }
  const url = new URL(Astro2.request.url);
  if (url.searchParams.get("success")) {
    success = true;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="login-title" class="w-full h-[250px] bg-gray-100 p-0 rounded-b-3xl flex items-center justify-center border-b"> <h1 class="text-[80px] font-lilitaone pt-20 text-white [-webkit-text-stroke:1px_black]">
Nous contacter
</h1> </div> <div class="flex justify-between mx-50 mt-15 mb-15"> <div class="w-1/2 flex flex-col justify-center items-center space-y-10"> <p>Bienvenue sur notre page de contact ! Nous savons à quel point il est important pour vous d'obtenir des réponses rapides et précises. Que ce soit pour une question sur nos produits, une suggestion ou un besoin d'assistance, nous sommes là pour vous accompagner.</p> <img${addAttribute(Lampe, "src")} alt=""> <p>De plus, notre bot intelligent est également disponible pour répondre à vos questions en temps réel. Grâce à son fonctionnement basé sur l'Intelligence Artificielle, il peut vous guider dans votre recherche de produits ou dans l'utilisation de nos services.</p> </div> <div class=""> ${success && renderTemplate`<p class="mb-4 text-green-600 text-center">
Message envoyé avec succès ✅
</p>`} ${error && renderTemplate`<p class="mb-4 text-red-600 text-center">${error}</p>`} <form method="POST" class="space-y-4"> <div class="space-y-4"> <input type="text" id="nom" name="nom" required class="w-full px-4 py-2 border-2 rounded-xl bg-white" placeholder="Votre prenom nom"> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border-2 rounded-xl bg-white" placeholder="Votre adresse email"> </div> <div> <textarea id="message" name="message" rows="4" required class="w-full h-50 px-4 py-2 border-2 rounded-xl bg-white" placeholder="Votre message"></textarea> </div> <button type="submit" class="font-lilitaone uppercase text-lg hover:w-full transition-all cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px]">
Envoyer
</button> </form> </div> </div> ` })}`;
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/contact.astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
