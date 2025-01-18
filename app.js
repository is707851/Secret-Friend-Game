// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaDeAmigos = document.getElementsByClassName("name-list");


function agregarAmigo(){

    //Al presionar enter se añade el nombre a la lista de amigos (NOT WORKING)
    document.getElementById("amigo").addEventListener("keypress", function (event){
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementsByClassName("button-add").click();
        }
    });

    if(document.getElementById("amigo").value != ""){
        //Toma el nombre escrito y lo almacena en la variable nombreDeAmigo
    let nombreDeAmigo = document.getElementById("amigo").value;
    //Inserta el nombre escrito en el arreglo
    amigos.push(nombreDeAmigo);
    console.log(amigos);

    //Inserta el nombre escrito en la unordered list
    document.getElementById("listaAmigos").insertAdjacentHTML("beforeend",`<li>${nombreDeAmigo}</li>`);

    limpiarCaja();

    //Si se hace click en Anadir sin que se haya escrito algo
    } else {
        alert("Debes ingresar un nombre válido.")
    }
    
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

    } else {
        let numeroAleatorio = Math.floor(Math.random()*amigos.length-1)+1;
        limpiarLista();
        return document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigos[numeroAleatorio]}`;
    }
    

}