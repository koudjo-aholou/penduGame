export default class Game {
  /**
   *
   * @param {boolean} start
   * @property {boolean} startGame
   */
  constructor(start) {
    this.startGame = start;
  }

  /**
 *
 * @param {Array.<string[]>} word
 * @returns {boolean}
 */
  checkEndGame(word) {
    const emptyCases = '_';
    this.startGame = word.includes(emptyCases);
  }
}
