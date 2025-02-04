// Objet de correspondance des caractères spéciaux vers les chiffres
const specialCharToNumber = {
  à: "0",
  "&": "1",
  é: "2",
  '"': "3",
  "'": "4",
  "(": "5",
  ")": "6",
  "-": "7",
  è: "8",
  _: "9",
  ç: "10", // Exemple d'ajout pour "ç" si nécessaire
};

// Objet de correspondance des séquences de touches et des fonctions
const keySequenceFunctions = {
  O00: DisplayOfficial2023Jersey,
  O01: DisplayOfficial2024Jersey,
  O02: DisplayOfficial2025Jersey,
  C00: DisplayChampions2023Jersey,
  C01: DisplayChampions2024Jersey,
  L00: DisplayLAGM82025Jersey,
  Y00: DisplayFirstYearAnniversary,
};

// Stocke les touches pressées
let keySequence = "";

// Fonction pour convertir un caractère spécial en chiffre
function getNumberForSpecialChar(char) {
  return specialCharToNumber[char] || char; // Si le caractère spécial n'est pas mappé, retourne le caractère lui-même
}
// Liste des touches à ignorer
const ignoredKeys = [
  "Enter", // Touche Entrer
  " ", // Touche Espace
  "Backspace", // Touche Effacer
  "x", // Touche "x"
  "X", // Touche "X"
  "r", // Touche "r"
  "R", // Touche "R"
  "Tab",
];

// Fonction pour afficher un message d'erreur
function displayErrorMessage(message) {
  console.log("Affichage du message d'erreur : ", message); // Log de débogage

  // Crée un élément div pour le message d'erreur
  const errorMessageElement = document.createElement("div");
  errorMessageElement.classList.add("error-message");
  errorMessageElement.innerText = message;

  // Ajoute l'élément de message d'erreur à la page
  document.body.appendChild(errorMessageElement);

  // Applique la classe "show" pour animer l'apparition du message
  setTimeout(() => {
    errorMessageElement.classList.add("show");
  }, 10); // Le délai de 10ms pour appliquer l'animation (assure que le message est ajouté avant l'animation)

  // Supprime le message après 3 secondes
  setTimeout(() => {
    errorMessageElement.remove();
  }, 1000); // Message disparaît après 3 secondes
}

// Écouteur pour détecter les touches pressées
document.addEventListener("keydown", (event) => {
  // Si la touche fait partie de celles à ignorer, on arrête l'exécution
  if (ignoredKeys.includes(event.key)) {
    return; // Ignore la touche
  }

  // Vérifier si la touche est une lettre (en majuscule)
  if (/^[A-Za-z0-9]$/.test(event.key)) {
    // Si c'est une lettre, on l'ajoute directement à la séquence
    keySequence += event.key.toUpperCase();
  } else if (specialCharToNumber[event.key]) {
    // Si c'est un caractère spécial, on le convertit en chiffre
    const number = getNumberForSpecialChar(event.key);
    keySequence += number; // Ajoute le chiffre à la séquence
  }

  console.log("Séquence actuelle :", keySequence); // Débogage

  // Si la séquence atteint 3 caractères, vérifie la correspondance
  if (keySequence.length === 3) {
    // Vérifie si la séquence est valide et exécute la fonction
    if (keySequenceFunctions[keySequence]) {
      DisplayJersey(keySequence);
      BackgroundVideo.forEach((element) => {
        element.classList.add("hidden");
      });
      keySequenceFunctions[keySequence](); // Exécute la fonction associée à la séquence
    } else {
      // Si la séquence n'est pas valide, afficher un message d'erreur
      displayErrorMessage(`Séquence ${keySequence} invalide !`);
      console.warn(
        `Aucune fonction n'est associée à la séquence ${keySequence}`
      );
    }

    // Réinitialise la séquence après la détection de la séquence complète
    keySequence = "";
  }

  // Garde toujours les 3 derniers caractères au maximum
  keySequence = keySequence.slice(-3);
});