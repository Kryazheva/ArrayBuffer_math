import Character from '../Magician';

test('create Character ok', () => {
  const character = new Character('Kris', 'Magician');
  expect(character).toMatchObject({
    name: 'Kris',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
  });
});
