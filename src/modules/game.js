import startManualMode from './modes';
import player from './player';
import shipFactory from './shipFactory';

const game = (name, mode, gameboardSize) => {
  const human = player(name, gameboardSize);
  const bot = player('Robobo', gameboardSize);

  // system for allowing players to place their ships to be implemented later
  human.gameboard.placeShip(shipFactory(2), 2, 3, 'horizontal');
  human.gameboard.placeShip(shipFactory(3), 2, 2, 'vertical');
  bot.gameboard.placeShip(shipFactory(2), 1, 1, 'horizontal');
  bot.gameboard.placeShip(shipFactory(3), 4, 4, 'vertical');

  if (mode === 'manual') {
    startManualMode(human, bot);
  }
};

export default game;
