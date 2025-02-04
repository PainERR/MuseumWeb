const htmlElement = document.documentElement;
const TitleDocument = document.getElementById("MainTitle");
const DescriptionJerseys = document.getElementById("JerseysDescription");
const DescriptionRosters = document.getElementById("RostersDescription");
const TitleJerseys = document.getElementById("JerseysTitle");
const TitleRosters = document.getElementById("RostersTitle");

LanguageButton.addEventListener("click", function () {
  // Verify the current language to change the TEXT
  if (htmlElement.lang === "en") {
    htmlElement.lang = "fr";
    Title.textContent = "Accueil - Musée M8";
    TitleDocument.innerHTML = "Bienvenue au musée de l'équipe<br/>GENTLE MATES!"
    TitleJerseys.textContent = "Les Maillots";
    FooterContact.textContent = "Contactez Nous!"
    DescriptionJerseys.innerHTML = "Sur cette page revivez l'histoire de Gentle Mates à travers tous les maillots qu'ils ont pu faire. Revivez les moments forts de l'équipe. Grâce à tous les maillots qui ont marqué à l'histoire de l'équipe, chacun à leur manière, revivez cette histoire à travers eux.";
    TitleRosters.textContent = "Les Equipes";
    DescriptionRosters.innerHTML = "Sur cette page, vous retrouverez toutes les anciennes équipes Gentle Mates. Redécouvrez les joueurs que vous avez soutenus par le passé et les plus récents. Dans les hauts comme dans les bas, vous étiez derrière eux pour les soutenir et les pousser à se perfectionner.";
    MoreInformation.textContent = "En Savoir Plus";
  } else {
    htmlElement.lang = "en";
    Language.textContent = "FR";
    Title.textContent = "Home - M8 Museum";
    TitleDocument.innerHTML = "Welcome to the museum of the team<br/>GENTLE MATES!"
    TitleJerseys.textContent = "The Jerseys";
    FooterContact.textContent = "Contact Us!"
    DescriptionJerseys.innerHTML = "On this webpage, remember the story of Gentle Mates through all the jersey that have been release. Relive the good times of the team. Because of all the jersey that marked the history of the teal, each on its own, relive this story through them.";
    TitleRosters.textContent = "The Rosters";
    DescriptionRosters.innerHTML = "On this webpage, you could find all of the previous Gentle Mates rosters. Rediscover all the players that you supported in the past and the more recent ones. For the better and the worst, you were with us to support them and make them progress in their art.";
    MoreInformation.textContent = "More Informations";
  }
});