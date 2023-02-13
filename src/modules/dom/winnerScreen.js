import { createButton, getModal } from './utils';

const createWinnerContainer = (name) => {
  const winnerContainer = document.createElement('div');
  winnerContainer.id = 'winner-container';
  const winnerName = document.createElement('p');
  winnerName.id = 'winner-name';
  winnerName.textContent = `${name} wins!`;
  const restartBtn = createButton('RESTART', 'restart-btn');
  restartBtn.addEventListener('click', () => {
    location.reload();
  });
  winnerContainer.appendChild(winnerName);
  winnerContainer.appendChild(restartBtn);
  return winnerContainer;
};

const renderWinner = (name) => {
  const modal = getModal();
  const winnerContainer = createWinnerContainer(name);
  modal.appendChild(winnerContainer);
};

export default renderWinner;
