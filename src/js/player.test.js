import Player from './player';

it('Should create a player name', () => {
  const player = new Player('Koudjo', true);
  expect(player.name).toEqual('Koudjo');
});

it('Should initiate 3 lifes for a player', () => {
  const player = new Player('Koudjo', true);
  expect(player.life).toEqual(3);
});

it('Should remove 1 point of life if the letter does not exist', () => {
  const player = new Player('Koudjo', true);
  const displayLetters = [];
  player.checkDamage(displayLetters);
  expect(player.life).toEqual(2);
});

it('Should say gameover', () => {
  const player = new Player('Koudjo', true);
  const displayLetters = [];
  player.checkDamage(displayLetters);
  player.checkDamage(displayLetters);
  player.checkDamage(displayLetters);
  expect(player.gameOver).toEqual(true);
});
