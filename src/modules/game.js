import { renderShips } from './dom';
import startManualMode from './modes';
import player from './player';
import shipFactory from './shipFactory';

const initShips = () => {
  const ships = [];
  const sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  sizes.forEach((size) => {
    const ship = shipFactory(size);
    ships.push(ship);
  });
  return ships;
};

const game = (name, mode, gameboardSize) => {
  const human = player(name, gameboardSize);
  const bot = player('Robobo', gameboardSize);
  const ships = initShips();
  human.placeShipsRandomly(ships);
  bot.placeShipsRandomly(ships);
  renderShips(human.gameboard.grid);

  if (mode === 'manual') {
    startManualMode(human, bot);
  }
};

export default game;
