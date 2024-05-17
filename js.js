//PRECIOS (se generan directamente desde acá)

let precioPresencialMensual= 156;
let precioVirtualMensual= 120; 

let precioPresencialAnual = precioPresencialMensual - precioPresencialMensual*(20/100); //Al anual, se le aplica un 20% de descuento del precioMensual
let precioVirtualAnual = precioVirtualMensual - precioVirtualMensual*(20/100); //Al anual, se le aplica un 20% de descuento del precioMensual

let precioPresencialEnWeb = document.querySelector(".precioPresencial");
let precioVirtualEnWeb = document.querySelector(".precioVirtual");

precioPresencialEnWeb.textContent = "$"+ precioPresencialAnual + "/mes"; //Por defecto viene el precio anual
precioVirtualEnWeb.textContent = "$"+ precioVirtualAnual + "/mes"; //Por defecto viene el precio anual

//FUNCIONALIDAD DE BOTONES DE PLANES 

let botonMensual = document.querySelector(".mensual");
let botonAnual = document.querySelector(".anual");

botonMensual.addEventListener("click", cambioPrecioYBoton);
botonAnual.addEventListener("click", cambioPrecioYBoton);

function cambioPrecioYBoton (){

    if (botonAnual.classList.contains("button-tipo-de-plan")){

        botonAnual.classList.remove("button-tipo-de-plan")
        botonAnual.classList.add("button-tipo-de-plan-inactive")

        precioPresencialEnWeb.textContent = "$"+ precioPresencialMensual + "/mes";
        precioVirtualEnWeb.textContent = "$"+ precioVirtualMensual + "/mes";
    }

    else {
        botonAnual.classList.remove("button-tipo-de-plan-inactive")
        botonAnual.classList.add("button-tipo-de-plan")
    }

    if (botonMensual.classList.contains("button-tipo-de-plan")){

        botonMensual.classList.remove("button-tipo-de-plan")
        botonMensual.classList.add("button-tipo-de-plan-inactive")

        precioPresencialEnWeb.textContent = "$"+ precioPresencialAnual + "/mes";
        precioVirtualEnWeb.textContent = "$"+ precioVirtualAnual + "/mes";
    }

    else {
        botonMensual.classList.remove("button-tipo-de-plan-inactive")
        botonMensual.classList.add("button-tipo-de-plan")
    }
}

//FUNCIONALIDAD BOTONES BENEFICIOS

let todosLosBotonesBeneficios = document.querySelectorAll(".beneficio-especifico");

todosLosBotonesBeneficios.forEach(function(element) { //Recorro todos los beneficios
    
    element.addEventListener("click", cambioEstado); //Indico que si clickeas uno de los beneficios pase la función "cambioEstado"

    function cambioEstado(){

        let seleccionarBarra = element.firstElementChild; //Selecciono el primer elemento del div clickeado
        let seleccionarTexto = element.lastElementChild; //Selecciono el primer elemento del div clickeado

        if (seleccionarTexto.classList.contains("texto-beneficio-inactive")){
            seleccionarTexto.classList.remove("texto-beneficio-inactive")
            seleccionarTexto.classList.add("texto-beneficio-activate")
        }

        if (seleccionarBarra.classList.contains("barra-beneficio")){
            seleccionarBarra.classList.remove("barra-beneficio")
            seleccionarBarra.classList.add("barra-beneficio-activate")
        } 

       todosLosBotonesBeneficios.forEach(function(datos){ //Nuevamente recorro todos los beneficios

        datos.classList.remove("activo"); //Remuevo la clase activo en todos
        element.classList.add("activo"); //Solo se la agrego al beneficio en el que se hizo click

        if (!datos.classList.contains("activo")){ //Con el ! del principio, indico que "si no contiene la clase activo, haga esto." El ! da el sentido contratrio a todo el condicional

            datos.firstElementChild.classList.add("barra-beneficio")
            datos.firstElementChild.classList.remove("barra-beneficio-activate")

            datos.lastElementChild.classList.add("texto-beneficio-inactive")
            datos.lastElementChild.classList.remove("texto-beneficio-activate")
        }

       })
    }
});

//ANIMACIONES

//Generé un observador para evaluar cuando el elemento animado se encuentra en pantalla, ahí se activa la animación.
//Para animar un elemento, es necesario colocarle la clase ".animation" e incluirle un data-animation que puede ser fade, up o show.

const elementosAnimados = document.querySelectorAll(".animation"); //Todos los elementos a animar

function disparadorDeAnimaciones (entries){ //Función disparadora de animación
    
    entries.forEach(entry =>{ //Recibe al elemento observado

        entry.target.classList.toggle("unset", entry.isIntersecting) //Si colocamos un console.log(entry), vamos a ver todas las propiedades de este elemento, entre ellos "isIntersecting", con el toggle le agregamos o quitamos la clase "unset" dependiendo de si la tiene o no y hacemos esa modificación cuando el elemento esta "isTintersecting"
    })
}

const options = { //Seteo de las opciones del observador

    root: null, //Con esto indicamos que el contenedor sea el viewPort.
    rootMargin: "0px",
    threshold: 0.25 //Esto controla que porcentaje del elemento se debe ver para que la función se ejecute. Con 0, apenas se vea un pixel ya se dispara. Si colocamos por ejemplo, 0.25, se disparara cuando se vea el 25% del elemento. HAY QUE IR PROBANDO Y AJUSTANDO SEGÚN LO QUE NECESITEMOS

}

const observer = new IntersectionObserver(disparadorDeAnimaciones, options); //Declarar observador

elementosAnimados.forEach(elemento =>{ //Observar a cada elemento animado
    observer.observe(elemento);
    console.log("me están llamando")
})