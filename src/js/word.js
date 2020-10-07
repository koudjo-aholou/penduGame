/* eslint-disable class-methods-use-this */

/**
 *
 * @param {string} word
 * @returns {Array.<string[]>}
 */
function splitLettersOfWord(word) {
  return word.split('');
}

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateNumber(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
/**
 *
 * @param {string} word
 * @returns {Array.<string[]>}
 */
function hideLettersOfWord(word) {
  const wordHiding = word.replace(/./g, '_').split('');
  const index = generateNumber(0, word.length);
  wordHiding[index] = word[index];
  return wordHiding;
}

export default class Word {
  /**
   *
   * @param {string} word
   * @property {string} word
   * @property {Array.<string[]>} answer
   * @property {Array.<string[]>} hidingWord
   */
  constructor(word) {
    this.word = word.toLowerCase();
    this.answer = splitLettersOfWord(this.word);
    this.hidingWord = hideLettersOfWord(this.word);
  }
  /**
 *
 * @param {string} userLetter
 * @param {Array.<string[]>} answer
 * @returns {Array.<number[]>}
 */

  checkLetterExist(userLetter, answer) {
    const indice = [];
    let index = answer.lastIndexOf(userLetter.toLowerCase());
    while (index !== -1) {
      indice.push(index);
      index = (index > 0 ? answer.lastIndexOf(userLetter, index - 1) : -1);
    }
    return indice;
  }

  /**
   *
   * @param {Array.<number[]>} indice
   * @param {string} userLetter
   * @param {Array.<string[]>} guessWord
   * @returns {(Array)}
   */
  displayLetter(indice, userLetter, guessWord) {
    const newArray = guessWord;
    if (indice.length > 0) {
      for (let i = 0; i < indice.length; i += 1) { newArray[indice[i]] = userLetter; }
      return guessWord;
    }
    return [];
  }
}
