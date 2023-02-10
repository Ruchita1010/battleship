import { renderGameboardsScreen } from './dom/gameboardsScreen';
import { randomizeBoard, resetBoard } from './dom/shipsPlacement';
import startManualMode from './modes';

const setGame = (mode, human, bot, ships) => {
  renderGameboardsScreen(human.gameboard.size);
  const randomizeBoardBtn = document.querySelector('#randomize-board-btn');
  randomizeBoardBtn.addEventListener(
    'click',
    randomizeBoard.bind(null, human, ships)
  );
  const resetBoardBtn = document.querySelector('#reset-board-btn');
  resetBoardBtn.addEventListener('click', resetBoard.bind(null, human, ships));
  if (mode === 'manual') {
    startManualMode(human, bot);
  }
};

export default setGame;
