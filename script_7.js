// Fonction pour vérifier si une phrase est une question
function isQuestion(phrase) {
    return phrase.trim().endsWith("?");
}

// Fonction pour vérifier si une phrase est en majuscules
function isShouting(phrase) {
    return phrase === phrase.toUpperCase() && phrase.trim().length > 0;
}

// Fonction pour vérifier si une phrase contient le mot "Fortnite"
function mentionsFortnite(phrase) {
    return phrase.toLowerCase().includes("fortnite");
}

// Fonction pour gérer la conversation avec le bot
function chatWithBot() {
    let phrase = prompt("Dis quelque chose au bot :");

    if (phrase === null || phrase.trim() === "") {
        console.log("t'es en PLS ?");
    } else if (isQuestion(phrase)) {
        console.log("Ouais Ouais...");
    } else if (isShouting(phrase)) {
        console.log("Pwa, calme-toi...");
    } else if (mentionsFortnite(phrase)) {
        console.log("on s' fait une partie soum-soum ?");
    } else {
        console.log("balek.");
    }
}

// Lancement de la conversation avec le bot
chatWithBot();
