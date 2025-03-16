let Nombres = [];

let idamigos = "amigo";



function Agregar_nombre(ListNombres, id) {
  
    let NombreUsuario = document.getElementById (id).value;

    if ( NombreUsuario === "" ) {

        alert ("Por favor, inserte un nombre.") ;
    }
    else {

        ListNombres.push( NombreUsuario )
        
        document.getElementById (id).innerHTML = ""

        alert ("Nombre añadido")
       
    }

    IngresoList(ListNombres)
} ;


function IngresoList (NombresAra) {

let NombreList = document.getElementById ("listaAmigos")

    NombreList.innerHTML = ""

    for (let i=0; i<NombresAra.length; i++){

        let li = document.createElement("li");

        li.textContent = NombresAra[i];

        NombreList.appendChild(li);
    }

} ;


function Sorteo (NombreArrays) {
let numerosort = Math.floor(Math.random()*NombreArrays.length)


    if (NombreArrays.length === 0) {
        alert ("Ingreso invalido")
    }
    else {
        let AmigoGanador = NombreArrays [numerosort]

        document.getElementById ("resultado").innerHTML = AmigoGanador
    }

}
