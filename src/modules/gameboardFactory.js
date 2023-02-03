const gameboardFactory = (size) => {
  const placedShips = [];
  const grid = new Array(size).fill(0).map(() => new Array(size).fill(0));
  const missedShots = [];

  const placeShip = (ship, x, y, orientation) => {
    let coordinates = [];
    // ṭo check that the ship gets placed within the board
    if (x + ship.length > size || y + ship.length > size) {
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      let X = orientation === 'vertical' ? x + i : x;
      let Y = orientation === 'vertical' ? y : y + i;
      // to check if any ship is already placed at the coordinate
      if (grid[X][Y] !== 0) {
        return false;
      }
      grid[X][Y] = 1;
      coordinates.push({ xCoord: X, yCoord: Y });
    }
    // to keep track of the placed ships
    placedShips.push({ ship, orientation, coordinates });
    return true;
  };

  const receiveAttack = (x, y) => {
    if (grid[x][y] === 0) {
      // to record the coordinates of the missed shot
      missedShots.push({ x, y });
      return false;
    }
    // to find the ship that was hit
    const hitShipData = placedShips.find((placedShip) =>
      placedShip.coordinates.some(
        ({ xCoord, yCoord }) => xCoord === x && yCoord === y
      )
    );
    hitShipData.ship.hit();
    return true;
  };

  const isFleetSunk = () => {
    return placedShips.every((placedShip) => placedShip.ship.isSunk());
  };

  return {
    grid,
    missedShots,
    placedShips,
    size,
    isFleetSunk,
    placeShip,
    receiveAttack,
  };
};

export default gameboardFactory;
