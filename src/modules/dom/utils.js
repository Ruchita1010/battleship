const clearMainContainer = () => {
  const mainContainer = document.querySelector('#main-container');
  mainContainer.innerHTML = '';
};

const createButton = (btnContent, idValue) => {
  const btn = document.createElement('button');
  btn.textContent = btnContent;
  btn.id = idValue;
  btn.classList.add('btn', 'board-btn');
  return btn;
};

const getGameboardCells = (index) => {
  const gameboards = document.querySelectorAll('.gameboard');
  return [...gameboards[index].children];
};

const getModal = () => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  const mainContainer = document.querySelector('#main-container');
  mainContainer.appendChild(modal);
  return modal;
};

const toggleVeil = () => {
  const veilElem = document.querySelector('.veil');
  if (veilElem) {
    veilElem.remove();
    return;
  }
  const gameboard = document.querySelectorAll('.gameboard')[1];
  gameboard.style.position = 'relative';
  const veil = document.createElement('div');
  veil.classList.add('veil');
  const playButton = createButton('PLAY', 'play-btn');
  veil.appendChild(playButton);
  gameboard.appendChild(veil);
};

export {
  clearMainContainer,
  createButton,
  getGameboardCells,
  getModal,
  toggleVeil,
};
