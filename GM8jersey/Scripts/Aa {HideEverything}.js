function ReturnToHomePage() {
  // Masquer tous les éléments de la vidéo d'arrière-plan
  if (Array.isArray(BackgroundVideo)) {
    BackgroundVideo.forEach((element) => {
      if (element) element.classList.add("hidden");
    });
  } else {
    console.warn("BackgroundVideo n'est pas une liste ou est indéfini.");
  }

  JerseysV1.forEach((jerseyV1) => {
    // Chaque élément du tableau est un objet contenant une seule clé-valeur
    Object.values(jerseyV1).forEach((element) => {
      if (element) {
        element.classList.add("hidden");
      }
    });
  });
  JerseysV2.forEach((jerseyV2) => {
    // Chaque élément du tableau est un objet contenant une seule clé-valeur
    Object.values(jerseyV2).forEach((element) => {
      if (element) {
        element.classList.add("hidden");
      }
    });
  });
  JerseysV3.forEach((jerseyV3) => {
    // Chaque élément du tableau est un objet contenant une seule clé-valeur
    Object.values(jerseyV3).forEach((element) => {
      if (element) {
        element.classList.add("hidden");
      }
    });
  });

  Menu.value = "Default";
  // Masquer les autres éléments
  const elementsToHide = [
    JerseyTitle,
    TextBubble,
    Container,
    Container2,
    Option,
    Cross,
    Form,
    Form2,
    JerseyLogo,
  ];

  // Parcourir la liste des éléments
  elementsToHide.forEach((element) => {
    if (element) {
      // Si l'élément existe, retirer la classe "hidden"
      element.classList.add("hidden");
    } else {
      console.warn(`L'élément '${element?.name || element}' est introuvable.`);
    }
  });

  const elementsToShow = [Logo];

  // Parcourir la liste des éléments
  elementsToShow.forEach((element) => {
    if (element) {
      // Si l'élément existe, retirer la classe "hidden"
      element.classList.remove("hidden");
    } else {
      console.warn(`L'élément '${element?.name || element}' est introuvable.`);
    }
  });
  MenuBars.forEach((menuBar) => {
    if (menuBar) {
      menuBar.setAttribute("fill", "#fff"); // Change la couleur de remplissage
    }
  });
  LogoPhone.setAttribute("fill", "#ffffff"); // Change la couleur de remplissage
}