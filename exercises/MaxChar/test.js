const maxChar = require('./index');

test('Should maxChar function exists', () => {
  expect(maxChar).toBeDefined();
  expect(typeof maxChar).toEqual('function');
});

test('Should find the most commonly used char in passed string', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
  expect(maxChar('ascxzsdlk29999999999')).toEqual('9');
  expect(maxChar('ascxxc..xcsd.......we12..')).toEqual('.');
});
