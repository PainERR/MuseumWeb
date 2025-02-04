// Add an interaction when you press the LanguageButton
LanguageButton.addEventListener("click", function () {
  // Verify the current language to change the TEXT
  if (htmlElement.lang === "en") {
    htmlElement.lang = "fr";
    Title.textContent = "Maillots - Musée GM8";
    Menu.value = "Default";
    Language.textContent = "EN";
    Choice.textContent = "Selectionner Un Maillot";
    Website.textContent = "Site Officiel↗";
    Socials.textContent = "Réseaux Ultras↗";
    // Selectors
    One.textContent = "O000 - Maillot Officiel 2023";
    Two.textContent = "C000 - Maillot Champions 2023";
    Three.textContent = "O001 - Maillot Officiel 2024";
    Four.textContent = "Y001 - Maillot Premier Anniversaire";
    Five.textContent = "C001 - Maillot Champions 2024";
    Six.textContent = "O002 - Maillot Officiel 2025";
    // Functions
    ReturnToHomePage();
  } else {
    htmlElement.lang = "en";
    Language.textContent = "FR";
    Title.textContent = "Jerseys - GM8 Museum";
    Menu.value = "Default";
    Choice.textContent = "Select The Jersey";
    Website.textContent = "Official Website↗";
    Socials.textContent = "Ultra's Socials↗";
    // Selectors
    One.textContent = "O000 - Official Jersey 2023";
    Two.textContent = "C000 - Champions Jersey 2023";
    Three.textContent = "O001 - Official Jersey 2024";
    Four.textContent = "Y001 -  First Year Anniversary";
    Five.textContent = "C001 - Champions Jersey 2024";
    Six.textContent = "O002 - Official Jersey 2025";
    // Functions
    ReturnToHomePage();
  }
});