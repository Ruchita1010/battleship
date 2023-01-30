import gameboardFactory from './gameboardFactory';

const player = (name, gameboardSize) => {
  const gameboard = gameboardFactory(gameboardSize);
  const attackedCoordinates = [];

  const getCoords = (random) => {
    if (random) {
      let x, y;
      x = Math.floor(Math.random() * gameboardSize);
      y = Math.floor(Math.random() * gameboardSize);
      return { x, y };
    } else {
      // return {x, y} as per the user input from DOM
    }
  };

  const play = (attackedCoordinates, random) => {
    let coords;
    do {
      coords = getCoords(random);
    } while (
      // to ensure that the coordinates have not been attacked before
      attackedCoordinates.some(
        (coordinates) =>
          coordinates.x === coords.x && coordinates.y === coords.y
      )
    );
    // to keep track of the attacked coordinates
    attackedCoordinates.push(coords);
    return coords;
  };

  return { attackedCoordinates, gameboard, name, play };
};

export default player;
