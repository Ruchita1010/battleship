import {
  clearGameboard,
  createGameboardDOM,
  renderShip,
} from './gameboardsScreen';
import { getGameboardCells, getModal } from './utils';

const createShipsDOM = (ships) => {
  const shipsContainer = document.createElement('div');
  shipsContainer.id = 'port';
  let prevShipLength = 0,
    shipsCount = 0;
  let shipContainer;
  ships.forEach((ship) => {
    const draggableShip = document.createElement('div');
    draggableShip.classList.add('draggable-ship');
    draggableShip.setAttribute('draggable', 'true');
    draggableShip.id = shipsCount;
    draggableShip.style.width = `${ship.length * 3.5}vmax`;
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

const dragAndDropShips = (human, ships, gameboard) => {
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
    const placed = human.gameboard.placeShip(
      ships[draggedShip.id],
      Number(x),
      Number(y),
      'horizontal'
    );
    if (placed) {
      placedShipsCount++;
      draggedShip.remove();
      const placedShip = human.gameboard.placedShips[placedShipsCount - 1];
      renderShip(placedShip, [...gameboard.children]);
    }
    if (placedShipsCount === 10) {
      const modal = document.querySelector('#modal');
      modal.remove();
      const placedShips = human.gameboard.placedShips;
      renderAllShips(placedShips);
      return;
    }
  });
};

const resetBoard = (player, ships) => {
  player.gameboard.reset(ships);
  clearGameboard();
  const modal = getModal();
  const tempGameboard = createGameboardDOM(player.gameboard.size);
  const shipsContainer = createShipsDOM(ships);
  modal.appendChild(tempGameboard);
  modal.appendChild(shipsContainer);
  dragAndDropShips(player, ships, tempGameboard);
};

const randomizeBoard = (player, ships) => {
  clearGameboard();
  player.placeShipsRandomly(ships);
  const placedShips = player.gameboard.placedShips;
  renderAllShips(placedShips);
};

export { randomizeBoard, resetBoard };
