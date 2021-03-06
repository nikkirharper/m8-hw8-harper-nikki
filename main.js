// Navigation sub-menu transition for products
var button1 = document.getElementById("button1");
var wrapper1 = document.getElementById("products-wrapper");

function showWrapper1() {
    wrapper1.classList.add("show");
}

function hideWrapper1() {
    wrapper1.classList.remove("show"); 
}

button1.addEventListener("mouseover", showWrapper1);
button1.addEventListener("mouseleave", hideWrapper1);


// Navigation sub-menu transition for services
var button2 = document.getElementById("button2");
var wrapper2 = document.getElementById("services-wrapper");

function showWrapper2() {
    wrapper2.classList.add("show");
}

function hideWrapper2() {
    wrapper2.classList.remove("show"); 
}

button2.addEventListener("mouseover", showWrapper2);
button2.addEventListener("mouseleave", hideWrapper2);


// Navigation sub-menu transition for services
var button3 = document.getElementById("button3");
var wrapper3 = document.getElementById("company-wrapper");

function showWrapper3() {
    wrapper3.classList.add("show");
}

function hideWrapper3() {
    wrapper3.classList.remove("show"); 
}

button3.addEventListener("mouseover", showWrapper3);
button3.addEventListener("mouseleave", hideWrapper3); 
