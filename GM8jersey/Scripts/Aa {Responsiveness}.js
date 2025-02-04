console.log("Largeur de la fenêtre :", window.innerWidth);
function AdjustLanguageButton() {
  if (window.innerWidth < 500) {
    LanguageButton.style.left = "auto";
    LanguageButton.style.right = "12px";
  } else {
    LanguageButton.style.left = "10px";
    LanguageButton.style.right = "auto";
  }
}
AdjustLanguageButton();
window.addEventListener("resize", AdjustLanguageButton);

function ChangeValueByViewport() {
  Form.style.top = "var(--form-position-top)";
  Form.style.right = "var(--form-position-right)";
  if (window.innerWidth >= 1398) {
    document.getElementById("Header").style.display = "block";
    JerseysV1.forEach((jerseyV1) => {
      // Chaque élément du tableau est un objet contenant une seule clé-valeur
      Object.values(jerseyV1).forEach((element) => {
        if (element) {
          // Vérification que l'élément existe
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV1-position-top)";
          element.style.right = "var(--jerseyV1-position-right)";
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
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV2-position-top)";
          element.style.right = "var(--jerseyV2-position-right)";
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
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV3-position-top)";
          element.style.right = "var(--jerseyV3-position-right)";
        } else {
          console.warn("Un élément n'a pas été trouvé dans le DOM.");
        }
      });
    });
  } else if (window.innerWidth >= 1365) {
    document.getElementById("Header").style.display = "block";
    JerseysV1.forEach((jerseyV1) => {
      // Chaque élément du tableau est un objet contenant une seule clé-valeur
      Object.values(jerseyV1).forEach((element) => {
        if (element) {
          // Vérification que l'élément existe
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV1-position-top)";
          element.style.right = "var(--jerseyV1-position-right)";
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
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV2-position-top)";
          element.style.right = "var(--jerseyV2-position-right)";
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
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV3-position-top)";
          element.style.right = "var(--jerseyV3-position-right)";
        } else {
          console.warn("Un élément n'a pas été trouvé dans le DOM.");
        }
      });
    });
  } else if (window.innerWidth >= 1320) {
    document.getElementById("Header").style.display = "block";
    JerseysV1.forEach((jerseyV1) => {
      // Chaque élément du tableau est un objet contenant une seule clé-valeur
      Object.values(jerseyV1).forEach((element) => {
        if (element) {
          // Vérification que l'élément existe
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV1-position-top)";
          element.style.right = "var(--jerseyV1-position-right)";
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
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV2-position-top)";
          element.style.right = "var(--jerseyV2-position-right)";
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
          element.classList.remove("centered-image");
          element.style.position = "absolute";
          element.style.top = "var(--jerseyV3-position-top)";
          element.style.right = "var(--jerseyV3-position-right)";
        } else {
          console.warn("Un élément n'a pas été trouvé dans le DOM.");
        }
      });
    });
  }
}
ChangeValueByViewport();
window.addEventListener("resize", () => {
  AdjustLanguageButton();
  ChangeValueByViewport();
});