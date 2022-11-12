'use strict';

const h1 = document.querySelector('h1');
const drawGrid = document.querySelector('.draw-grid');

for (let i = 0; i < 256; i++) {
   const square = document.createElement('div');
   square.className = 'square';
   square.id = 'square-' + i;
   drawGrid.append(square);
}

h1.nextElementSibling(drawGrid);