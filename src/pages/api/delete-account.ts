import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://savoury-road.mathis-guellati.fr');

export const POST: APIRoute = async ({ request }) => {
    try {
        const { id, token } = await request.json();

        if (!id || !token) {
            return new Response(JSON.stringify({ error: "ID ou token manquant" }), { status: 400 });
        }

        pb.authStore.save(token, null); // Authentifie l'utilisateur avec le token

        await pb.collection('users').delete(id);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err: any) {
        console.error("❌ Delete error:", err?.response || err);
        return new Response(
            JSON.stringify({ error: err?.response?.message || err?.message || "Erreur serveur" }),
            { status: 500 }
        );
    }
};
