// import functions and grab DOM elements
import { getCandies } from './fetch-utils.js';
import { renderCandy } from './render-utils.js';
import { getWaters } from './fetch-utils.js';
import { renderWater } from './render-utils.js';

// let state

// set event listeners 
// get user input
// use user input to update state
// update DOM to reflect the new state
const candiesListEl = document.querySelector('.candies-list');
window.addEventListener('load', async () => {
  const candies = await getCandies();

  for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candiesListEl.append(candyEl);
  }

});

const watersListEl = document.querySelector('.water-list');
window.addEventListener('load', async () => {
  const waters = await getWaters();

  for (let water of waters) {
    const waterEl = renderWater(water);
    watersListEl.append(waterEl);
  }
});
