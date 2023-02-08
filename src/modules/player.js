import gameboardFactory from './gameboardFactory';

const player = (name, gameboardSize) => {
  const gameboard = gameboardFactory(gameboardSize);
  const attackedCoordinates = [];

  const getCoords = (attackedCoords, clickedElem, random) => {
    if (!random) {
      return clickedElem.split('').map(Number);
    }
    let x, y;
    do {
      x = Math.floor(Math.random() * gameboardSize);
      y = Math.floor(Math.random() * gameboardSize);
    } while (
      /* to ensure that the coordinates have not been attacked before. Thus, the loop
      goes on until we get such coords */
      attackedCoords.some((coords) => coords.x === x && coords.y === y)
    );
    // to keep track of the attacked coordinates, later used for generating new coords
    attackedCoords.push({ x, y });
    return [x, y];
  };

  const play = (enemy, clickedElem, random) => {
    const [x, y] = getCoords(enemy.attackedCoordinates, clickedElem, random);
    const hit = enemy.gameboard.receiveAttack(x, y);
    let result = { coords: [x, y], hit, win: false };
    if (enemy.gameboard.isFleetSunk()) {
      result.win = true;
    }
    return result;
  };

  const placeShipsRandomly = (ships) => {
    // to remove previous placed ships (both from grid and placedShips array)
    gameboard.reset();
    ships.forEach((ship) => {
      let placed = false;
      while (!placed) {
        let x = Math.floor(Math.random() * gameboardSize);
        let y = Math.floor(Math.random() * gameboardSize);
        let orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        placed = gameboard.placeShip(ship, x, y, orientation);
      }
    });
  };

  return {
    attackedCoordinates,
    gameboard,
    name,
    placeShipsRandomly,
    play,
  };
};

export default player;
