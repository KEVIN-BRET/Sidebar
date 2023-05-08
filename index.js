// Side bar :
const sideBar = document.querySelector(".side-bar");
// Contenu :
const content = document.querySelector(".content");

// Ouverture/fermeture de la sidebar au click sur hamburger :
btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

// Disparition de la sidebar au click à coté :
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
