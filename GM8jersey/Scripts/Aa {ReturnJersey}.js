// Ajout d'un écouteur pour la touche "r"
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    toggleFrontBack(JerseysV1);
    toggleFrontBack(JerseysV2);
    toggleFrontBack(JerseysV3);
  } else if (event.key === "Backspace" || event.key === "x") {
    ReturnToHomePage();
  } else if (event.key === "Enter") {
    window.location.href = "https://gentlemates.com";
  } else if (event.key === "Tab") {
    window.location.href = "https://bio.link/thegreensuits";
  }
});

// Fonction pour échanger "Front" et "Back"
function toggleFrontBack(jerseysArray) {
  jerseysArray.forEach((jersey) => {
    // Récupérer la clé (nom du maillot) et l'élément DOM correspondant
    const [key, element] = Object.entries(jersey)[0];

    // Vérifie si la clé contient "Front"
    if (key.includes("Front")) {
      const backKey = key.replace("Front", "Back"); // Remplace "Front" par "Back"
      const backElement = document.getElementById(backKey); // Récupère l'élément "Back"

      // Vérifie si l'élément "Front" n'a pas la classe "hidden"
      if (element && !element.classList.contains("hidden") && backElement) {
        // Masquer l'élément "Front" et afficher "Back"
        element.classList.add("hidden");
        backElement.classList.remove("hidden");
      }
      // Sinon, vérifier si l'élément "Back" n'a pas la classe "hidden"
      else if (backElement && !backElement.classList.contains("hidden")) {
        // Masquer l'élément "Back" et afficher "Front"
        backElement.classList.add("hidden");
        element.classList.remove("hidden");
      }
    }
  });
}