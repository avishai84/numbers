import FillArray from '../components/FillArray';

test('FillArray return array greater then 1', () => {
      const arrayLength = FillArray(0, 2);
      expect(arrayLength.length).toBeGreaterThan(1);
});

test('FillArray return array greater then 1', () => {
      const arrayLength = FillArray(0, 2);
      expect(arrayLength.length).toBeLessThanOrEqual(3);
});

test('FillArray to be an array', () => {
      const arrayLength = FillArray(0, 2);
      let arrayLengthTypeIsArray = 'string';
      if(typeof arrayLength === 'object' && arrayLength.length !== undefined){
            arrayLengthTypeIsArray = 'array';
      }
      expect(arrayLengthTypeIsArray).toBe('array');
    });

    test('FillArray not to equal null', () => {
      const arrayLength = FillArray(0, 2);
      let arrayLengthTypeIsArray = null;
      if(typeof arrayLength === 'object' && arrayLength.length !== undefined){
            arrayLengthTypeIsArray = 'array';
      }
      expect(arrayLengthTypeIsArray).not.toBe(null);
    });  