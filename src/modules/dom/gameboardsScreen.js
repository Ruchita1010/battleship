import { clearMainContainer, createButton, getGameboardCells } from './utils';

const createGameboardContainer = () => {
  const gameboardContainer = document.createElement('div');
  gameboardContainer.classList.add('gameboard-container');
  return gameboardContainer;
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

const createBoardButtons = () => {
  const boardBtns = document.createElement('div');
  boardBtns.id = 'board-btns';
  const resetBoardBtn = createButton('RESET', 'reset-board-btn');
  const randomizeBoardBtn = createButton('RANDOM', 'randomize-board-btn');
  boardBtns.appendChild(randomizeBoardBtn);
  boardBtns.appendChild(resetBoardBtn);
  return boardBtns;
};

const createHumanGameboardContainer = (gameboardSize) => {
  const gameboardContainer = createGameboardContainer();
  const gameboard = createGameboardDOM(gameboardSize);
  const boardBtns = createBoardButtons();
  gameboardContainer.appendChild(gameboard);
  gameboardContainer.appendChild(boardBtns);
  return gameboardContainer;
};

const createComputerGameboardContainer = (gameboardSize) => {
  const gameboardContainer = createGameboardContainer();
  const gameboard = createGameboardDOM(gameboardSize);
  gameboardContainer.appendChild(gameboard);
  return gameboardContainer;
};

const createGameboardsScreen = (gameboardSize) => {
  const gameboardsScreen = document.createElement('div');
  gameboardsScreen.id = 'gameboards-screen';
  const gameboardContainer1 = createHumanGameboardContainer(gameboardSize);
  const gameboardContainer2 = createComputerGameboardContainer(gameboardSize);
  gameboardsScreen.appendChild(gameboardContainer1);
  gameboardsScreen.appendChild(gameboardContainer2);
  return gameboardsScreen;
};

const renderGameboardsScreen = (gameboardSize) => {
  clearMainContainer();
  const gameboardsScreen = createGameboardsScreen(gameboardSize);
  const mainContainer = document.querySelector('#main-container');
  mainContainer.appendChild(gameboardsScreen);
};

const clearGameboard = () => {
  const cells = getGameboardCells(0);
  cells.forEach((cell) => {
    cell.innerHTML = '';
  });
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

const renderShip = (placedShip, gameboardCells) => {
  const { ship, coordinates, orientation } = placedShip;
  const targetCell = gameboardCells.find(
    (gameboardCell) =>
      gameboardCell.id === `${coordinates[0].xCoord}${coordinates[0].yCoord}`
  );
  const domShip = document.createElement('div');
  domShip.classList.add('ship');
  if (orientation === 'vertical') {
    domShip.style.height = `${ship.length * 3.5}vmax`;
    domShip.style.width = '3.5vmax';
  } else {
    domShip.style.width = `${ship.length * 3.5}vmax`;
    domShip.style.height = '3.5vmax';
  }
  targetCell.appendChild(domShip);
  return;
};

export {
  clearGameboard,
  createGameboardDOM,
  markCell,
  renderGameboardsScreen,
  renderShip,
};
