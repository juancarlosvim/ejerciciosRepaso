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
    comprobarTerminos();
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
    let nodosComprobar = document.querySelectorAll("form>input");
    let claseCorrecto = "form-control correcto";
    let claseError = "form-control error";
    let expresionNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú])\w+/g;
    let expresionNombreUsuario = /^([A-Za-z0-9]{4,20})\w+/g;
    let expresionEmail = /([\w]+@{1}[\w]+\.[a-z]{1,3})\w+/g;
    let expresionTelefono = /(^[0-9]{9})+/g;
    let expresionPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm; /* debe contener 8 caracteres, una letra myuscula, una letra minuscula y un numero, puede contener caracteres especiales */
    let arrayExpresiones = [ expresionNombre, expresionNombreUsuario, expresionEmail, expresionTelefono, expresionPassword];
    let datosCampos = {campoEjemplo: "nombre", ejemplo: "Juan Carlos",};
    let campoEjemplo = ["nombre", "nombreUsuario", "correo", "teléfono móvil", "contraseña"];
    let errorEjemplo = ["Juan Carlos, Pedro", "juancarlosvim, juancarlos3, entre 4 y 20 caracteres", "correo@gmail.com", "123456789", "la contraseña debe contener al menos 8 caracteres, letra mayuscula, letra minuscula, un número, también puede tener caracteres espciales"];
    for(let i=0;i<nodosComprobar.length;i++){
        if(nodosComprobar[i].value.length>0){
            console.log("entro en el primer if");
            if(arrayExpresiones[i].test(nodosComprobar[i].value)){
                console.log("correcto");
                nodosComprobar[i].className = claseCorrecto;
            }else{
                console.log("expresion", arrayExpresiones[i]);
                console.log("valor de campo", nodosComprobar[i].value);
                console.log("incorrecto");
                nodosComprobar[i].className = claseError;
                nodosComprobar[i].value = "";
                nodosComprobar[i].placeholder = "Error al introducir "+campoEjemplo[i]+" Ejemplo: "+errorEjemplo[i];
            }
           //comprobacionExpresiones(nodosComprobar[i].value, arrayExpresiones[i], nodosComprobar[i], claseCorrecto, claseError, campoEjemplo[i], errorEjemplo[i] );
        }
    }
    /*
     TODO
     array de expresiones regulares
     nodo.value.lengt>0 entonces comprobar la expresioens
     al aceptar los terminos comprobar que los campos obligatorios sean mayor que 0 y comprobar que no hay ninguna clase error entonces se activará el botón
     */
    /*comprobacionExpresiones(dato, expresionNombre, cogerNodoNombre, claseCorrecto, claseError, "nombre", "Juan Carlos, Pedro");
    if(cogerNodoNombreUsuario.value.length>0){
        comprobacionExpresiones(dato, expresionNombreUsuario, cogerNodoNombreUsuario, claseCorrecto, claseError, "nombreUsuario", "juancarlosvim, juanc3 entre 4 y 20 caracteres");
    }*/

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
    let nodosClaseError = document.querySelectorAll(".error");
    let cogerBotonRegistrarse = document.getElementById("btnRegistrarse");
    let camposObligatorios = document.querySelectorAll("#inptCorreo, #inptTelefono, #inptPassword");
    let cogerCheckTerminos = document.querySelector(".terminos>div>input");
    let claseBoton = "btn btn-primary my-3";
    cogerCheckTerminos.addEventListener("click", ()=>{
        console.log("entrando eventlsiterner terminos");
        if(cogerCheckTerminos.checked ===true && nodosClaseError.length===0){
            for(let i=0;i<camposObligatorios.length;i++){
                if(camposObligatorios[i].value.length>0){
                    cogerBotonRegistrarse.className= claseBoton;
                }
            }

        }
    });

};

window.addEventListener("DOMContentLoaded", iniciar);