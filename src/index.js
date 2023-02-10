import './styles/gameboard.css';
import './styles/main.css';
import './styles/modal.css';
import './styles/start-screen.css';
import player from './modules/player';
import setGame from './modules/setGame';
import shipFactory from './modules/shipFactory';

const GAMEBOARDSIZE = 10;

const initShips = () => {
  const ships = [];
  const sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  sizes.forEach((size) => {
    const ship = shipFactory(size);
    ships.push(ship);
  });
  return ships;
};

const initGame = (e) => {
  e.preventDefault();
  const troopName = document.querySelector('#troop-name').value;
  const mode = document.querySelector('input[type="radio"]:checked').value;
  const human = player(troopName, GAMEBOARDSIZE);
  const bot = player('Robobo', GAMEBOARDSIZE);
  const ships = initShips();
  setGame(mode, human, bot, ships);
};

const startScreen = document.querySelector('#start-screen');
startScreen.addEventListener('submit', initGame);
