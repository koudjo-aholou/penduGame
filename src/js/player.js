export default class Player {
  constructor(name) {
    this.name = name;
    this.life = 3;
  }

  checkDamage(displayLetters) {
    if (displayLetters === false) { this.life -= 1; }
  }
}
