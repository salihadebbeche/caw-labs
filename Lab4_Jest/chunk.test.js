const chunk = require('./chunk');

describe('Chunk Function Tests', () => {
  test('should divide array into chunks of size 2', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('should divide array into chunks of size 3', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('should handle array not evenly divisible', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('should return single chunk when size is greater than array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('should return empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle chunk size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test('should handle large chunk size', () => {
    expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
  });
});