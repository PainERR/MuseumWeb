const dropdownMenu = document.getElementById("DropdownList");

function DisplayDropdownContent() {
  if (currentRoster === "Valorant") {
    document.getElementById("2023").classList.remove('hidden');
    document.getElementById("2024").classList.remove('hidden');
    document.getElementById("2025").classList.remove('hidden');
  } else if (currentRoster === "Fortnite") {
    document.getElementById("2023").classList.add('hidden');
    document.getElementById("2024").classList.remove('hidden');
    document.getElementById("2025").classList.remove('hidden');
  } else if (currentRoster === "Rocket League") {
    document.getElementById("2023").classList.add('hidden');
    document.getElementById("2024").classList.remove('hidden');
    document.getElementById("2025").classList.remove('hidden');
  } else if (currentRoster === "League of Legends") {
    document.getElementById("2023").classList.add('hidden');
    document.getElementById("2024").classList.remove('hidden');
    document.getElementById("2025").classList.remove('hidden');
  } else if (currentRoster === "TeamFight Tacics") {
    document.getElementById("2023").classList.add('hidden');
    document.getElementById("2024").classList.remove('hidden');
    document.getElementById("2025").classList.remove('hidden');
  } else if (currentRoster === "Age of Empires") {
    document.getElementById("2023").classList.add('hidden');
    document.getElementById("2024").classList.remove('hidden');
    document.getElementById("2025").classList.remove('hidden');
  } else if (currentRoster === "Call of Duty") {
    document.getElementById("2023").classList.add('hidden');
    document.getElementById("2024").classList.add('hidden');
    document.getElementById("2025").classList.remove('hidden');
  }
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
  } else {
    dropdownMenu.classList.add("hidden");
  }
}
function HideDropdownList() {
  if (!dropdownMenu.classList.contains('hidden')) {
    dropdownMenu.classList.add('hiddden');
  }
}

