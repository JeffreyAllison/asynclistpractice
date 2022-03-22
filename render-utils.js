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