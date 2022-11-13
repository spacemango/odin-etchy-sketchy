'use strict';

// QUERY SELECTORS
const h1 = document.querySelector('h1');
const drawGrid = document.querySelector('.draw-grid');
const clearBtn = document.querySelector('#clear-grid');
const applyBtn = document.querySelector('#apply-btn');
const root = document.querySelector(':root');
const gridRange = document.querySelector('#grid-range');
const gridValue = document.querySelector("#range-value");

// Default grid size
const defaultGridSize = 16;
let isDrawing = false;

// Generates grid from value of grid range
const createGrid = (num) => {

   const totalSquares = num * num;
   root.style.setProperty('--grid-size', num);

   for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.className = 'square';
      square.id = 'square-' + i;
      drawGrid.append(square);
   }
};

// Colours a square
const colourSquare = (id) => {
   const squareDiv = document.getElementById(id);
   squareDiv.style.backgroundColor = '#595959';
   squareDiv.style.border = '1px #595959 solid';
};

// Displays value of range slider in DOM
function getValue(value) {
   document.getElementById('range-value').innerHTML = `${value} x ${value}`;
}

// EVENT LISTENERS
// When square is clicked, it is filled in
drawGrid.addEventListener('mousedown', (e) => {
   e.preventDefault();

   if (e.target.id) {
      colourSquare(e.target.id);
      isDrawing = true;
      clearBtn.hidden = false;
   }
});

drawGrid.addEventListener('mousemove', (e) => {
   if (isDrawing) {
      colourSquare(e.target.id);
   }
});

drawGrid.addEventListener('mouseup', (e) => {
   isDrawing = false;
});

// Clear grid colour when clicked
clearBtn.addEventListener('click', () => {
   const square = document.querySelectorAll('.square');

   square.forEach(el => {
      el.style.backgroundColor = 'transparent';
      el.style.border = '1px #f2f2f2 solid';
   });

   clearBtn.hidden = true;
});

// Takes range value and sets grid size
gridRange.addEventListener('change', (e) => {
   drawGrid.innerHTML = '';
   createGrid(e.target.value);
});

// Init, default grid size
window.onload = () => {
   getValue(defaultGridSize);
   gridRange.value = defaultGridSize;
   createGrid(gridRange.value);
};
