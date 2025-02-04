function DisplayJersey() {
  JerseysV1.forEach((jerseyV1) => {
    // Chaque élément du tableau est un objet contenant une seule clé-valeur
    Object.values(jerseyV1).forEach((element) => {
      if (element) {
        element.classList.add("hidden");
      } else {
        console.warn(`Element not found for key: ${key}`);
      }
    });
  });
  JerseysV2.forEach((jerseyV2) => {
    // Chaque élément du tableau est un objet contenant une seule clé-valeur
    Object.values(jerseyV2).forEach((element) => {
      if (element) {
        element.classList.add("hidden");
      } else {
        console.warn(`Element not found for key: ${key}`);
      }
    });
  });
  JerseysV3.forEach((jerseyV3) => {
    // Chaque élément du tableau est un objet contenant une seule clé-valeur
    Object.values(jerseyV3).forEach((element) => {
      if (element) {
        element.classList.add("hidden");
      } else {
        console.warn(`Element not found for key: ${key}`);
      }
    });
  });

  const elementsToShow = [
    JerseyTitle,
    TextBubble,
    Container,
    Option,
    Cross,
    Form,
    Form2,
    JerseyLogo,
  ];
  Container2.classList.add("hidden");

  // Parcourir la liste des éléments
  elementsToShow.forEach((element) => {
    if (element) {
      // Si l'élément existe, retirer la classe "hidden"
      element.classList.remove("hidden");
    } else {
      console.warn(`L'élément '${element?.name || element}' est introuvable.`);
    }
  });
  if (window.innerWidth > 500) {
    if (htmlElement.lang === "en") {
      Option.innerHTML = "Press On The Key R<br />To Return The Jersey";
    } else if (htmlElement.lang === "fr") {
      Option.innerHTML =
        "Appuyez Sur La Touche R<br />Pour Retourner Le Maillot";
    }
  }
  if (window.innerWidth < 500) {
    if (htmlElement.lang === "en") {
      Option.innerHTML = "Press On The Jersey<br />To Get More Informations";
    } else if (htmlElement.lang === "fr") {
      Option.innerHTML = "Appuyez sur le maillot<br />Pour Plus D'informations";
    }
  }
}

function HideDropdownList() {
  const dropdownList = document.getElementById("DropdownList"); // Récupère l'élément

  if (dropdownList && !dropdownList.classList.contains("hiddenPhone")) {
    // Vérifie si l'élément existe et n'a pas la classe
    dropdownList.classList.add("hiddenPhone"); // Ajoute la classe "hiddenPhone"
  } else {
    dropdownList.classList.remove("hiddenPhone"); // Retire la classe "hiddenPhone"
  }
}

function DisplayDescription() {
  if (window.innerWidth < 500) {
    const Container = document.getElementById("Container2"); // Récupère l'élément
    if (Container && !Container.classList.contains("hidden")) {
      Container.classList.add("hidden");
      if (htmlElement.lang === "en") {
        Option.innerHTML = "Press On The Jersey<br />To Get More Informations";
      } else if (htmlElement.lang === "fr") {
        Option.innerHTML =
          "Appuyez sur le maillot<br />Pour Plus D'informations";
      }
    } else {
      Container.classList.remove("hidden");
      if (htmlElement.lang === "en") {
        Option.innerHTML = "Press On The Jersey<br />To Hide The Informations";
      } else if (htmlElement.lang === "fr") {
        Option.innerHTML =
          "Appuyez sur le maillot<br />Pour Moins D'informations";
      }
    }
  }
}