let currentRoster = "";
// Sélectionner l'élément SVG avec l'ID "overlay-rocket-league"
const rectElement = document.getElementById("overlay-rocket-league");
const GameTitle = document.getElementById("GameTitle");

function DisplayRosters() {  
  const gameElement = document.getElementById("gameElement");

  if (!gameElement.classList.contains("show")) {
    // Afficher l'élément
    gameElement.style.display = "block"; // Affiche immédiatement l'élément
    setTimeout(() => {
      gameElement.classList.add("show"); // Ajoute la classe pour l'animation
    }, 10); // Petit délai pour garantir que `display: block` est appliqué avant l'animation
  }
  document.getElementById("BackgroundMainVideo").classList.add('hidden');
  BackgroundVideo.forEach((backgroundVideo) => {
    if (backgroundVideo) {
      backgroundVideo.classList.add('hidden');
    }
  });
  const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.classList.add('hidden');
  });
  Elements.forEach((elements) => {
    if (elements) {
      elements.classList.add('hidden');
      elements.classList.remove('visible');
    }
  });
}
function DisplayValorantRosters() {
  DisplayRosters();
  currentRoster = "Valorant";
  GameTitle.textContent = "Valorant";
  document.getElementById("BackgroundVALOVideo").classList.remove('hidden');

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-Valorant)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}
function DisplayFortniteRosters() {
  DisplayRosters();
  currentRoster = "Fortnite";
  GameTitle.textContent = "Fortnite";

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-Fortnite)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}
function DisplayRocketLeagueRosters() {
  DisplayRosters();
  currentRoster = "Rocket League";
  GameTitle.textContent = "Rocket League";
  document.getElementById("BackgroundRLVideo").classList.remove('hidden');

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-RocketLeague)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}
function DisplayLeagueOfLegendsRosters() {
  DisplayRosters();
  currentRoster = "League of Legends";
  GameTitle.textContent = "League of Legends";

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-LeagueOfLegends)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}
function DisplayTeamFightTacticsRosters() {
  DisplayRosters();
  currentRoster = "TeamFight Tactics";
  GameTitle.textContent = "TeamFight Tactics";

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-TeamFightTactics)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}
function DisplayAgeOfEmpiresRosters() {
  DisplayRosters();
  currentRoster = "Age of Empires";
  GameTitle.textContent = "Age of Empires";

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-AgeOfEmpires)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}
function DisplayCallOfDutyRosters() {
  DisplayRosters();
  currentRoster = "Call of Duty";
  GameTitle.textContent = "Call of Duty";

  // Vérifier si l'élément a été trouvé
  if (rectElement !== null) {
    // Changer l'attribut 'fill' à une nouvelle couleur
    rectElement.setAttribute("fill", "var(--form-CallOfDuty)"); // Remplacer par la couleur souhaitée
  } else {
    console.error("L'élément avec l'ID 'overlay-rocket-league' n'a pas été trouvé.");
  }
  console.log("Roster actuel : ", currentRoster);
}