export default class Game {
  constructor(start) {
    this.startGame = start;
    this.endGame = false;
  }

  checkEndGame(word) {
    this.endGame = !word.includes('_');
  }
}
