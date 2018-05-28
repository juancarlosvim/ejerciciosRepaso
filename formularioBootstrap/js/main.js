let debug = true;
let iniciar = () =>{
    'use strict';
    let cogerBody = document.getElementsByTagName("body")[0];
    let camposFormulario = ["nombre", "email", "asunto", "mensaje"];
    let claseAnyadir = "form-control";

    crearFormulario(cogerBody);
    let cogerFormulario = document.getElementsByTagName("form")[0];

    crearCamposFormulario(camposFormulario, cogerFormulario);

    anyadirAtributos(camposFormulario);
    let cogerUltimoInput = document.getElementById("inptmensaje");

    cambiarInputPorTexArea(cogerFormulario, cogerUltimoInput);
    anyadirClaseCampos(claseAnyadir);
    let cogerBoton = document.getElementsByTagName("button")[0];

    anyadirAtributosBoton(cogerBoton, "btnEnviar", "submit", "Enviar" ,"btn btn-outline-warning");

    /*
        parte 2 del ejercicio
     */
    anyadirEventosCmpos();

};
/*
    funcion que crea un formulario, recibe como parametro un nodo, dónde se va a colocar, no devuelve nada

 */

let crearFormulario = (nodo) =>{
    'use strict';
    let formularioCrear = document.createElement("form");
    let formularioColocar = nodo;
    formularioColocar.appendChild(formularioCrear);
};
/*
    funcion que crea los campos de un formulario creando label y input también un boton al final, recibe dos parametros uno los campos que queremos crear y el nodo dónde vamos a colocar esos campos
    no devuelve nada
 */

let crearCamposFormulario = (campos, nodo) =>{
    'use strict';
    let camposCrear = campos;
    let camposColocar = nodo;
    let crearBoton = document.createElement("button");
    for(let i=0;i<camposCrear.length;i++){
        let crearLabel = document.createElement("label");
        let crearInput = document.createElement("input");
        camposColocar.appendChild(crearLabel);
        camposColocar.appendChild(crearInput);
    }
    camposColocar.appendChild(crearBoton);
};

/*
    funcion que realiza coger los label y input y añadirle atributos (id) y texto a los label, no devuelve nada
 */

let anyadirAtributos = (campos)=>{
    'use strict';
    let atributosCampos = campos;
    let cogerLabel = document.getElementsByTagName("label");
    let cogerInput = document.getElementsByTagName("input");
    for(let i=0;i<atributosCampos.length;i++){
        cogerLabel[i].setAttribute("id", "lbl"+atributosCampos[i]);
        cogerLabel[i].textContent = "Tú "+atributosCampos[i];
        cogerInput[i].setAttribute("id", "inpt"+atributosCampos[i]);

    }
};

/*
    funcion que realiza crear un elemento textarea y reemplazar el elementoNuevo por el nodo que le pasemos, recibe dos parametros nodoPadre (formulario) y nodoReemplazar (ultimoInput)
    no devuelve nada
 */

let cambiarInputPorTexArea = (nodoPadre,nodoReemplazar)=>{
    'use strict';
    let elementoPadre = nodoPadre;
    let crearTextArea = document.createElement("textarea");
    elementoPadre.replaceChild(crearTextArea, nodoReemplazar);
};

/*
 funcion que le añade una clase a los input y textarea, recibe un parametro en este caso la clase que queremos ponerle y no devuelve nada
 */

let anyadirClaseCampos = (clase) =>{
    'use strict';
    let cogerElementos = document.querySelectorAll("form>input, textarea");
    for(let i=0;i<cogerElementos.length;i++){
        cogerElementos[i].className = clase;
    }
};

/*
    funcion que le añadimos atributos, texto y clase a un botón
 */
let anyadirAtributosBoton = (nodo, id, tipo, texto, clase) =>{
    'use strict';
    let boton = nodo;
    boton.setAttribute("id", id);
    boton.setAttribute("type", tipo);
    boton.textContent = texto;
    boton.className = clase;
};

/*
 comrpobacion de expresiones regulares 2º ejercicio
 */

let anyadirEventosCmpos = () =>{
    'use strict';
    let cogerCampoNombre =  document.getElementById("inptnombre");
    cogerCampoNombre.addEventListener("change", comprobarNombre);
    let cogerCampoEmail = document.getElementById("inptemail");
    cogerCampoEmail.addEventListener("change", comprobarEmail);
};

let comprobarNombre = () =>{
    'use strict';
    let cogerTextoNombre = document.getElementById("inptnombre").value;
    let cogerTextoNombreNodo = document.getElementById("inptnombre");
    let expresionNombre = /(([A-ZÁÉÍÓÚ]{1}[a-záéíóú]+\w))\w+/g;
    let comprobacionNombre = comprobarExpresiones(expresionNombre, cogerTextoNombre);
    anyadirCorrectoCampo(comprobacionNombre, cogerTextoNombreNodo , "nombre", "Juan Carlos, Pedro, Javi");
};

let comprobarEmail = () =>{
    'use strict';
    let cogerTextoEmail = document.getElementById("inptemail").value;
    let cogerTextoEmailNodo = document.getElementById("inptemail");
    let expresionEmail = /([\w]+@{1}[\w]+\.[a-z]{1,3})\w+/g;
    let comprobacionEmail = comprobarExpresiones(expresionEmail, cogerTextoEmail);
    anyadirCorrectoCampo(comprobacionEmail, cogerTextoEmailNodo, "email", "ejempplo@gmail.com");
};

/*
    funcion generica para comprobar la expresiones regulares
  */
let comprobarExpresiones = (expresion, campo) =>{
    'use strict';
    let ok = false;
    if(expresion.test(campo)){
        ok = true;
    }
    return ok;
};
let anyadirCorrectoCampo = (p, nodo, nombreCampo, ejemploCampo) =>{
    'use strict';
    let correcto = p;
    console.log(correcto);
    let claseCorrecto = "form-control correcto";
    let claseError = "form-control error";
    if(correcto){
        nodo.className = claseCorrecto;
    }else{
        nodo.className = claseError;
        nodo.value = "";
        nodo.placeholder = "Error al introducir el "+nombreCampo+" , ejemplo: "+ejemploCampo;
    }
};
window.addEventListener("DOMContentLoaded", iniciar);