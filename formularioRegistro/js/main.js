let iniciar = () =>{
    'use strict';
    let cogerSelect = document.getElementById("sFechaNacimento");
    ponerFechas(1990, 2020, cogerSelect);
    let cogerInput = document.querySelectorAll("form>input");
    for(let i=0;i<cogerInput.length;i++){
        cogerInput[i].addEventListener("change", comprobacion);
    }
    comprobarCheckAficiones();
    comprobarSexo();
};
/*
    funcion que pone años en el select, recibe 3 parametros, uno para el año dónde queremos que empieze y otro hasta que terminne, y el último parametro el nodo que queremos colocar.
    No devuelve ningun valor
 */
let ponerFechas = (fechaInicio, fechaFin, nodo) =>{
    'use strict';
    let colocarFecha = nodo;

    for(let i=fechaInicio;i<=fechaFin;i++){
        let valoresFecha = document.createElement("option");
        valoresFecha.value=i;
        valoresFecha.textContent =i;
        colocarFecha.appendChild(valoresFecha);
    }
};
let comprobacion = (e) =>{
    'use strict';
    let dato = e.target.value;
    console.log(e.target);
    //let cogerInput= document.querySelectorAll("form>input");
    /*
        inteto coger el input del formulario
     */
    let cogerNodoNombre = document.getElementById("inptNombre");
    let cogerNodoNombreUsuario = document.getElementById("inptNombreUsuario");
    let claseCorrecto = "form-control correcto";
    let claseError = "form-control error";
    let expresionNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú])\w+/g;
    let expresionNombreUsuario = /^([A-Za-z0-9]{4,20})\w+/g;
    let expresionEmail = /([\w]+@{1}[\w]+\.[a-z]{1,3})\w+/g;
    let expresionTelefono = /^(6|9)\d{8}/g;
    let expresionPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm; /* debe contener 8 caracteres, una letra myuscula, una letra minuscula y un numero, puede contener caracteres especiales */
    comprobacionExpresiones(dato, expresionNombre, cogerNodoNombre, claseCorrecto, claseError, "nombre", "Juan Carlos, Pedro");
    comprobacionExpresiones(dato, expresionNombreUsuario, cogerNodoNombreUsuario, claseCorrecto, claseError, "nombreUsuario", "juancarlosvim, juanc3 entre 4 y 20 caracteres");
};


let comprobacionExpresiones = (valor, expresion, nodo, claseCorrecto, claseError, nombreCampoEjemplo,campoEjemplo) =>{
    'use strict';
    let cogerNodo = nodo;
    if(expresion.test(valor)){
        console.log("correcto");
        cogerNodo.className = claseCorrecto;
    }else{
        console.log("error");
        cogerNodo.className = claseError;
        cogerNodo.value="";
        cogerNodo.placeholder = "Error al introducir el "+nombreCampoEjemplo+" ejemplo: "+campoEjemplo;
    }
};
let comprobarCheckAficiones = ()=>{
    'use strict';
    let cogerCheckAficiones = document.querySelectorAll(".aficiones>input");
    let aficiones = {};
    for(let i=0;i<cogerCheckAficiones.length;i++){
        if(cogerCheckAficiones[i].checked === true){
            aficiones[i] =  {gustos: cogerCheckAficiones[i].value};

        }
    }
    console.log("aficiones", aficiones);

};

let comprobarSexo = () =>{
    'use strict';
    let cogerSexo = document.querySelectorAll(".genero>div>input");
    let sexo = {};
    for(let i=0;i<cogerSexo.length;i++){
        if(cogerSexo[i].checked === true){
            sexo = {genero: cogerSexo[i].value};
        }
    }
    console.log("genero", sexo);

};

let comprobarTerminos = () =>{
    'use strict';
    let cogerCheckTerminos = document.querySelector(".terminos>div>input");
    if(cogerCheckTerminos.checked ===true){
        /*
            Comprobamos todos los campos obligatioros
         */
    }
};

window.addEventListener("DOMContentLoaded", iniciar);