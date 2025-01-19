// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let contadorDeIntentos = 0;


function agregarAmigo(){

    //Toma el nombre escrito y lo almacena en la variable nombreDeAmigo
    let nombreDeAmigo = document.getElementById("amigo").value.trim();

    //Verifica que no se permitan entradas vacías de texto
    if (nombreDeAmigo === "") {
        alert("No puedes agregar un valor vacío. Escribe un nombre.");
        return;
    }

    //Inserta el nombre escrito en el arreglo
    amigos.push(nombreDeAmigo);
    console.log(amigos);

    //Inserta el nombre escrito en la unordered list
    document.getElementById("listaAmigos").insertAdjacentHTML("beforeend",`<li>${nombreDeAmigo}</li>`);

    limpiarCaja();
    
}

//Limpia la caja de texto
function limpiarCaja() {

    document.getElementById("amigo").value = '';
    
}

//Limpia la lista de amigos
function limpiarLista() {
    const list = document.getElementById("listaAmigos");
    
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }  
}

//Elige un nombre aleatoriamente dentro de la lista de amigos
function sortearAmigo(){

    if (amigos.length == 0) {
        alert("Debes ingresar nombres a tu lista de amigos");
        return;

    }

    if (contadorDeIntentos >= 1) {
        alert("Ya descubriste al amigo secreto. Presiona 'Nueva lista' para volver a jugar.")
        return
    }

    let numeroAleatorio = Math.floor(Math.random()*amigos.length);
    
    contadorDeIntentos++;

    limpiarCaja();
    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigos[numeroAleatorio]}`;
    
}

function nuevaListaDeAmigos() {
    //Limpia la caja de texto
    limpiarCaja();

    //Limpia el arreglo de amigos
    amigos = [];

    //Limpia la lista mostrada de amigos
    limpiarLista();

    //Limpia el mensaje del amigo secreto que aparece cuando se presiona el botón Sortear amigo
    document.getElementById("resultado").innerHTML = '';
    
    //Limpia el contador de intentos
    contadorDeIntentos = 0;

}

//PUNTOS EXTRA: Al presionar la tecla enter, hace lo mismo que al hacer click en añadir

function teclaEnter() {
    const input = document.getElementById("amigo");

    // Asegúrate de que el evento no se registre múltiples veces
    input.addEventListener("keydown", handleEnterKey);
}

// Función para manejar la tecla Enter
function handleEnterKey(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Previene el comportamiento predeterminado
        agregarAmigo();
    }
}

 teclaEnter();