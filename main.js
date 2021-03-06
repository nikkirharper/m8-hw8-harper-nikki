// Navigation sub-menu transition

var button1 = document.getElementById("button1"); 
var wrapper1 = document.getElementById("products-wrapper"); 

function showWrapper() {
    wrapper1.classList.add("show");
}

function hideWrapper() {
    wrapper1.classList.remove("show"); 
}

button1.addEventListener("mouseover", showWrapper);
button1.addEventListener("mouseleave", hideWrapper); 
