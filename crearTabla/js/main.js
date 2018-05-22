// variables globales
let debug = true;
let iniciar = () =>{
    let cogerBody = document.getElementsByTagName("body")[0];
    let misDatos = introducirDatos();
    if(misDatos.filas === 0 && misDatos.columnas ===0){
        console.log(misDatos.mensaje);
        crearMensajeDeError(misDatos.mensaje, cogerBody);
    }else{
        creacionTabla(misDatos.filas, misDatos.columnas, cogerBody);
        atributosTabla();
    }
    if(debug){
        console.log(misDatos);
    }
};
/*
    funcion que pedimos dos datos
 */
let introducirDatos = () =>{
    'use strict';
    let introducirFilas;
    let introducirColumnas;
    let respuestaOk = {};
    introducirFilas = prompt("Numero de Filas");
    introducirColumnas = prompt("Numero de Columnas");
    let datoF = parseInt(introducirFilas);
    let datoC = parseInt(introducirColumnas);
    if((Number.isInteger(datoF)) && (Number.isInteger(datoC))){
        if(debug){
            console.log("filas", datoF);
            console.log("columnas", datoC);
        }
        return respuestaOk = {filas: datoF, columnas: datoC, mensaje: "Datos introducidos correctamente"};
    }else{
        return respuestaOk = {filas: 0, columnas: 0, mensaje: "Error al introducir los datos"};

    }

};
/*
    funcion que recibe dos parametros, para filas y columnas de la tabla, con el numero de filas
    yel nodo donde queremos que cree la tabla
 */
let creacionTabla = (filas, columnas, nodo) =>{
    'use strict';
    let numFilas = filas;
    let numColumnas = columnas;
    let colocarTabla = nodo;
    let crearTabla = document.createElement("table");
    let crearBodyTabla = document.createElement("tbody");
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
    colocarTabla.appendChild(crearTabla);
};
/*
 funcion para añadir la tabla
 */
let atributosTabla = () =>{
    'use strict';
    let cogerTabla = document.getElementsByTagName("table")[0];
    let claseTabla = "table table-striped table-responsive  w-auto";
    cogerTabla.setAttribute("id", "tMiTabla");
    cogerTabla.className = claseTabla;
};

/*
    funcion que rcibe dos parametros mensaje y nodo para crear el mensaje de error
 */
let crearMensajeDeError = (mensaje, nodo) =>{
    'use strict';
    let crearDivInfo = document.createElement("div");
    let claseError = "alert alert-warning";
    let colocarDivInfo = nodo;
    crearDivInfo.className = claseError;
    crearDivInfo.innerHTML = "<strong>Peligro!</strong> "+mensaje;
    colocarDivInfo.appendChild(crearDivInfo);
};

window.addEventListener("DOMContentLoaded", iniciar);