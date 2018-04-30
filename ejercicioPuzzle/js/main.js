/*
 Ejercicio dónde vamos a realizar un puzzle
 */
/*
    variables globales

 */
let debug = true;
let ruta = "";
let arrayComprobacion = [];
let comprobacion = false;
let iniciar = () =>{
    'use strict';
    colocarImagen();
    iniciarArrayComprobacion();
    colocarImagenResuelta();
    trabajarImagen();
    getElementosArray();

};

//funcion que inicializa a false el tamaño de las fotos
let iniciarArrayComprobacion = () =>{
    'use strict';
    let tamFotos = crearFotos();
    for(let i =0;i<tamFotos.length;i++){
        arrayComprobacion[i] = false;
    }
    return arrayComprobacion;
};

/*
 1º funcion para crear un array de las fotos que tenemos
 */
let crearFotos = () =>{
    'use strict';
    let numFotos = 16;
    let nombreFoto = "auto";
    let extensionFoto = ".jpg";
    let fotosArray = [];
    for(let i=0;i<numFotos;i++){
        fotosArray[i] = nombreFoto+(i+1)+extensionFoto;
    }
    return fotosArray;
};
/*
    2º crearemos una un funcion en la cual le pasaremos un array y generará numeros aleatorios no repetidos
 */
let numerosAleatorios = (f) =>{
    'use strict';
    let fotosArray = f;
    let aleatorio;
    let ar = [];
    for(let i=0;i<fotosArray.length;i++){
        do{
            aleatorio = Math.floor(Math.random() * fotosArray.length);
            //console.log(aleatorio);
        }while(noRepetidos(aleatorio, ar));
        ar.push(aleatorio);
    }

    //console.log(ar);
    return ar;
};

let noRepetidos = (numero, contArray) =>{
    'use strict';
    let auxiliar = false;
    for(let i =0;i<contArray.length;i++){
        if(numero === contArray[i]){
            auxiliar = true;
        }
    }
    return auxiliar;
};
/*
 Creamos una funcon para colocar las imagenes

 */
let colocarImagen = () =>{
    'use strict';
    let ruta = "img/";
    let cogerBody = document.getElementsByTagName("body")[0];
    let crearDivFotos = document.createElement("div");
    crearDivFotos.setAttribute('id', "fotosPuzzle");
    let arrayFotos = crearFotos();
    let numerosAleatoriosFotos = numerosAleatorios(arrayFotos);
    if(debug){
        console.log(arrayFotos);
        console.log(numerosAleatoriosFotos);
    }
    for(let i=0;i<arrayFotos.length;i++){
        let crearImg = document.createElement("img");
        crearImg.setAttribute('id', `imagen${i}`);
        crearImg.setAttribute('src', ruta+arrayFotos[numerosAleatoriosFotos[i]]);
        crearDivFotos.appendChild(crearImg);
    }
    cogerBody.appendChild(crearDivFotos);

};

let colocarImagenResuelta = () =>{
    'use strict';
    let rutaImagenResuelta = "img/";
    let nombreImagenResuelta = "auto0.jpg";
    let cogerBody = document.getElementsByTagName("body")[0];
    let crearDivFotoResuelta = document.createElement("div");
    let crearImagenResuelta = document.createElement("img");
    crearImagenResuelta.setAttribute("src", rutaImagenResuelta+nombreImagenResuelta);
    crearDivFotoResuelta.appendChild(crearImagenResuelta);
    cogerBody.appendChild(crearDivFotoResuelta);
    crearDivFotoResuelta.setAttribute("id", "fotoResuelta");
};
/*
    funcion que devuelve un array con los elementos del array
 */

let getElementosArray = () =>{
    'use strict';
    let cogerImagenes = [];
    let tamArray = document.querySelectorAll("#fotosPuzzle>img").length;
    for(let i =0;i<tamArray;i++){
        cogerImagenes[i] =  document.querySelectorAll("#fotosPuzzle>img")[i];
    }
    if(debug){
        console.log(cogerImagenes);
    }
    return cogerImagenes;
};

/*
    funcion dónde trabajeromos con las imagenes para  saber
 */
