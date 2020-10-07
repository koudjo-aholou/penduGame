import Word from './word';

it('Should make guess the selected word', () => {
  const pendu = new Word('humus');
  expect(pendu.word).toEqual('humus');
});

it('Should split the word in several letters', () => {
  const pendu = new Word('humus');
  expect(pendu.answer).toEqual(['h', 'u', 'm', 'u', 's']);
});

it('Should hide all the letters EXCEPT ONE', () => {
  const pendu = new Word('humus');
  const allExceptOne = pendu.hidingWord;
  const checkOnlyOneLetter = allExceptOne.filter((letter) => letter !== '_').length;
  expect(checkOnlyOneLetter).toEqual(1);
});

it('Should say how many times the letter chosen by the user is present in the word', () => {
  const pendu = new Word('humus');
  const letterExist = pendu.checkLetterExist('u', pendu.answer);
  expect(letterExist.length).toEqual(2);
});

it('Should display the letters find by the user', () => {
  const pendu = new Word('humus');
  pendu.hidingWord = ['_', '_', '_', '_', 's'];
  let inputUser = 'u';
  let letterExist = pendu.checkLetterExist(inputUser, pendu.answer);
  let displayLetters = pendu.displayLetter(letterExist, inputUser, pendu.hidingWord);
  expect(displayLetters).toEqual(['_', 'u', '_', 'u', 's']);
  inputUser = 'h';
  letterExist = pendu.checkLetterExist(inputUser, pendu.answer);
  displayLetters = pendu.displayLetter(letterExist, inputUser, pendu.hidingWord);
  expect(displayLetters).toEqual(['h', 'u', '_', 'u', 's']);
});
