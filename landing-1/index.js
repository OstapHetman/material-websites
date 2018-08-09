// Import SCSS files
import "./scss/layout/_navigation.scss";
import "./scss/layout/_header.scss";
import "./scss/layout/_features.scss";
import "./scss/layout/_about.scss";
import "./scss/layout/_projects.scss";
import "./scss/layout/_plans.scss";
import "./scss/layout/_team.scss";
import "./scss/layout/_contact.scss";
import "./scss/layout/_footer.scss";

// Variables
const nav = document.querySelector(".navbar-fixed nav");
const brand = document.querySelector(".brand-logo");

// Events Listener
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 200) {
    nav.classList.add("blue", "darken-4");
    brand.style.fontSize = "1.4rem";
  } else {
    nav.classList.remove("blue", "darken-4");
    brand.style.fontSize = "1.8rem";
  }
});

$(document).ready(function() {
  $(".sidenav").sidenav();
});
