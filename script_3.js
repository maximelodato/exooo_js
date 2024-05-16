// Demande à l'utilisateur le nombre d'étages pour la pyramide
let nombreEtages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

// Boucle pour créer chaque ligne de la pyramide
for (let i = 1; i <= nombreEtages; i++) {
    let ligne = '';
    
    // Ajoute les espaces nécessaires à chaque ligne
    for (let j = 1; j <= nombreEtages - i; j++) {
        ligne += ' ';
    }
    
    // Ajoute les "#" nécessaires pour chaque étage
    for (let k = 1; k <= i; k++) {
        ligne += '#';
    }
    
    // Affiche la ligne dans la console
    console.log(ligne);
}
