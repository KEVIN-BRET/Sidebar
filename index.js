// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Side bar :
const sideBar = document.querySelector(".side-bar");
// Contenu :
const content = document.querySelector(".content");

// Ouverture/fermeture de la sidebar au click sur hamburger :
btn.addEventListener("click", () => {
  sideBar.classList.toggle("visible");
  // apparence du "burger" !
  btn.classList.toggle("open");
});

// Ranger la sidebar si on click sur le contenu principal

// Disparition de la sidebar au click à coté :
content.addEventListener("click", () => {
  sideBar.classList.remove("visible");
  // apparence du "burger" !
  btn.classList.remove("open");
});

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix
