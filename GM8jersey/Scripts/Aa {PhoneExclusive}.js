const elements2Hide = [JerseyTitle, JerseyLogo, TextBubble, Form, Logo, Cross];
function ApplyPhoneSpecificities() {
  if (window.innerWidth < 500) {
    document.getElementById("Header").style.display = "none";
    Option.style.top = "340px";
    Option.classList.add("centered-image");
    document.getElementById("DDlist").classList.remove("hiddenPhone");
    LogoPhone.classList.remove("hiddenPhone");
    Form2.classList.remove("hiddenPhone");
    LanguageButton.style.top = "23px";
    if (Array.isArray(BackgroundVideo)) {
      BackgroundVideo.forEach((element) => {
        if (element) element.classList.add("hiddenPhone");
      });
    }
    JerseysV1.forEach((jerseyV1) => {
      // Chaque élément du tableau est un objet contenant une seule clé-valeur
      Object.values(jerseyV1).forEach((element) => {
        if (element) {
          // Vérification que l'élément existe
          element.classList.add("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV1-position-top-500)";
          element.style.right = "var(--jerseyV1-position-500)";
          element.style.height = "var(--jerseyV1-height-500)";
          element.style.width = "var(--jerseyV1-width-500)";
        } else {
          console.warn("Un élément n'a pas été trouvé dans le DOM.");
        }
      });
    });

    JerseysV2.forEach((jerseyV2) => {
      // Chaque élément du tableau est un objet contenant une seule clé-valeur
      Object.values(jerseyV2).forEach((element) => {
        if (element) {
          // Vérification que l'élément existe
          element.classList.add("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV2-position-top-500)";
          element.style.right = "var(--jerseyV2-position-500)";
          element.style.height = "var(--jerseyV2-height-500)";
          element.style.width = "var(--jerseyV2-width-500)";
        } else {
          console.warn("Un élément n'a pas été trouvé dans le DOM.");
        }
      });
    });

    JerseysV3.forEach((jerseyV3) => {
      // Chaque élément du tableau est un objet contenant une seule clé-valeur
      Object.values(jerseyV3).forEach((element) => {
        if (element) {
          // Vérification que l'élément existe
          element.classList.add("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV3-position-top-500)";
          element.style.right = "var(--jerseyV3-position-500)";
          element.style.height = "var(--jerseyV3-height-500)";
          element.style.width = "var(--jerseyV3-width-500)";
        } else {
          console.warn("Un élément n'a pas été trouvé dans le DOM.");
        }
      });
    });

    // Parcourir la liste des éléments
    elements2Hide.forEach((element) => {
      if (element) {
        // Si l'élément existe, retirer la classe "hidden"
        element.classList.add("hiddenPhone");
      } else {
        console.warn(
          `L'élément '${element?.name || element}' est introuvable.`
        );
      }
    });
  }
}
ApplyPhoneSpecificities();