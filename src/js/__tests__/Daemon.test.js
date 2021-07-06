import Character from '../Daemon';

test('create Character ok', () => {
  const character = new Character('Kristy', 'Daemon');
  expect(character).toMatchObject({
    name: 'Kristy',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
  });
});
