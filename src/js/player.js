import Game from './game';

export default class Player extends Game {
  /**
   *
   * @param {string} name
   * @property {string} name
   * @property {number} life
   * @property {boolean} gameover
   */
  constructor(name, start) {
    super(name, start);
    if (typeof name !== 'string') { throw new Error('Name must be a string!'); }
    this.startGame = start;
    this.name = name;
    this.life = 3;
    this.gameOver = false;
  }

  /**
   *
   * @param {Array.<string[]>|[]} displayLetters
   * @returns {Array.<string[]>}
   */
  checkDamage(displayLetters) {
    if (!Array.isArray(displayLetters)) { throw new Error('Wrong Type must be an Array!'); }
    if (displayLetters.length <= 1 && this.life > 0) {
      this.life -= 1;
      if (this.life === 0) { this.gameOver = true; }
    }
    return displayLetters;
  }
}
