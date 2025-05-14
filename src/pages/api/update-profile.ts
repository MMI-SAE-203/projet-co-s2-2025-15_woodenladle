import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        const id = formData.get("id")?.toString();
        const token = formData.get("token")?.toString();
        const avatar = formData.get("avatar") as File;

        console.log("✅ update-profile.ts");
        console.log("id:", id);
        console.log("token:", token);
        console.log("avatar:", avatar?.name, avatar?.size);

        if (!id || !token || !avatar || avatar.size === 0) {
            return new Response(JSON.stringify({ error: "Champs manquants ou avatar vide." }), {
                status: 400
            });
        }

        // Créer une nouvelle instance de PocketBase pour éviter des problèmes de contexte
        const pb = new PocketBase('http://127.0.0.1:8090');

        // Authentifier avec le token fourni - correction pour le format du token
        try {
            // Récupérer les informations de token (format : "TOKEN_TYPE TOKEN_VALUE")
            // Si le token n'est pas dans le bon format, essayer de l'utiliser directement
            let tokenValue = token;
            if (token.includes(' ')) {
                // Si le token est au format "TYPE VALUE", extrait la valeur
                tokenValue = token.split(' ')[1];
            }

            pb.authStore.save(tokenValue, null);
            console.log("authentifié ? →", pb.authStore.isValid);

            if (!pb.authStore.isValid) {
                return new Response(JSON.stringify({ error: "Authentification invalide." }), {
                    status: 401
                });
            }
        } catch (authError) {
            console.error("Erreur d'authentification:", authError);
            return new Response(JSON.stringify({ error: "Erreur d'authentification: " + authError.message }), {
                status: 401
            });
        }

        // Préparer un nouvel objet FormData pour l'upload du fichier
        const fileFormData = new FormData();
        fileFormData.append('avatar', avatar);

        // Ajoutons un log pour déboguer
        console.log("Token utilisé:", pb.authStore.token);
        console.log("User ID:", pb.authStore.model?.id);

        // Mettre à jour avec le nouveau fichier
        try {
            const updated = await pb.collection("users").update(id, fileFormData);

            return new Response(JSON.stringify({
                success: true,
                user: {
                    id: updated.id,
                    email: updated.email,
                    avatar: updated.avatar,
                    token: pb.authStore.token
                }
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (updateError) {
            console.error("Erreur lors de la mise à jour:", updateError);
            return new Response(JSON.stringify({
                error: "Erreur lors de la mise à jour: " + updateError.message,
                details: updateError
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

    } catch (err: any) {
        console.error("❌ Erreur update-profile:", err?.message || err);
        return new Response(JSON.stringify({ error: err?.message || "Erreur serveur." }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }