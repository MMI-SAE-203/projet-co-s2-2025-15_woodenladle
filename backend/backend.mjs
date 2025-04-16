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

export async function ProduitById(id) {
    try {
        let record = await pb.collection('Produit').getOne(id);
        record.img = pb.files.getURL(record, record.Image);
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant le produit', error);
        return null;
    }
}

export async function FournisseurById(id) {
    try {
        let record = await pb.collection('Fournisseurs').getOne(id);
        record.img = pb.files.getURL(record, record.Image);
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant le fournisseur', error);
        return null;
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

export async function addNewUser(newUser) {
    await pb.collection('users').create(newUser);
}

export async function Userauth(login, mdp) {
    await pb.collection("users").authWithPassword(login, mdp);
    console.log(pb.authStore.isValid);
}