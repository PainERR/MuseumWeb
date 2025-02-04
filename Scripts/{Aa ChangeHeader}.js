document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (scrollPosition / pageHeight) * 100;
    let headerElements = document.querySelectorAll("header-zone div");
    
    headerElements.forEach(el => el.classList.remove("selectedElement"));
    
    if (scrollPercentage >= 70) {
      if (headerElements[2]) headerElements[2].classList.add("selectedElement");
    } else if (scrollPercentage >= 40) {
      if (headerElements[0]) headerElements[0].classList.add("selectedElement");
    } else {
      if (headerElements[1]) headerElements[1].classList.add("selectedElement");
    }
  });

  function scrollToPercentage(percent) {
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = (percent / 100) * pageHeight;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
}

function GoToElements() {
    scrollToPercentage(58); // Scroll à 10% du haut de la page
}

function GoToHomePage() {
    scrollToPercentage(0); // Scroll tout en haut
}

function GoToContacts() {
    scrollToPercentage(120); // Scroll à 30% du haut de la page
}