// Synchroniser les options du dropdown personnalisé avec le menu déroulant
document.getElementById("DropdownList").addEventListener("click", (event) => {
  // Vérifie si l'utilisateur a cliqué sur une option valide
  if (event.target.tagName === "OPTION") {
    const selectedValue = event.target.value; // Récupère la valeur de l'option cliquée

    // Met à jour le menu déroulant standard avec la même valeur
    const menu = document.getElementById("Menu");
    menu.value = selectedValue;

    console.log(`Option sélectionnée : ${selectedValue}`);
  }
});

// Gestion des changements dans le menu déroulant standard
document.getElementById("Menu").addEventListener("change", (event) => {
  const selectedValue = event.target.value;

  console.log(`Changement dans le menu : ${selectedValue}`);
});