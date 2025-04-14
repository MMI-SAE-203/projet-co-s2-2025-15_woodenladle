import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function filterByCategory(category) {
    try {
        let prod = await pb.collection("Produit").getFullList({
            filter: `Categorie = "${category}"`,
        });
        events = events.map((prod) => {
            prod.img = pb.files.getURL(prod, prod.image);
            return prod;
        });
        return {
            success: true,
            prod: prod,
            message: "Les produits ont été filtrés avec succès.",
        }
    } catch (error) {
        return {
            success: false,
            prod: [],
            message: "Une erreur est survenue lors du filtrage des produits: " + error,
        }
    }
}