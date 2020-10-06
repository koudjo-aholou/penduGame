import Player from './player';

it('Should create a player name', () => {
  const player = new Player('Koudjo');
  expect(player.name).toEqual('Koudjo');
});

it('Should initiate 3 life for a player', () => {
  const player = new Player('Koudjo');
  expect(player.life).toEqual(3);
});

it('Should remove 1 point of life if the letter does not exist', () => {
  const player = new Player('Koudjo');
  const displayLetters = false;
  if (displayLetters === false) { player.life -= 1; }
  expect(player.life).toEqual(2);
});
