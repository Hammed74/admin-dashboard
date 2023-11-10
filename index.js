const unlikedBtn = document.querySelectorAll(".like-button");
const card = document.querySelectorAll(".projects-panel > a > div");
const menuBtn = document.querySelector(".menu-button-container");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const headingContainer = document.querySelector(".heading-container");
const main = document.querySelector(".main");
const bottomBar = document.querySelector(".bottom-bar");
const home = document.querySelector(".home");
const closeBtn = document.querySelector(".close");

menuBtn.addEventListener("touchend", () => {
  sidebar.style.left = "0px";
  headingContainer.style.filter = "brightness(0.1)";
  main.style.filter = "brightness(0.1)";
  bottomBar.style.filter = "brightness(0.1)";
  document.body.style.overflow = "hidden";
});

menuBtn.addEventListener("click", () => {
  sidebar.style.left = "0px";
  headingContainer.style.filter = "brightness(0.1)";
  main.style.filter = "brightness(0.1)";
  bottomBar.style.filter = "brightness(0.1)";
});

closeBtn.addEventListener("touchend", () => {
  sidebar.style.left = "-350px";
  headingContainer.style.filter = "";
  main.style.filter = "";
  bottomBar.style.filter = "";
  document.body.style.overflow = "";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-350px";
  headingContainer.style.filter = "";
  main.style.filter = "";
  bottomBar.style.filter = "";
});

unlikedBtn.forEach((heart) => {
  heart.addEventListener("mousedown", function (event) {
    event.stopPropagation();
    let liked = heart.getAttribute("data-liked") === "true";
    if (liked == true) {
      heart.classList.remove("animate");
      heart.src = "assets/love.png";
    } else {
      heart.src = "assets/heart.png";
      heart.classList.add("animate");
    }
    heart.setAttribute("data-liked", !liked);
  });

  heart.addEventListener("touchstart", function (event) {
    event.stopPropagation();
    let liked = heart.getAttribute("data-liked") === "true";
    if (liked == true) {
      heart.classList.remove("animate");
      heart.src = "assets/love.png";
    } else {
      heart.src = "assets/heart.png";
      heart.classList.add("animate");
    }
    heart.setAttribute("data-liked", !liked);
  });
});

card.forEach((cards) => {
  cards.addEventListener("touchstart", (event) => {
    event.preventDefault();
    cards.style.transform = "translate(10px,10px)";
  });
  cards.addEventListener("touchend", (event) => {
    event.preventDefault();
    cards.style.transform = "";
  });
  cards.addEventListener("mousedown", (event) => {
    event.preventDefault();
    cards.style.transform = "translate(10px,10px)";

    cards.addEventListener("mouseup", () => {
      cards.style.transform = "";
    });
    cards.addEventListener("mouseleave", () => {
      cards.style.transform = "";
    });
  });
});

console.log(window.innerWidth);
