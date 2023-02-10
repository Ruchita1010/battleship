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

export { clearMainContainer, createButton, getGameboardCells, getModal };
