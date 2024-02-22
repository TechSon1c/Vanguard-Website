


let submitdoc = document.getElementById('submitdoc')
let scrolltoAbout = document.getElementById('about-us')
let shipping = document.getElementById('shipping')
let services = document.getElementById('services')
let transport = document.getElementById('transport')
const targetElement = document.getElementById("home");


function submitSc(event) {
    event.preventDefault();
    if(submitdoc){
        submitdoc.scrollIntoView();
    }
}


function about(event) {
    event.preventDefault();
    if(scrolltoAbout){
        scrolltoAbout.scrollIntoView();
    }
}


function servicesSc(event) {
    event.preventDefault;
    if(services){
        services.scrollIntoView();
    }
}


function shippingSc(event) {
    event.preventDefault;
    if(shipping){
        shipping.scrollIntoView();
    }
}

function transportSc(event) {
    event.preventDefault;
    if(transport){
        transport.scrollIntoView();
    }
}

function scrollToHome() { 
    const offsetTop = targetElement.offsetTop; 
    window.scrollTo({
      top: offsetTop
    });
}


// mobile navbar

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

function removeOverlay() {
    overlay.classList.remove("overlay--active");
}
 
window.addEventListener("scroll", removeOverlay);



function submit() {
    if(submit){
        alert("Form submitted")
    }
}

const contact = document.getElementById('contact')

function contactUs () {
    contact.textContent = "vanguardtransitinc@gmail.com" 
    
}
