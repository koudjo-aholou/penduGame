import Word from './word';

it('Should make guess the selected word', () => {
  const pendu = new Word('humus');
  expect(pendu.word).toEqual('humus');
});

it('Should split the word in several letters', () => {
  const pendu = new Word('humus');
  expect(pendu.answer).toEqual(['h', 'u', 'm', 'u', 's']);
});

it('Should hide all the letters of the word', () => {
  const pendu = new Word('humus');
  expect(pendu.hidingWord).toEqual(['_', '_', '_', '_', '_']);
});

it('Should say how many times the letter chosen by the user is present in the word', () => {
  const pendu = new Word('humus');
  const letterExist = pendu.checkLetterExist('u', pendu.answer);
  expect(letterExist.length).toEqual(2);
});

it('Should display the letters find by the user', () => {
  const pendu = new Word('humus');
  const letterExist = pendu.checkLetterExist('u', pendu.answer);
  const displayLetters = pendu.displayLetter(letterExist, 'u', pendu.hidingWord);
  expect(displayLetters).toEqual(['_', 'u', '_', 'u', '_']);
});
