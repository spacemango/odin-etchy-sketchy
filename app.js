'use strict';

// QUERY SELECTORS
const h1 = document.querySelector('h1');
const drawGrid = document.querySelector('.draw-grid');
const clearBtn = document.querySelector('#clear-grid');
const applyBtn = document.querySelector('#apply-btn');
const root = document.querySelector(':root');
const input = document.querySelector('#grid-range').value;

// const input = 2;

// Create grid
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

// EVENT LISTENERS
// When square is clicked, it is filled in
drawGrid.addEventListener('click', (e) => {
   e.preventDefault();

   const squareId = e.target.id;
   const squareDiv = document.getElementById(squareId);
   squareDiv.style.backgroundColor = '#595959';
   squareDiv.style.border = '1px #595959 solid';

   clearBtn.hidden = false;
});

// Clear grid when clicked
clearBtn.addEventListener('click', () => {
   const square = document.querySelectorAll('.square');

   square.forEach(el => {
      el.style.backgroundColor = 'transparent';
      el.style.border = '1px #f2f2f2 solid';
   });

   clearBtn.hidden = true;
});

function getValue(value) {
   // const gridRange = document.getElementById('grid-range').value;
   document.getElementById('rangeValue').innerHTML = `${value} x ${value}`;
}

createGrid(input);
