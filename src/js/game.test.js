import Word from './word';
import Player from './player';

it('Should start the game and player win', () => {
  const player = new Player('Koudjo');
  const pendu = new Word('humus');
  let letterExist = pendu.checkLetterExist('u', pendu.answer);
  let displayLetters = pendu.displayLetter(letterExist, 'u', pendu.hidingWord);
  player.checkDamage(displayLetters);
  expect(displayLetters).toEqual(['_', 'u', '_', 'u', '_']);

  letterExist = pendu.checkLetterExist('h', pendu.answer);
  displayLetters = pendu.displayLetter(letterExist, 'h', pendu.hidingWord);
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
