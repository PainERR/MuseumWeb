function NextRosters() {
        if (currentRoster === "Valorant") {
            currentRoster = "Fortnite";
            DisplayFortniteRosters();
        } else if (currentRoster === "Fortnite") {
            currentRoster = "Rocket League";
            DisplayRocketLeagueRosters();
        } else if (currentRoster === "Rocket League") {
            currentRoster = "League of Legends";
            DisplayLeagueOfLegendsRosters();
        } else if (currentRoster === "League of Legends") {
            currentRoster = "TeamFight Tactics";
            DisplayTeamFightTacticsRosters();
        } else if (currentRoster === "TeamFight Tactics") {
            currentRoster = "Age of Empires";
            DisplayAgeOfEmpiresRosters();
        } else if (currentRoster === "Age of Empires") {
            currentRoster = "Call of Duty";
            DisplayCallOfDutyRosters();
        } else if (currentRoster === "Call of Duty") {
            currentRoster = "Valorant";
            DisplayValorantRosters();
        }
        if (!dropdownMenu.classList.contains("hidden")) {
            dropdownMenu.classList.add("hidden");
        }
}