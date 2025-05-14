import PocketBase from 'pocketbase';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    const id = formData.get('id')?.toString();
    const token = formData.get('token')?.toString();
    const avatar = formData.get('avatar') as File;

    if (!id || !token || !avatar) {
        return new Response(JSON.stringify({ error: 'Requête invalide.' }), { status: 400 });
    }

    try {
        const pb = new PocketBase('http://127.0.0.1:8090');

        pb.authStore.save(token, id); // Simule une session avec token

        // Remplace les champs, y compris le fichier avatar
        const updatedUser = await pb.collection('users').update(id, { avatar });

        return new Response(
            JSON.stringify({ success: true, user: updatedUser }),
            { status: 200 }
        );
    } catch (err: any) {
        console.error("Erreur PocketBase:", err); // 👈 ajoute ça
        return new Response(
            JSON.stringify({ error: err.message }),
            { status: 500 }
        );
    }

};
