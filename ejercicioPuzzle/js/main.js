/*
 Ejercicio dónde vamos a realizar un puzzle
 */
/*
    variables globales

 */
let debug = true;
let intercambio = [];
let ruta = "";
let iniciar = () =>{
    'use strict';
    colocarImagen();
    trabajarImagen();
    getElementosArray();
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
            aleatorio = Math.floor(Math.random() * fotosArray.length)
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
        crearImg.setAttribute('id', "imagen"+i);
        crearImg.setAttribute('src', ruta+arrayFotos[numerosAleatoriosFotos[i]]);
        crearDivFotos.appendChild(crearImg);
    }
    cogerBody.appendChild(crearDivFotos);
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
    let posiciones = [];
    let rutaDestino;
    let rutaInterc;
    //intercambio.push(ruta);
    if(ruta.length === 0){
        ruta = e.target.id;
        console.log("ruta", ruta);
    }else{
        rutaDestino = e.target.id;
        console.log("rutaDestino", rutaDestino);
        intercambiarFotos(ruta, rutaDestino);
        ruta= "";
    }

};

let intercambiarFotos = (param1, param2) =>{
    let directorio = "img/";
    let cogerImagenPrimera = document.getElementById(param1);
    //let encontrarRuta = cogerImagenPrimera.lastIndexOf("/");
    //mequedo con el nombre de la foto
    let cogerRutaImagenP = cogerImagenPrimera.src.split(directorio)[1];
    console.log(cogerRutaImagenP);
    console.log("cogerImagenPrimera", cogerImagenPrimera);
    let cogerImagenSegunda = document.getElementById(param2);
    //me quedo con el nomre de la seguda foto
    let cogerRutaImagenS = cogerImagenSegunda.src.split(directorio)[1];

    console.log("cogerSegundaImagen", cogerImagenSegunda);
    // guardo el nombre de la foto en una variable auxiliar
    let cogerImagenAx = cogerRutaImagenP;
    /*
        realizando intercambio
     */
    cogerImagenPrimera.src = directorio+cogerRutaImagenS;
    console.log("imagenPriemra", cogerImagenPrimera);
    cogerImagenSegunda.src = directorio+cogerImagenAx;
    console.log("imagenIntercambiada2", cogerImagenSegunda);

};



window.addEventListener("DOMContentLoaded", iniciar);