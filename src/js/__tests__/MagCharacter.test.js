import Deamon from '../Daemon';

test('Deamon attack', () => {
  const character = new Deamon('Kris');
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Deamon attack distance 3', () => {
  const character = new Deamon('Kris');
  character.attack = 100;
  character.distance = 3;
  expect(character.attack).toBe(80);
});

test('Deamon attack < 0', () => {
  const character = new Deamon('Kris');
  character.attack = 1;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test('Deamon stoned', () => {
  const character = new Deamon('Kris');
  character.stoned = true;
  expect(character.stoned).toBe(true);
});

test('Deamon attack distance stoned', () => {
  const character = new Deamon('Kris');
  character.attack = 100;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(48);
});
