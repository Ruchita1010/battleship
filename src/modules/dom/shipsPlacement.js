import {
  clearGameboard,
  createGameboardDOM,
  renderShip,
} from './gameboardsScreen';
import { getGameboardCells, getModal } from './utils';

const toggleShipOrientation = (shipLength, e) => {
  const currShip = e.target;
  const currOrientation = currShip.dataset.orientation;
  if (currOrientation === 'horizontal') {
    currShip.style.width = '3.5vmax';
    currShip.style.height = `${shipLength * 3.5}vmax`;
    currShip.dataset.orientation = 'vertical';
    return;
  }
  currShip.style.height = '3.5vmax';
  currShip.style.width = `${shipLength * 3.5}vmax`;
  currShip.dataset.orientation = 'horizontal';
};

const createShipsDOM = (ships) => {
  const shipsContainer = document.createElement('div');
  shipsContainer.id = 'port';
  let prevShipLength = 0,
    shipsCount = 0;
  let shipContainer;
  ships.forEach((ship) => {
    const draggableShip = document.createElement('div');
    draggableShip.id = shipsCount;
    draggableShip.classList.add('draggable-ship');
    draggableShip.setAttribute('draggable', 'true');
    draggableShip.setAttribute('data-orientation', 'horizontal');
    draggableShip.style.width = `${ship.length * 3.5}vmax`;
    draggableShip.addEventListener(
      'click',
      toggleShipOrientation.bind(null, ship.length)
    );
    // to put ships of same length in one container
    if (prevShipLength === ship.length) {
      shipContainer.appendChild(draggableShip);
    } else {
      shipContainer = document.createElement('div');
      shipContainer.classList.add('ship-container', `ship-size-${ship.length}`);
      shipContainer.appendChild(draggableShip);
    }
    shipsCount++;
    prevShipLength = ship.length;
    shipsContainer.appendChild(shipContainer);
  });
  return shipsContainer;
};

const renderAllShips = (placedShips) => {
  const cells = getGameboardCells(0);
  placedShips.forEach((placedShip) => {
    renderShip(placedShip, cells);
  });
};

const dragAndDropShips = (player, gameboard) => {
  let draggedShip,
    placedShipsCount = 0;
  const draggableShips = document.querySelectorAll('.draggable-ship');
  draggableShips.forEach((draggableShip) => {
    draggableShip.addEventListener('dragstart', (e) => {
      draggedShip = e.target;
    });
  });
  gameboard.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  gameboard.addEventListener('drop', (e) => {
    const [x, y] = e.target.id.split('');
    const placed = player.gameboard.placeShip(
      player.ships[draggedShip.id],
      Number(x),
      Number(y),
      draggedShip.dataset.orientation
    );
    if (placed) {
      placedShipsCount++;
      draggedShip.remove();
      const placedShip = player.gameboard.placedShips[placedShipsCount - 1];
      renderShip(placedShip, [...gameboard.children]);
    }
    if (placedShipsCount === 10) {
      const modal = document.querySelector('#modal');
      modal.remove();
      const placedShips = player.gameboard.placedShips;
      renderAllShips(placedShips);
      return;
    }
  });
};

const resetBoard = (player) => {
  player.gameboard.reset();
  clearGameboard();
  const modal = getModal();
  const tempGameboard = createGameboardDOM(player.gameboard.size);
  const shipsContainer = createShipsDOM(player.ships);
  modal.appendChild(tempGameboard);
  modal.appendChild(shipsContainer);
  dragAndDropShips(player, tempGameboard);
};

const randomizeBoard = (player) => {
  clearGameboard();
  player.placeShipsRandomly();
  const placedShips = player.gameboard.placedShips;
  renderAllShips(placedShips);
};

export { randomizeBoard, resetBoard };