let trabajarImagen = () =>{
    'use strict';
    let cogerImagenes = document.getElementsByTagName('img');
    if(debug){
        console.log(cogerImagenes);
    }
    for(let i=0;i<cogerImagenes.length;i++){
        cogerImagenes[i].addEventListener("click", imagenPulsada);

    }

};
/*
 funcion cuando pulsamos click
 */
let imagenPulsada = (e) =>{
    'use strict';
    let rutaDestino;
    //intercambio.push(ruta);
    if(ruta.length === 0){
        ruta = e.target.id;
        if(debug){
            console.log("ruta", ruta);
        }
    }else{
        rutaDestino = e.target.id;
        if(debug){
            console.log("rutaDestino", rutaDestino);
        }
        intercambiarFotos(ruta, rutaDestino);
        ruta= "";
    }
    comprobarPuzzle();
};

let intercambiarFotos = (param1, param2) =>{
    let directorio = "img/";
    let cogerImagenPrimera = document.getElementById(param1);
    //let encontrarRuta = cogerImagenPrimera.lastIndexOf("/");
    //mequedo con el nombre de la foto
    let cogerRutaImagenP = cogerImagenPrimera.src.split(directorio)[1];
    if(debug){
        console.log(cogerRutaImagenP);
        console.log("cogerImagenPrimera", cogerImagenPrimera);
    }
    let cogerImagenSegunda = document.getElementById(param2);
    //me quedo con el nomre de la seguda foto
    let cogerRutaImagenS = cogerImagenSegunda.src.split(directorio)[1];
    if(debug){
        console.log("cogerSegundaImagen", cogerImagenSegunda);
    }
    // guardo el nombre de la foto en una variable auxiliar
    let cogerImagenAx = cogerRutaImagenP;
    /*
        realizando intercambio
     */
    cogerImagenPrimera.src = directorio+cogerRutaImagenS;
    if(debug){
        console.log("imagenPriemra", cogerImagenPrimera);
    }
    cogerImagenSegunda.src = directorio+cogerImagenAx;
    if(debug){
        console.log("imagenIntercambiada2", cogerImagenSegunda);
    }
};

let comprobarPuzzle = () =>{
    'use strict';
    let cogerFotos = document.querySelectorAll("#fotosPuzzle>img");
    let fotosCreadas = crearFotos();
    let arrayFotos = [];

    for(let i=0;i<cogerFotos.length;i++){
        arrayFotos[i] = cogerFotos[i].src.split("img/")[1];

    }
    if(debug){
        console.log("fotosCreadas", fotosCreadas);
        console.log("arrayFotos", arrayFotos);
    }
    for(let i=0;i<cogerFotos.length;i++){
        if(fotosCreadas[i]===arrayFotos[i]){
            arrayComprobacion[i] = true; // añadimos al arrayComprobacion

        }
    }
    //console.log(encuentra);
    if(debug){
        console.log(arrayComprobacion);
    }
    // comprobar el array
    for(let j=0;j<arrayComprobacion.length;j++) {
        if (arrayComprobacion[j] === false) {
            comprobacion = false;
            break;
        } else {
            comprobacion = true;
        }
    }

    // se comprueba esto ultimo
    if(comprobacion === true) {
        if(debug){
            console.log("entro en comprobacion");
        }
        resueltoPuzzle();
    }

};

let resueltoPuzzle = () =>{
    'use strict';
    let fotosPuzzle = document.getElementById("fotosPuzzle");
    let  btnIniciar = document.createElement("button");
    btnIniciar.setAttribute("id", "btnIniciar");
    btnIniciar.innerHTML ="Jugar de nuevo";
    fotosPuzzle.innerHTML = "";
    let crearTexto = document.createElement("p");
    crearTexto.textContent = "Puzzle finalizado";
    fotosPuzzle.appendChild(crearTexto);
    fotosPuzzle.appendChild(btnIniciar);
    btnIniciar.addEventListener("click", refrescarPagina);
};
/*
  función para recargar la página
 */
let refrescarPagina = () =>{
    'use strict';
    location.reload(true);
};
window.addEventListener("DOMContentLoaded", iniciar);