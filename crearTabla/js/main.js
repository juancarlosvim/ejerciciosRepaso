// variables globales
let debug = true;
let iniciar = () =>{
    introducirDatos();
};
/*
    funcion que pedimos dos datos
 */
let introducirDatos = () =>{
    'use strict';
    let introducirFilas;
    let introducirColumnas;

    introducirFilas = prompt("Numero de Filas");
    introducirColumnas = prompt("Numero de Columnas");

    if((typeof parseInt(introducirFilas) === 'number') && (typeof parseInt(introducirColumnas) === 'number')){
        if(debug){
            console.log("filas", introducirFilas);
            console.log("columnas", introducirColumnas);
        }
        creacionTabla(introducirFilas, introducirColumnas);
    }else{
        alert("Los datos introducidos no son números");
    }

};
/*
    funcion que recibe dos parametros, para filas y columnas de la tabla, con el numero de filas
    y columnas creamos la tabla
 */

let creacionTabla = (f, c) =>{
    'use strict';
    let numFilas = f;
    let numColumnas = c;
    let cogerBody = document.getElementsByTagName("body")[0];
    let crearTabla = document.createElement("table");
    let crearBodyTabla = document.createElement("tbody");
    let claseTabla = "table table-striped table-responsive  w-auto";
    crearTabla.setAttribute("id", "tMiTabla");
    crearTabla.className = claseTabla;
    for(let i=0;i<numFilas; i++){
        let crearFilas = document.createElement("tr");
        for(let j=0;j<numColumnas;j++){
            let crearColumnas = document.createElement("td");
            crearColumnas.textContent = "Columna "+(j+1);
            crearFilas.appendChild(crearColumnas);
        }
        crearBodyTabla.appendChild(crearFilas);
    }
    crearTabla.appendChild(crearBodyTabla);
    cogerBody.appendChild(crearTabla);
};
window.addEventListener("DOMContentLoaded", iniciar);