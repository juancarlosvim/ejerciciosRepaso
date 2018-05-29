let iniciar = () =>{
    'use strict';
    let cogerSelect = document.getElementById("sFechaNacimento");
    ponerFechas(1990, 2020, cogerSelect);

};


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

window.addEventListener("DOMContentLoaded", iniciar);