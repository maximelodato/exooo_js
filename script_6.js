// Tableau de correspondance entre les codons de l'ARN et les acides aminés
const codonsToAminoAcids = {
    "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine",
    "AGU": "Sérine", "AGC": "Sérine", "CCU": "Proline", "CCC": "Proline",
    "CCA": "Proline", "CCG": "Proline", "UUA": "Leucine", "UUG": "Leucine",
    "UUC": "Phénylalanine", "UUU": "Phénylalanine", "CGU": "Arginine",
    "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine",
    "AGG": "Arginine", "UAU": "Tyrosine", "UAC": "Tyrosine"
};

// Fonction pour traduire un ARN en acides aminés
function translateARNToAminoAcids(arn) {
    let aminoAcids = [];
    for (let i = 0; i < arn.length; i += 3) {
        let codon = arn.slice(i, i + 3);
        let aminoAcid = codonsToAminoAcids[codon];
        if (aminoAcid) {
            aminoAcids.push(aminoAcid);
        } else {
            aminoAcids.push("STOP");
        }
    }
    return aminoAcids.join("-");
}

// ARNs à traduire en protéines
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

// Traduction des ARNs en protéines et affichage dans la console
console.log("ARN 1 : " + translateARNToAminoAcids(arn1));
console.log("ARN 2 : " + translateARNToAminoAcids(arn2));
