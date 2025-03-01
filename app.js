// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];
function agregarAmigo(){
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;

  if(!nombreAmigo){
    alert("Debes ingresar un nombre");
    return;
  }
  amigo.push(nombreAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  amigoRenderizar();

}


function amigoRenderizar() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < amigo.length; i++){
        let lista = document.createElement("li");
        lista.textContent = amigo[i];
        listaAmigos.appendChild(lista);
    }
}

function sortearAmigo(){
    
     if (amigo.length <2){
        alert("No son suficientes amigos para sortear");
        return;
    }
     //minimo 2 amigos 

     let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length) ];
     let nombreAmigoSorteado = document.getElementById("resultado");
     nombreAmigoSorteado.innerHTML = `¡Tú amigo secreto es: ${amigoSorteado} !`;
     

     let limpiarNombres = document.getElementById("listaAmigos");
     limpiarNombres.innerHTML="";

     

}