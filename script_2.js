// Définition  fonction factorielle
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// Demande nombre pour calculer factorielle
let nombre = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));

// Calcul factorielle du nombre entré par l'utilisateur
let resultat = factorielle(nombre);

console.log("Le résultat est : " + resultat);