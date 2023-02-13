import './styles/gameboard.css';
import './styles/main.css';
import './styles/modal.css';
import './styles/start-screen.css';
import { renderGameboardsScreen } from './modules/dom/gameboardsScreen';
import {
  randomizeBoard,
  renderAllShips,
  resetBoard,
} from './modules/dom/shipsPlacement';
import game from './modules/game';
import player from './modules/player';

const GAMEBOARDSIZE = 10;

const initGame = (e) => {
  e.preventDefault();
  const troopName = document.querySelector('#troop-name').value;
  const mode = document.querySelector('input[type="radio"]:checked').value;
  const human = player(troopName, GAMEBOARDSIZE);
  const bot = player('Robobo', GAMEBOARDSIZE);
  renderGameboardsScreen(human.gameboard.size);
  // placing ships on board
  bot.placeShipsRandomly();
  human.placeShipsRandomly();
  renderAllShips(human.gameboard.placedShips);
  const randomizeBoardBtn = document.querySelector('#randomize-board-btn');
  randomizeBoardBtn.addEventListener('click', randomizeBoard.bind(null, human));
  const resetBoardBtn = document.querySelector('#reset-board-btn');
  resetBoardBtn.addEventListener('click', resetBoard.bind(null, human));
  // starts game
  const playBtn = document.querySelector('#play-btn');
  playBtn.addEventListener('click', game.bind(null, mode, human, bot));
};

const startScreen = document.querySelector('#start-screen');
startScreen.addEventListener('submit', initGame);
