let debug = true;
let iniciar = () =>{
    'use strict';
    let  url = "http://daw2.iesoretania.es/alumno04/programacionTV/canales.php";
    let ajax = new XMLHttpRequest();
    let formulario = new FormData();
    ajax.addEventListener("load", (e)=>{
        if(ajax.status===200 && ajax.readyState===4){
            if(debug){
                console.log("cargando ajax");
            }
            let dato = e.target;
            let contenido = dato.responseText;
            if(debug){
                //console.log(contenido);
                trabajarCanales(contenido);
            }
        }else{
            if(debug){
                console.log("conexion fallida");
            }
        }
    });
    ajax.open("POST", url, true);
    ajax.send(null);
};

/*
    funcion que recibe un parametro y lo que realiza es separar el contenido que hace de la conexion a canales
 */
let trabajarCanales = (c) =>{
    'use strict';
    let datos = c;
    datos.split("*");
    let canales = datos.split("*")[0].split("#");
    let canalesOficiales = datos.split("*")[1].split("#");
    let conexionAjaxCanales = datos.split("*")[2].split("#");
    if(debug){
        console.log(canales);
        console.log(canalesOficiales);
        console.log(conexionAjaxCanales);
        console.log(datos.split("*"));
    }
    colocarCanalesOficiales(canalesOficiales);
    colocarCanales(canales);
    canalesAjax(conexionAjaxCanales);
};

/*
    funcion que le pasamos un array trabajamos con el para colocarlo en la tabla cn
 */
let colocarCanalesOficiales = (cn1) =>{
    'use strict';
    let canales  = cn1;
    let cogerColumnaCanalesOficiales = document.getElementsByClassName("canalesOficiales");
    if(debug){
        console.log(canales);
    }
    for(let i=0;i<canales.length;i++){
        //let crearCabecera = document.createElement("th");
        cogerColumnaCanalesOficiales[i].textContent = canales[i];

    }
};

/*
    funcion para trabajar con con los canales
 */

let colocarCanales = (cn2) =>{
    'use strict';
    let canalImagen = cn2;
    let rutaFotos = "img/";
    let cogerColumnaImagenTGexto = document.getElementsByClassName("canalImagen");
    for(let i=0;i<canalImagen.length;i++){
        let crearImagenCanal = document.createElement("img");
        cogerColumnaImagenTGexto[i].textContent="";
        crearImagenCanal.setAttribute("src", rutaFotos+canalImagen[i]+".png");
        cogerColumnaImagenTGexto[i].appendChild(crearImagenCanal);

    }
    if(debug){
        console.log(canalImagen);
    }

};

/*
 funcion para realizar las conexion a ajax
 */

let canalesAjax = (cn3) =>{
    'use strict';
    let canalesConexion = cn3;
    let url = "http://daw2.iesoretania.es/alumno04/programacionTV/";
    let contenidoCanal = [];
    let contenidoPrimera;
    let contenidoLa2;
    let contenidoAntena3;
    let contenidoCuatro;
    let contenidoSexta;

    for(let i=0;i<canalesConexion.length;i++){
        contenidoCanal[i] = url+canalesConexion[i];
    }
    /*
     realizando conexiones ajax
     */
    contenidoPrimera = colocarInformacionLaPrimera(contenidoCanal[0]);
    contenidoLa2 = colocarInformacionLaSegunda(contenidoCanal[1]);
    //colocarInformacionLaPrimera(contenidoPrimera);
    if(debug){

        console.log(contenidoCanal);
        console.log(canalesConexion);
    }
};

/*
    funcion para colocar informacion de canal la primera
 */
let colocarInformacionLaPrimera = (inf) =>{
    'use strict';
    let url = inf;
    let ajax = new XMLHttpRequest();
    let formulario = new FormData();
    ajax.addEventListener("load", (e)=>{
        if(ajax.status===200 && ajax.readyState===4){
            if(debug){
                console.log("Conexion ajax");
            }
            let dato = e.target;
            let contenido = JSON.parse(dato.responseText);
            console.log(contenido);
            colocarInformacionLaPrimera(contenido);
            let informacion = contenido;
            let cogerFilaPrimera = document.querySelector("tbody>tr");
            for(let i=0;i<informacion.length;i++){
                let crearFilas = document.createElement("td");
                crearFilas.textContent = informacion[i].hora;
                cogerFilaPrimera.appendChild(crearFilas);
            }
            if(debug){

                console.log("informacion", informacion);
            }
        }else{
            if(debug){
                console.log("error en la conexion");
            }
        }
    });
    ajax.open("POST", url, true);
    ajax.send(null);

};

/*
    funcion para colocar informacion de canal la 2
 */
let colocarInformacionLaSegunda= (inf) =>{
    'use strict';
    let url = inf;
    let ajax = new XMLHttpRequest();
    let formulario = new FormData();
    ajax.addEventListener("load", (e)=>{
        if(ajax.status===200 && ajax.readyState===4){
            if(debug){
                console.log("Conexion ajax");
            }
            let dato = e.target;
            let contenido = JSON.parse(dato.responseText);
            console.log(contenido);
            colocarInformacionLaPrimera(contenido);
            let informacion = contenido;
            let cogerFila2 = document.querySelectorAll("tbody>tr")[1];
            for(let i=0;i<informacion.length;i++){
                let crearFilas = document.createElement("td");
                crearFilas.textContent = informacion[i].hora;
                cogerFila2.appendChild(crearFilas);
            }
            if(debug){

                console.log("informacion", informacion);
            }
        }else{
            if(debug){
                console.log("error en la conexion");
            }
        }
    });
    ajax.open("POST", url, true);
    ajax.send(null);

};

window.addEventListener("DOMContentLoaded", iniciar);
