import { clearGameboard, renderShip } from './dom/gameboardsScreen';
import startManualMode from './modes';

const placeShipsRandomlyOnBoard = (human, ships) => {
  clearGameboard();
  human.placeShipsRandomly(ships);
  const placedShips = human.gameboard.placedShips;
  placedShips.forEach((placedShip) => {
    renderShip(placedShip);
  });
};

const game = (mode, human, bot, ships) => {
  const randomizeBoardBtn = document.querySelector('#randomize-board-btn');
  randomizeBoardBtn.addEventListener(
    'click',
    placeShipsRandomlyOnBoard.bind(null, human, ships)
  );
  if (mode === 'manual') {
    startManualMode(human, bot);
  }
};

export default game;
