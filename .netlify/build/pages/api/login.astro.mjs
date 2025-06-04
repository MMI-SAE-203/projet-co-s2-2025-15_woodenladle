import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

const pb = new PocketBase("https://savoury-road.mathis-guellati.fr");
const POST = async ({ request }) => {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Champs requis manquants." }), {
        status: 400
      });
    }
    const authData = await pb.collection("users").authWithPassword(email, password);
    return new Response(
      JSON.stringify({
        token: authData.token,
        user: {
          id: authData.record.id,
          avatar: authData.record.avatar,
          email: authData.record.email,
          pseudo: authData.record.pseudo
        }
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Email ou mot de passe invalide." }),
      { status: 401 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
