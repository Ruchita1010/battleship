import {
  removeBoardBtns,
  renderGameboardsScreen,
} from './dom/gameboardsScreen';
import { randomizeBoard, resetBoard } from './dom/shipsPlacement';
import { toggleVeil } from './dom/utils';
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
  // starts game play
  const playBtn = document.querySelector('#play-btn');
  playBtn.addEventListener('click', () => {
    removeBoardBtns();
    toggleVeil();
    if (mode === 'manual') {
      startManualMode(human, bot, ships);
    }
  });
};

export default setGame;
