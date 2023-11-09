const unlikedBtn = document.querySelectorAll(".like-button")
const card = document.querySelectorAll(".projects-panel > a > div");


unlikedBtn.forEach(heart => {
  heart.addEventListener("mousedown", function (event) {
    event.stopPropagation();
    let liked = heart.getAttribute("data-liked") === "true";
      if (liked == true) {
        heart.classList.remove("animate")
        heart.src = "assets/love.png";
      
    
      } else {
        heart.src = "assets/heart.png";
        heart.classList.add("animate");
   
      }
      heart.setAttribute("data-liked", !liked);
    });
  });


card.forEach(cards => {
    cards.addEventListener("mousedown", () => {
  cards.style.transform = "translate(10px,10px)";

  cards.addEventListener("mouseup", () => {
    cards.style.transform = ""
  })
  cards.addEventListener("mouseleave", () => {
    cards.style.transform = "";
  });
});
})