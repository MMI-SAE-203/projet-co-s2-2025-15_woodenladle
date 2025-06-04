import { e as createComponent, f as createAstro, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bqug4sl-.mjs';
import 'kleur/colors';
import { i as addUser } from '../chunks/backend_DhH19apL.mjs';
import { $ as $$Layout } from '../chunks/Layout_BR1mHeqF.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  let error = "";
  let success = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pseudo = formData.get("pseudo");
    const avatar = formData.get("avatar");
    try {
      await addUser({ email, password, pseudo, avatar });
      success = "Inscription r\xE9ussie ! Vous pouvez maintenant vous connecter.";
    } catch (err) {
      error = err.message || "Erreur lors de l'inscription.";
    }
    return Astro2.redirect("/login", 303);
  }
  return renderTemplate(_a || (_a = __template(["", ` <script is:browser>
    const passwordInput = document.getElementById("password");

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const password = passwordInput.value;
        const passwordError = document.createElement('p');
        passwordError.style.color = 'red';
        
        const existingError = document.querySelector('.password-error');
        if (existingError) existingError.remove();
        
        if (password.length < 8 || !/\\d/.test(password)) {
            event.preventDefault();
            passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caract\xE8res et inclure un chiffre.';
            passwordError.classList.add('password-error');
            passwordInput.parentNode.appendChild(passwordError);
        }
    });

    const lengthIndicator = document.createElement('p');
    lengthIndicator.classList.add('validation-indicator', 'length-indicator');
    
    const digitIndicator = document.createElement('p');
    digitIndicator.classList.add('validation-indicator', 'digit-indicator');
    
    passwordInput.parentNode.appendChild(lengthIndicator);
    passwordInput.parentNode.appendChild(digitIndicator);
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        if (password.length >= 8) {
            lengthIndicator.textContent = 'Au moins 8 caract\xE8res';
            lengthIndicator.style.color = 'green';
        } else {
            lengthIndicator.textContent = 'Au moins 8 caract\xE8res';
            lengthIndicator.style.color = 'red';
        }
        
        if (/\\d/.test(password)) {
            digitIndicator.textContent = 'Contient au moins un chiffre';
            digitIndicator.style.color = 'green';
        } else {
            digitIndicator.textContent = 'Contient au moins un chiffre';
            digitIndicator.style.color = 'red';
        }
    });
<\/script>`], ["", ` <script is:browser>
    const passwordInput = document.getElementById("password");

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const password = passwordInput.value;
        const passwordError = document.createElement('p');
        passwordError.style.color = 'red';
        
        const existingError = document.querySelector('.password-error');
        if (existingError) existingError.remove();
        
        if (password.length < 8 || !/\\\\d/.test(password)) {
            event.preventDefault();
            passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caract\xE8res et inclure un chiffre.';
            passwordError.classList.add('password-error');
            passwordInput.parentNode.appendChild(passwordError);
        }
    });

    const lengthIndicator = document.createElement('p');
    lengthIndicator.classList.add('validation-indicator', 'length-indicator');
    
    const digitIndicator = document.createElement('p');
    digitIndicator.classList.add('validation-indicator', 'digit-indicator');
    
    passwordInput.parentNode.appendChild(lengthIndicator);
    passwordInput.parentNode.appendChild(digitIndicator);
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        if (password.length >= 8) {
            lengthIndicator.textContent = 'Au moins 8 caract\xE8res';
            lengthIndicator.style.color = 'green';
        } else {
            lengthIndicator.textContent = 'Au moins 8 caract\xE8res';
            lengthIndicator.style.color = 'red';
        }
        
        if (/\\\\d/.test(password)) {
            digitIndicator.textContent = 'Contient au moins un chiffre';
            digitIndicator.style.color = 'green';
        } else {
            digitIndicator.textContent = 'Contient au moins un chiffre';
            digitIndicator.style.color = 'red';
        }
    });
<\/script>`])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 text-black"> <div id="login-title" class="w-full h-[250px] bg-gray-100 p-0 rounded-b-3xl flex items-center justify-center border-b"> <h1 class="text-[80px] font-lilitaone pt-20 text-white [-webkit-text-stroke:1px_black]">
S'inscrire
</h1> </div> </div> <form method="POST" enctype="multipart/form-data" class="flex flex-col mt-30 w-1/4 mb-15 space-y-4 text-center mx-auto mt-10"> <input type="text" name="pseudo" class="w-full p-2 border rounded-xl" placeholder="Votre nom d'utilisateur"> <input type="email" name="email" required class="w-full p-2 border rounded-xl" placeholder="Votre adresse e-mail"> <div class="relative"> <input type="password" id="password" name="password" required class="w-full p-2 border rounded-xl" placeholder="Votre mot de passe"> <button type="button" id="togglePassword" class="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 text-gray-500 hover:text-gray-700"></button> </div> <input type="file" name="avatar" accept="image/*"> <button type="submit" class="font-lilitaone mt-5 uppercase text-lg hover:w-[250px] transition-all cursor-pointer mx-auto rounded-xl border-3 flex justify-center items-center h-[50px] w-[200px] hover:bg-black hover:text-white">S'inscrire</button> </form> <div class="flex justify-center w-full my-4"> ${success && renderTemplate`<p class="text-green-600 font-medium text-center">${success}</p>`} ${error && renderTemplate`<p class="text-red-600 font-medium text-center">${error}</p>`} </div> ` }));
}, "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/register.astro", void 0);

const $$file = "C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
