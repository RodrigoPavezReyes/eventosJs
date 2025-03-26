/***Mostrar mensaje de alerta con un click del mouse */

const alerta = document.querySelector("#alerta");

alerta.addEventListener("click", ()=>{
    alert("Esto es una alerta con un evento click")
});


/***Mostrar mensaje en consola con un click del mouse */

const consola = document.querySelector("#consola");

consola.addEventListener("click", mostrarConsola);

function mostrarConsola() {
    console.log("Esto es un mensaje en consola con un evento click")
}

/**Usar boton de color Modo */

const colorMode = document.querySelector("#color-mode");
const body = document.body

colorMode.addEventListener("click", changeMode)

function changeMode() {
    body.classList.toggle("dark-mode");
    
    if(body.classList.contains("dark-mode")){
        colorMode.innerText = "Cambiar a Light Mode";
    }else{
        colorMode.innerText = "Cambiar a Dark Mode";
    }
}


/**EVENTOS DE FORM MOSTRAR ALERTA */

const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert(alertaInput.value)
    alertaForm.reset();
})

/**EVENTOS DE FORM MOSTRAR ABAJO */


const abajoInput = document.querySelector("#abajo-input");
const parrafo = document.querySelector("#abajo")

abajoInput.addEventListener("input", mostrarAbajo);

function mostrarAbajo() {
    parrafo.innerText = abajoInput.value
}




/**EVENTOS DE FORM AGREGAR ITEM A UNA LISTA */

const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const lista = document.querySelector("#agregar")
agregarForm.addEventListener("submit", agregarLista);

function agregarLista(e) {
    e.preventDefault();
    if(agregarInput.value != ""){
        let li = document.createElement("li") 
        li.id="listaAgregada"
        li.innerText = agregarInput.value
        lista.append(li)
    }
    agregarForm.reset();
    agregarInput.focus();
}