import { markCell, removeBoardBtns } from './dom/gameboardsScreen';
import { getGameboardCells, toggleVeil } from './dom/utils';
import renderWinner from './dom/winnerScreen';

const playTurns = async (human, bot, e) => {
  let result;
  result = human.play(bot, e.target.id, false);
  markCell(result.coords, result.hit, 1);
  if (result.win) {
    renderWinner(human.name);
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  result = bot.play(human, null, true);
  markCell(result.coords, result.hit, 0);
  if (result.win) {
    renderWinner(bot.name);
    return;
  }
};

const startManualMode = (human, bot) => {
  const cells = getGameboardCells(1);
  cells.forEach((cell) => {
    cell.addEventListener('click', playTurns.bind(null, human, bot), {
      once: true,
    });
  });
};

const startAutoMode = (player1, player2) => {
  let currPlayer = player1;
  const gameInterval = setInterval(() => {
    const enemy = currPlayer === player1 ? player2 : player1;
    const result = currPlayer.play(enemy, null, true);
    const enemyBoardIndex = currPlayer === player1 ? 1 : 0;
    markCell(result.coords, result.hit, enemyBoardIndex);
    if (result.win) {
      renderWinner(currPlayer.name);
      clearInterval(gameInterval);
    }
    currPlayer = currPlayer === player1 ? player2 : player1;
  }, 500);
};

const game = (mode, human, bot) => {
  removeBoardBtns();
  toggleVeil();
  if (mode === 'manual') {
    startManualMode(human, bot);
    return;
  }
  startAutoMode(human, bot);
};

export default game;
