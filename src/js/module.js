const mot = 'humus';

const startGame = mot.split('');
const guessWord = mot.replace(/./g, '_').split('');

const userInput = 'o'.toLowerCase();
let life = 3;
const indice = [];
let index = startGame.lastIndexOf(userInput);

while (index !== -1) {
  indice.push(index);
  index = (index > 0 ? startGame.lastIndexOf(userInput, index - 1) : -1);
}
console.log(indice);
if (indice.length > 0) {
  indice.forEach((idx) => guessWord[idx] = userInput);
} else {
  life -= 1;
}

document.getElementById('life').innerText = `${life} vies`;
document.getElementById('word').innerText = guessWord.join(' ');
