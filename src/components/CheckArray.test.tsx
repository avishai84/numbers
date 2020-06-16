import CheckArray from './CheckArray';

test('if check number pass exist in the array', () => {
      const arrayFromState:number[] = [9, 8, 0];
      expect(CheckArray(0, arrayFromState)).toBe(true);
});

test('null if array is empty', () => {
      const arrayFromState:number[] = [];
      expect(CheckArray(0, arrayFromState)).toBe(null);
});

test('false if passed number don\'t match in array', () => {
      const arrayFromState:number[] = [10];
      expect(CheckArray(0, arrayFromState)).toBe(false);
});