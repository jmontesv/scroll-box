const contItemsDisponibles = document.querySelector('.items-disponibles');
const clnItemsDisponibles = contItemsDisponibles.cloneNode(true);
const scrollBox = document.querySelector('.scrollbox .items');
const items = clnItemsDisponibles.querySelectorAll('.item');
const itemsArray = Array.from(items);
const numElementosDiponibles = contItemsDisponibles.childElementCount;

for (let i=0; i <  numElementosDiponibles * 7 ; i++) {
    itemsArray.forEach((element) => {
        scrollBox.appendChild(element.cloneNode(true));
    });   
}

function calcularGanador() {
    let ganador = Math.floor(Math.random() * (numElementosDiponibles + 1 - 1)) + 1;
    return (scrollBox.childElementCount - (numElementosDiponibles * 2)) + ganador - 1 ;
}
function aplicarLeft() {
    scrollBox.style.left = '0px';
    let leftCalculado = 134 * calcularGanador() - (134 * 2); 
    scrollBox.style.left = `-${leftCalculado}px`;
}
document.querySelector('button')
    .addEventListener('click', (e) => {
        aplicarLeft();
    })
