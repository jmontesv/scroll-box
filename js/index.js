const contItemsDisponibles = document.querySelector('.items-disponibles');
const clnItemsDisponibles = contItemsDisponibles.cloneNode(true);
const scrollBox = document.querySelector('.scrollbox .items');
const items = clnItemsDisponibles.querySelectorAll('.item');
const itemsArray = Array.from(items);
const numElementosDiponibles = contItemsDisponibles.childElementCount;
const button = document.querySelector('button'); 
let nDivsAnterioresAlGanador;

for (let i=0; i <  numElementosDiponibles * 7 ; i++) {
    itemsArray.forEach((element) => {
        scrollBox.appendChild(element.cloneNode(true));
    });   
}
function animacionWinner(nDivsAnteriores, zIndex, display){
    scrollBox.querySelector(`div:nth-child(${nDivsAnteriores + 1})`).style.zIndex = `${zIndex}`;
    document.querySelector('.padding .shadow').style.display = `${display}`;
}

function calcularGanador() {
    let ganador = Math.floor(Math.random() * (numElementosDiponibles)) + 1;
    console.log('ganador:', ganador);
    nDivsAnterioresAlGanador = (scrollBox.childElementCount - (numElementosDiponibles * 2)) + ganador - 1 ;
    return nDivsAnterioresAlGanador;
}
function aplicarLeft() {
    let leftCalculado = 134 * calcularGanador() - (134 * 2); 
    scrollBox.style.transition = 'left 5s ease';
    scrollBox.style.left = `-${leftCalculado}px`;

}
button
.addEventListener('click', () => {
        button.disabled = true;
        if (nDivsAnterioresAlGanador) animacionWinner(nDivsAnterioresAlGanador, 0, 'none' );
        scrollBox.style.transition = 'left 0s ease';
        scrollBox.style.left = '0px';
        setTimeout(() => {aplicarLeft()}, 10);
    });
// Habilitamos el botón de nuevo cuando la animación concluye, para no poder rollear mientras estás todavía en el proceso     
scrollBox.addEventListener('transitionend' , () => {
    button.disabled = false;
    animacionWinner(nDivsAnterioresAlGanador, 15 , 'block');
});
