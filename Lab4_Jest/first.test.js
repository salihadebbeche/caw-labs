const first = require('./first');

describe('First Function Tests', () => {
  test('should return first element when n is null', () => {
    expect(first([1, 2, 3, 4])).toBe(1);
    expect(first([7, 9, 0, -2])).toBe(7);
  });

  test('should return first n elements', () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(first([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
    expect(first([7, 9, 0, -2], 1)).toEqual([7]);
  });

  test('should return empty array when array is null', () => {
    expect(first(null, 2)).toEqual([]);
  });

  test('should return empty array when n is negative or zero', () => {
    expect(first([1, 2, 3], 0)).toEqual([]);
    expect(first([1, 2, 3], -1)).toEqual([]);
  });

  test('should return all elements when n is greater than array length', () => {
    expect(first([1, 2, 3], 10)).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(first([], 2)).toEqual([]);
  });
});