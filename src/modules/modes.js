import { markCell } from './dom/gameboardsScreen';
import { getGameboardCells } from './dom/utils';

const playTurns = async (human, bot, e) => {
  let result;
  result = human.play(bot, e.target.id, false);
  markCell(result.coords, result.hit, 1);
  if (result.win) {
    console.log(human.name);
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  result = bot.play(human, null, true);
  markCell(result.coords, result.hit, 0);
  if (result.win) {
    console.log(bot.name);
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

export default startManualMode;
