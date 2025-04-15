import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function allProduitSorted() {
    try {
        let record = await pb.collection('Produit').getFullList({
            sort: 'Nom',
        });
        record = record.map((prod) => {
            prod.img = pb.files.getURL(prod, prod.Image);
            return prod;
        });
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des produits', error);
        return [];
    }
}

export async function ProduitByRegion(region) {
    try {
        let record = await pb.collection('Produit').getFullList({
            filter: `Region = "${region}"`,
            sort: 'Nom',
        });
        record = record.map((prod) => {
            prod.img = pb.files.getURL(prod, prod.Image);
            return prod;
        });
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des produits', error);
        return [];
    }
}