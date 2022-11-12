'use strict';

// QUERY SELECTORS
const h1 = document.querySelector('h1');
const drawGrid = document.querySelector('.draw-grid');
const clearBtn = document.querySelector('#clear-grid');


// Create grid of 16x16
for (let i = 0; i < 256; i++) {
   const square = document.createElement('div');
   square.className = 'square';
   square.id = 'square-' + i;
   drawGrid.append(square);
}

// h1.nextElementSibling(drawGrid);

const square = document.querySelector('.square');

// EVENT LISTENERS
// When square is clicked, it is filled in
drawGrid.addEventListener('click', (e) => {
   e.preventDefault();

   const squareId = e.target.id;

   const squareDiv = document.getElementById(squareId);
   // console.log(squareDiv);
   // const squareId = e.target.id;
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