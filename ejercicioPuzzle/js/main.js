/*
 Ejercicio dónde vamos a realizar un puzzle
 */
/*
    variables globales

 */
let debug = true;
let iniciar = () =>{
    'use strict';
    colocarImagen();
    trabajarImagen();
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
        crearImg.setAttribute('src', ruta+arrayFotos[numerosAleatoriosFotos[i]]);
        crearDivFotos.appendChild(crearImg);
    }
    cogerBody.appendChild(crearDivFotos);
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

let imagenPulsada = (e) =>{
    'use strict';
    if(debug){
        console.log(e.target);
    }
};

window.addEventListener("DOMContentLoaded", iniciar);