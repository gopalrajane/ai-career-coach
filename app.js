const primary = document.querySelector(".primary");

primary.addEventListener("click",()=>{

alert("Welcome to AI Career Coach!");

});

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.background="#2563eb";

});

card.addEventListener("mouseleave",()=>{

card.style.background="#1e293b";

});

});