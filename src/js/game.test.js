import Word from './word';
import Player from './player';
import Game from './game';

it('Should return start the game', () => {
  const game = new Game(true);
  expect(game.startGame).toEqual(true);
});

it('Should start the game and player win', () => {
  const player = new Player('Koudjo', true);
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
});
it('Should say player win the the game', () => {
  const pendu = new Word('humus');
  const game = new Game(true);
  pendu.hidingWord = ['h', 'u', 'm', 'u', 's'];
  game.checkEndGame(pendu.hidingWord);
  expect(game.startGame).toEqual(false);
});
