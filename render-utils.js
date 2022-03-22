export function renderCandy(candy) {
  const candyEl = document.createElement('div');
  const nameEl = document.createElement('h2');
  const sourEl = document.createElement('p');
  const caloriesEl = document.createElement('p');
  const nutsEl = document.createElement('p');

  candyEl.classList.add('candy');

  nameEl.textContent = candy.name;
  sourEl.textContent = candy.sour;
  caloriesEl.textContent = candy.calories;
  nutsEl.textContent = candy.contains_nuts;

  candyEl.append(
    nameEl,
    sourEl,
    caloriesEl,
    nutsEl,
  );

  return candyEl;
}

export function renderWater(water) {
  const waterEl = document.createElement('div');
  const categoryEl = document.createElement('h2');
  const salineEl = document.createElement('p');
  const nameEl = document.createElement('p');
  const locationEl = document.createElement('p');

  waterEl.classList.add('water');

  categoryEl.textContent = water.category;
  salineEl.textContent = water.saline;
  nameEl.textContent = water.name;
  locationEl.textContent = water.location;

  waterEl.append(
    categoryEl,
    salineEl,
    nameEl,
    locationEl,
  );

  return waterEl;

}

export function renderTeas(tea) {
  const teaEl = document.createElement('div');
  const categoryEl = document.createElement('h2');
  const nameEl = document.createElement('p');
  const caffeinatedEl = document.createElement('p');
  const flavorEl = document.createElement('p');

  teaEl.classList.add('tea');

  categoryEl.textContent = tea.category;
  nameEl.textContent = tea.name;
  caffeinatedEl.textContent = tea.caffeinated;
  flavorEl.textContent = tea.flavor;

  teaEl.append(
    categoryEl,
    nameEl,
    caffeinatedEl,
    flavorEl,
  );

  return teaEl;

}

export function renderInstruments(instrument) {
  const instrumentEl = document.createElement('div');
  const coolEl = document.createElement('p');
  const categoryEl = document.createElement('h2');
  const brandEl = document.createElement('p');
  const priceEl = document.createElement('p');
  const playersEl = document.createElement('p');

  instrumentEl.classList.add('instrument');

  coolEl.textContent = instrument.is_cool;
  categoryEl.textContent = instrument.category;
  brandEl.textContent = instrument.brand;
  priceEl.textContent = instrument.price;
  playersEl.textContent = instrument.famous_players;

  instrumentEl.append(
    categoryEl,
    brandEl,
    priceEl,
    playersEl,
    coolEl,
  );

  return instrumentEl;

}