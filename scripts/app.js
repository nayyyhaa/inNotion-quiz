/*----------NAV BAR------------*/

//hamburger
let hamburgerBars = document.querySelector(".hamburger .fa");
let navItems = document.querySelector(".nav-items");
let links = navItems.querySelectorAll(".nav-items a");

//nav funtions
function toogleNavBar() {
  navItems.classList.toggle("show-nav");
  hamburgerBars.className = hamburgerBars.className == "fa fa-bars" ? "fa fa-times" : "fa fa-bars";
}

hamburgerBars.addEventListener("click", toogleNavBar);

links.forEach((link) => {
  link.addEventListener("click", toogleNavBar);
});

/*----------DARK MODE------------*/
//moon icon
let darkModeElement = document.querySelector(".dark-mode");
let content = document.querySelector(".content");
let darkModeInStorage = false;

//function

const toogleDarkMode = (darkModeInStorage) => {
  content.classList.toggle("dark");
  console.log(darkModeInStorage, "t");
  darkModeInStorage = !darkModeInStorage;
  localStorage.setItem("darkModeInStorage", JSON.stringify(darkModeInStorage));
};

const applyDarkMode = (darkModeInStorage) => {
  if (darkModeInStorage) {
    content.classList.add("dark");
    darkModeInStorage = true;
  } else {
    content.classList.remove("dark");
    darkModeInStorage = false;
  }
  localStorage.setItem("darkModeInStorage", JSON.stringify(darkModeInStorage));
};

darkModeElement.addEventListener("click", () => {
  toogleDarkMode(darkModeInStorage);
});

const checkLocalStorage = () => {
  if (localStorage.getItem("darkModeInStorage") === null) {
    darkModeInStorage = false;
  } else {
    darkModeInStorage = JSON.parse(localStorage.getItem("darkModeInStorage"));
  }
  applyDarkMode(darkModeInStorage);
};

checkLocalStorage();