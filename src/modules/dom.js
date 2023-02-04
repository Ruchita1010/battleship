const clearMainContainer = () => {
  const mainContainer = document.querySelector('#main-container');
  mainContainer.innerHTML = '';
};

const getGameboardCells = (index) => {
  const gameboards = document.querySelectorAll('.gameboard');
  return [...gameboards[index].children];
};

const markCell = (coords, hit, gameboardIndex) => {
  const cells = getGameboardCells(gameboardIndex);
  const targetCell = cells.find(
    (cell) => cell.id === `${coords[0]}${coords[1]}`
  );
  if (hit) {
    targetCell.classList.add('hit');
    return;
  }
  targetCell.classList.add('miss');
};

const renderShips = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        const cells = getGameboardCells(0);
        const cellElem = cells.find((cell) => cell.id === `${i}${j}`);
        cellElem.style.backgroundColor = 'green';
      }
    }
  }
};

const createGameboardDOM = (gameboardSize) => {
  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');
  for (let i = 0; i < gameboardSize; i++) {
    for (let j = 0; j < gameboardSize; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      // setting the coordinates as the id of the cell
      cell.setAttribute('id', `${i}${j}`);
      gameboard.appendChild(cell);
    }
  }
  return gameboard;
};

const renderGameboardsScreen = (gameboardSize) => {
  const gameboardsScreen = document.createElement('div');
  gameboardsScreen.id = 'gameboards-screen';
  const gameboard1 = createGameboardDOM(gameboardSize);
  const gameboard2 = createGameboardDOM(gameboardSize);
  gameboardsScreen.appendChild(gameboard1);
  gameboardsScreen.appendChild(gameboard2);
  const mainContainer = document.querySelector('#main-container');
  mainContainer.appendChild(gameboardsScreen);
};

export {
  clearMainContainer,
  getGameboardCells,
  markCell,
  renderShips,
  renderGameboardsScreen,
};
