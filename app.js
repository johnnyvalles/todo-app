"use strict"; 

// Grab first instance of a label element
const createInput = document.querySelector("input"); 

// Grab first instance of a button w/ specified class .enter
const createButton = document.querySelector(".enter"); 

// Add event listeners for debug
createButton.addEventListener("click", (e) => {    
    let p = document.createElement("p"); 
    p.textContent = `🛠 [ CLICK TO DELETE ] ---> ${createInput.value}`;
    p.style.backgroundColor = "#2ecc71"; 
    p.style.padding = "1rem";
    p.style.width =  "40%";
    p.style.maxWidth = "35rem"; 
    p.style.margin = "0.5rem auto"; 
    p.style.borderRadius = "5px";
    p.style.fontFamily = "Oswald, sans-serif"; 
    p.style.color = "#FFF";
    
    p.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "#e74c3c";
    });

    p.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "#2ecc71"; 
    });

    p.addEventListener("click", (e) => {
        document.body.removeChild(e.target);  
    }); 

    document.body.appendChild(p); 
});