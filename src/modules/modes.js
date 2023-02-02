import { getOpponentGameboardCells } from './dom';

const playTurns = async (human, bot, e) => {
  let result;
  result = human.play(bot, e.target.id, false);
  if (result === 'win') {
    console.log(human.name);
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  result = bot.play(human, null, true);
  if (result === 'win') {
    console.log(bot.name);
    return;
  }
};

const startManualMode = (human, bot) => {
  const cells = getOpponentGameboardCells();
  cells.forEach((cell) => {
    cell.addEventListener('click', playTurns.bind(null, human, bot), {
      once: true,
    });
  });
};

export default startManualMode;
