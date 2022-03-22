// import functions and grab DOM elements
import { fetchAllCandies, fetchAllWaters, fetchAllTeas, fetchAllInstruments } from './fetch-utils.js';
import { renderCandy, renderWater, renderTeas, renderInstruments } from './render-utils.js';

// let state

// set event listeners 
// get user input
// use user input to update state
// update DOM to reflect the new state
window.addEventListener('load', async () => {
  fetchAndDisplayCandies();
  fetchAndDisplayWaters();
  fetchAndDisplayTeas();
  fetchAndDisplayInstruments();

});

const candiesListEl = document.querySelector('.candies-list');
async function fetchAndDisplayCandies() {

  const candies = await fetchAllCandies();

  for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candiesListEl.append(candyEl);
  }
}

const watersListEl = document.querySelector('.water-list');

async function fetchAndDisplayWaters() {

  const waters = await fetchAllWaters();

  for (let water of waters) {
    const waterEl = renderWater(water);
    watersListEl.append(waterEl);
  }
}

const teasListEl = document.querySelector('.teas-list');

async function fetchAndDisplayTeas() {

  const teas = await fetchAllTeas();

  for (let tea of teas) {
    const teaEl = renderTeas(tea);
    teasListEl.append(teaEl);
  }
}

const instrumentListEl = document.querySelector('.instruments-list');

async function fetchAndDisplayInstruments() {

  const instruments = await fetchAllInstruments();

  for (let instrument of instruments) {
    const instrumentEl = renderInstruments(instrument);
    instrumentListEl.append(instrumentEl);
  }

}
