// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Side bar :
const sideBar = document.querySelector(".side-bar");
// Filtre opaque devant le contenu :
const darkFilter = document.querySelector(".dark-filter");

// Ouverture/fermeture de la sidebar au click sur hamburger :
btn.addEventListener("click", () => {
  sideBar.classList.toggle("visible");
  darkFilter.classList.toggle("dark-filter-on");
});

// Ranger la sidebar si on click sur le contenu principal

// Disparition de la sidebar au click à coté :
darkFilter.addEventListener("click", () => {
  sideBar.classList.toggle("visible");
  darkFilter.classList.toggle("dark-filter-on");
});

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
