import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';


const pb = new PocketBase('http://127.0.0.1:8090');

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ error: 'Champs requis manquants.' }), {
                status: 400
            });
        }

        const authData = await pb.collection('users').authWithPassword(email, password);

        return new Response(
            JSON.stringify({
                token: authData.token,
                user: {
                    id: authData.record.id,
                    avatar: authData.record.avatar,
                    email: authData.record.email
                }
            }),
            { status: 200 }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: 'Email ou mot de passe invalide.' }),
            { status: 401 }
        );
    }
};
