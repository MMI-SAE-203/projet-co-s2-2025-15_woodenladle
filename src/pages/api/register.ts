import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        const pseudo = formData.get('pseudo')?.toString();
        const avatar = formData.get('avatar') as File;

        if (!email || !password || !pseudo) {
            return new Response(JSON.stringify({ error: 'Champs requis manquants.' }), { status: 400 });
        }

        const user = await pb.collection('users').create({
            email,
            emailVisibility: true,
            password,
            passwordConfirm: password,
            pseudo,
            avatar
        });

        const auth = await pb.collection('users').authWithPassword(email, password);

        return new Response(
            JSON.stringify({
                user: {
                    id: auth.record.id,
                    email: auth.record.email,
                    avatar: auth.record.avatar,
                    token: auth.token
                }
            }),
            { status: 200 }
        );
    } catch (err: any) {
        console.error("❌ Register error:", err);
        return new Response(JSON.stringify({ error: err?.message || 'Erreur serveur' }), { status: 500 });
    }
};
