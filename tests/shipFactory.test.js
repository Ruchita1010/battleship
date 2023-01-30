import shipFactory from '../src/modules/shipFactory';

describe('Ship Factory', () => {
  it('should return the length of the ship', () => {
    const ship = shipFactory(4);
    expect(ship.length).toBe(4);
  });

  it('should return true when the ship is sunk', () => {
    const ship = shipFactory(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it('should return false when the ship is not sunk', () => {
    const ship = shipFactory(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
