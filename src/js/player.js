export default class Player {
  constructor(name) {
    this.name = name;
    this.life = 3;
    this.gameOver = false;
  }

  checkDamage(displayLetters) {
    if (displayLetters === false && this.life > 0) {
      this.life -= 1;
      if (this.life === 0) { this.gameOver = true; }
    }
  }
}
