import Word from './word';
import Player from './player';
import Game from './game';

it('Should start the game and player win', () => {
  const game = new Game(true);
  const player = new Player('Koudjo');
  const pendu = new Word('humus');
  pendu.hidingWord = ['h', '_', '_', '_', '_'];
  let letterExist = pendu.checkLetterExist('u', pendu.answer);
  let displayLetters = pendu.displayLetter(letterExist, 'u', pendu.hidingWord);
  player.checkDamage(displayLetters);
  expect(displayLetters).toEqual(['h', 'u', '_', 'u', '_']);

  letterExist = pendu.checkLetterExist('o', pendu.answer);
  displayLetters = pendu.displayLetter(letterExist, 'o', pendu.hidingWord);
  player.checkDamage(displayLetters);
  expect(player.life).toEqual(2);

  letterExist = pendu.checkLetterExist('m', pendu.answer);
  displayLetters = pendu.displayLetter(letterExist, 'm', pendu.hidingWord);
  player.checkDamage(displayLetters);
  expect(displayLetters).toEqual(['h', 'u', 'm', 'u', '_']);

  letterExist = pendu.checkLetterExist('s', pendu.answer);
  displayLetters = pendu.displayLetter(letterExist, 's', pendu.hidingWord);
  player.checkDamage(displayLetters);
  game.checkEndGame(displayLetters);
  expect(displayLetters).toEqual(['h', 'u', 'm', 'u', 's']);
  expect(game.endGame).toEqual(true);
});
it('Should say player win the the game', () => {
  const pendu = new Word('humus');
  const game = new Game(true);
  pendu.hidingWord = ['h', 'u', 'm', 'u', 's'];
  game.checkEndGame(pendu.hidingWord);
  expect(game.endGame).toEqual(true);
});
