// Add an interaction when you press the LanguageButton
LanguageButton.addEventListener("click", function () {
  // Verify the current language to change the TEXT
  if (htmlElement.lang === "en") {
    htmlElement.lang = "fr";
    Language.textContent = "EN";
    Title.textContent = "Equipes - Musée GM8";
    // Functions
    ReturnToHomePage();
  } else {
    htmlElement.lang = "en";
    Language.textContent = "FR";
    Title.textContent = "Rosters - GM8 Museum";
    // Functions
    ReturnToHomePage();
  }
});