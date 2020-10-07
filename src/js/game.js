export default class Game {
  /**
   *
   * @param {boolean} start
   * @property {boolean} startGame
   *  @property {boolean} endGame
   */
  constructor(start) {
    this.startGame = start;
    this.endGame = false;
  }

  /**
 *
 * @param {Array.<string[]>} word
 * @returns {boolean}
 */
  checkEndGame(word) {
    this.endGame = !word.includes('_');
  }
}
