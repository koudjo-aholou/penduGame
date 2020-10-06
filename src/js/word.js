/* eslint-disable class-methods-use-this */
function splitLettersOfWord(word) {
  return word.split('');
}

function hideLettersOfWord(word) {
  return word.replace(/./g, '_').split('');
}

export default class Word {
  constructor(word) {
    this.word = word.toLowerCase();
    this.answer = splitLettersOfWord(this.word);
    this.hidingWord = hideLettersOfWord(this.word);
  }

  checkLetterExist(userLetter, answer) {
    const indice = [];
    let index = answer.lastIndexOf(userLetter.toLowerCase());
    while (index !== -1) {
      indice.push(index);
      index = (index > 0 ? answer.lastIndexOf(userLetter, index - 1) : -1);
    }
    return indice;
  }

  displayLetter(indice, userLetter, guessWord) {
    const newArray = guessWord;
    if (indice.length > 0) {
      for (let i = 0; i < indice.length; i += 1) { newArray[indice[i]] = userLetter; }
      return guessWord;
    }
    return 'enlever vie';
  }
}
