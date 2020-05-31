import Randomizr from './Randomizr';

test('Randomizr return zero ', () => {
  expect(Randomizr(0, 0)).toBe(0);
});

test('Randomizr return one ', () => {
      expect(Randomizr(1, 1)).toBe(1);
    });

test('Randomizr pass string return undefined ', () => {
expect(Randomizr('1','4')).toBeDefined();
});

