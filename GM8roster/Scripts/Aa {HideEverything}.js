var Elements = [
  document.getElementById("main-container"),
  document.getElementById("Logo")
]

function ReturnToHomePage() {
  Elements.forEach((elements) => {
    if (elements) {
      elements.classList.remove('hidden');
    }
  });
  if (gameElement.classList.contains("show")) {
    // Cacher l'élément
    gameElement.classList.remove("show"); // Enlève la classe pour déclencher le glissement
      setTimeout(() => {
        gameElement.style.display = "none"; // Masque complètement après l'animation
      }, 1000); // Délai basé sur la durée de la transition (1s ici)
  }
  setTimeout(() => {
    Elements.forEach((elements) => {
      if (elements) {
        elements.classList.add('visible');
      }
    });
  }, 750)

  BackgroundVideo.forEach((backgroundVideo) => {
    if (backgroundVideo) {
      backgroundVideo.classList.add('hidden');
    }
  });
  document.getElementById("BackgroundMainVideo").classList.add('hidden');
  const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.classList.remove('hidden');
  });
}