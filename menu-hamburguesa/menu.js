/*Menú hamburguesa para móvil*/

document.querySelector(".bars-menu").addEventListener("click", animateBars) /*Seleecionamos sobre qué vamos a trabajar y le añadimos que al hacer click
se realice la acción que nombramos "animateBars"*/

var line1 = document.querySelector(".line1-bars-menu"); /*Indicamos que la variante line1 sea igual al elemento con la clase ".line1-bars-menu" del CSS*/
var line2 = document.querySelector(".line2-bars-menu");
var line3 = document.querySelector(".line3-bars-menu");


function animateBars(){
    line1.classList.toggle("active-line1-bars-menu");
    line2.classList.toggle("active-line2-bars-menu");
    line3.classList.toggle("active-line3-bars-menu");
     
}

const toggleButton = document.getElementById("bars-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

document.querySelector("nav").addEventListener("click", animateBarsCLOSE) 

function animateBarsCLOSE(){
    navWrapper.classList.toggle("show");
    line1.classList.toggle("active-line1-bars-menu");
    line2.classList.toggle("active-line2-bars-menu");
    line3.classList.toggle("active-line3-bars-menu");
     
}


navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
