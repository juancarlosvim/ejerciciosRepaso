/*
 Ejercicio dónde vamos a realizar un puzzle
 */
/*
    variables globales

 */
let debug = true;
let intercambio = [];
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
    let tamFotos = crearFotos().length;
    let arrayFotos = crearFotos();
    let numerosAleatoriosFotos = numerosAleatorios(arrayFotos);
    if(debug){
        console.log(arrayFotos);
        console.log(numerosAleatoriosFotos);
    }
    for(let i=0;i<tamFotos;i++){
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
    let tamArray = document.getElementsByTagName("img").length;
    for(let i =0;i<tamArray;i++){
        cogerImagenes[i] =  document.getElementsByTagName("img")[i];
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
    let arrayOriginal = getElementosArray();
    let ruta = e.target;
    let posiciones = [];

    intercambio.push(ruta);
    if(debug){
        console.log(arrayOriginal);
        console.log(intercambio);
    }
    if(intercambio.length===2){
        for(let i=0;i<arrayOriginal.length;i++){
            if(arrayOriginal[i]=== intercambio[0]){
               posiciones.push(i);
            }else if(arrayOriginal[i] === intercambio[1]){
                posiciones.push(i);
            }
        }
        /*
            obtenemos un array con las posicones de las fotos
         */
        console.log(posiciones);
        intercambio = [];
        console.log(intercambio);
    }

};

window.addEventListener("DOMContentLoaded", iniciar);