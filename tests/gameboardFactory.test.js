import gameboardFactory from '../src/modules/gameboardFactory';
import shipFactory from '../src/modules/shipFactory';

describe('Gameboard Factory', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = gameboardFactory(10);
  });

  describe('Placing ship', () => {
    it('should place a ship at specific coordinates on x-axis', () => {
      const ship = shipFactory(3);
      gameboard.placeShip(ship, 2, 3, 'horizontal');
      expect(gameboard.grid[2][3]).toBe(1);
      expect(gameboard.grid[2][4]).toBe(1);
      expect(gameboard.grid[2][5]).toBe(1);
    });

    it('should place a ship at specific coordinates on y-axis', () => {
      const ship = shipFactory(2);
      gameboard.placeShip(ship, 1, 1, 'vertical');
      expect(gameboard.grid[1][1]).toBe(1);
      expect(gameboard.grid[2][1]).toBe(1);
    });

    it('should not place a ship when it goes out of bounds', () => {
      const ship = shipFactory(2);
      gameboard.placeShip(ship, 9, 9, 'vertical');
      expect(gameboard.placedShips.length).toBe(0);
    });

    it('should not place a ship when it overlaps with another ship', () => {
      const ship1 = shipFactory(2);
      gameboard.placeShip(ship1, 4, 5, 'vertical');
      const ship2 = shipFactory(2);
      gameboard.placeShip(ship2, 4, 5, 'horizontal');
      expect(gameboard.placedShips.length).toBe(1);
    });
  });

  it('should return true when the attack hits a ship', () => {
    const ship = shipFactory(3);
    gameboard.placeShip(ship, 1, 3, 'horizontal');
    expect(gameboard.receiveAttack(1, 3)).toBe(true);
  });

  it('should return false when the attack does not hit a ship', () => {
    const ship = shipFactory(4);
    gameboard.placeShip(ship, 1, 2, 'horizontal');
    expect(gameboard.receiveAttack(1, 1)).toBe(false);
  });

  it('should return true when all the ships are sunk', () => {
    const ship1 = shipFactory(2);
    ship1.hit();
    ship1.hit();
    const ship2 = shipFactory(1);
    ship2.hit();
    gameboard.placeShip(ship1, 5, 7, 'vertical');
    gameboard.placeShip(ship2, 4, 4, 'horizontal');
    expect(gameboard.isFleetSunk()).toBe(true);
  });
});
