import './styles/gameboard.css';
import './styles/main.css';
import './styles/start-screen.css';
import { clearMainContainer, renderGameboardsScreen } from './modules/dom';
import game from './modules/game';

const GAMEBOARDSIZE = 10;

const initGame = (e) => {
  e.preventDefault();
  const troopName = document.querySelector('#troop-name').value;
  const mode = document.querySelector('input[type="radio"]:checked').value;
  clearMainContainer();
  renderGameboardsScreen(GAMEBOARDSIZE);
  game(troopName, mode, GAMEBOARDSIZE);
};

const startScreen = document.querySelector('#start-screen');
startScreen.addEventListener('submit', initGame);
