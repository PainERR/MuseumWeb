// Attacher l'événement de changement de sélection à l'élément <select>
Menu.addEventListener("change", function () {
  // Récupérer la valeur sélectionnée
  var selectedValue = this.value;

  // Debug : afficher la valeur sélectionnée dans la console
  console.log("Valeur sélectionnée : " + selectedValue);

  // Selon la valeur sélectionnée, appeler la fonction correspondante
  if (Menu.value === "Default") {
    ReturnToHomePage(); // Fonction à définir pour ne rien afficher
  } else {
    // Cacher tous les jerseys et les vidéos d'arrière-plan
    BackgroundVideo.forEach((element) => {
      element.classList.add("hidden");
    });
    JerseysV1.forEach((obj) => {
      // Extraire la valeur DOM de l'objet
      const element = Object.values(obj)[0]; // Récupère la première (et seule) valeur de l'objet
      if (element) {
        element.classList.add("hidden");
      }
    });
    JerseysV2.forEach((obj) => {
      // Extraire la valeur DOM de l'objet
      const element = Object.values(obj)[0]; // Récupère la première (et seule) valeur de l'objet
      if (element) {
        element.classList.add("hidden");
      }
    });

    // Appeler les fonctions spécifiques selon la sélection
    DisplayJersey();
    switch (selectedValue) {
      case "Official2023Jersey":
        DisplayOfficial2023Jersey();
        break;
      case "Official2024Jersey":
        DisplayOfficial2024Jersey();
        break;
      case "Official2025Jersey":
        DisplayOfficial2025Jersey();
        break;
      case "Champions2023Jersey":
        DisplayChampions2023Jersey();
        break;
      case "Champions2024Jersey":
        DisplayChampions2024Jersey();
        break;
      case "LAGM82025Jersey":
        DisplayLAGM82025Jersey();
        break;
      case "FirstAnniversaryJersey":
        DisplayFirstYearAnniversary();
        break;
      default:
        console.log("Aucune sélection valide");
    }
  }
});