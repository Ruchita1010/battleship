import gameboardFactory from '../js_modules/gameboardFactory';
import player from '../js_modules/player';
import shipFactory from '../js_modules/shipFactory';

describe('Player', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = gameboardFactory(10);
    gameboard.placeShip(shipFactory(2), 0, 1, 'horizontal');
  });

  describe('Play', () => {
    it('should return an object with x and y coordinates', () => {
      const playerZ = player('Hooman', 10);
      const coords = playerZ.play([], true);
      expect(coords).toHaveProperty('x');
      expect(coords).toHaveProperty('y');
    });

    describe('when random is true', () => {
      it('should return coordinates within the bounds of the gameboard', () => {
        const playerX = player('Robobo', 10);
        const coords = playerX.play([], true);
        expect(coords.x).toBeLessThan(10);
        expect(coords.y).toBeLessThan(10);
      });

      it("should return coordinates that haven't been attacked before", () => {
        const playerX = player('Robobo', 10);
        const coords1 = playerX.play([], true);
        const coords2 = playerX.play([coords1], true);
        expect(coords1).not.toEqual(coords2);
      });
    });
  });
});
