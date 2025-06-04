import PocketBase from "pocketbase";
const pb = new PocketBase("https://savoury-road.mathis-guellati.fr");

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

export async function allRecettesSorted() {
    try {
        let record = await pb.collection('Recettes').getFullList({
            sort: 'Nom',
        });
        record = record.map((rec) => {
            rec.img = pb.files.getURL(rec, rec.Image);
            return rec;
        });
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des recettes', error);
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
            filter: `Region = '${region}'`,
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

export async function getOneRecette(id) {
    try {
        let record = await pb.collection('Recettes').getOne(id, {
            expand: 'etapes'
        });
        record.img = pb.files.getURL(record, record.Image);
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la recette', error);
        return null;
    }
}

export async function allEtapeByRecette(id) {
    let record = await pb.collection('Etapes').getFullList({
        filter: `recette.id = '${id}'`,
    });
    return record;
}

export async function updateUser(id, data) {
    await pb.collection('users').update(id, data);
}

export async function ProduitByRegionAndCategorie(region, categorie) {
    const all = await allProduitSorted();
    return all.filter(prod => {
        const matchRegion = region === "Tout" || prod.Region === region;
        const matchCategorie = categorie === "Tout" || prod.Categorie === categorie;
        return matchRegion && matchCategorie;
    });
}

export async function addUser({ email, password, pseudo, avatar }) {
    try {
        const userData = {
            email,
            password,
            passwordConfirm: password,
            pseudo: pseudo || '',
        };
        if (avatar) {
            userData.avatar = avatar;
        }
        const record = await pb.collection('users').create(userData);
        return record;
    } catch (error) {
        console.error('Erreur lors de l’ajout du user :', error);
        throw error;
    }
}

export async function deleteUser(id) {
    try {
        await pb.collection('users').delete(id);
        console.log(`User with id ${id} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export async function ajouterRecette({
    nom,
    description,
    image,
    nbr_personne,
    region,
    ingredients,
}) {
    const data = {
        Nom: nom,
        Description: description,
        nbr_personne: nbr_personne,
        Region: region,
        ingredients: ingredients || '',
    };
    if (image && image.size > 0) {
        data.Image = image;
    }
    try {
        const record = await pb.collection('Recettes').create(data);
        return record;
    } catch (error) {
        console.error('Erreur lors de l’ajout de la recette :', error);
        throw error;
    }
}

// Crée un record d'étapes
export async function ajouterEtapeByRecette({
    Etape_1,
    Etape_2,
    Etape_3,
    Etape_4,
    Etape_5,
    Etape_6,
    Etape_7,
    Etape_8,
    Etape_9,
    Etape_10,
    recette,
}) {
    const data = {
        Etape_1: Etape_1 || '',
        Etape_2: Etape_2 || '',
        Etape_3: Etape_3 || '',
        Etape_4: Etape_4 || '',
        Etape_5: Etape_5 || '',
        Etape_6: Etape_6 || '',
        Etape_7: Etape_7 || '',
        Etape_8: Etape_8 || '',
        Etape_9: Etape_9 || '',
        Etape_10: Etape_10 || '',
        Recette: recette, // id de la recette
    };
    try {
        const record = await pb.collection('Etapes').create(data);
        return record;
    } catch (error) {
        console.error('Erreur lors de l’ajout de l’étape :', error);
        throw error;
    }
}

// Met à jour la recette avec la jointure des étapes
export async function lierEtapesARecette(recetteId, etapesId) {
    try {
        const record = await pb.collection('Recettes').update(recetteId, {
            etapes: [etapesId], // Attention : [etapesId] si c'est une relation multiple
        });
        return record;
    } catch (error) {
        console.error('Erreur lors de la liaison des étapes à la recette :', error);
        throw error;
    }
}

export async function addMessage({ nom, email, message }) {
    const data = {
        nom: nom,
        email: email,
        message: message,
    };
    try {
        const record = await pb.collection('contact').create(data);
        return record;
    } catch (error) {
        console.error('Erreur lors de l’ajout du message :', error);
        throw error;
    }
}

export async function allEquipe() {
    try {
        let record = await pb.collection('Equipe').getFullList({
            sort: 'prenom',
        });
        record = record.map((equipe) => {
            equipe.img = pb.files.getURL(equipe, equipe.image);
            return equipe;
        });
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des membres de l’équipe', error);
        return [];
    }
}