const last = require('./last');

describe('Last Function Tests', () => {
  test('should return last element when n is null', () => {
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([7, 9, 0, -2])).toBe(-2);
  });

  test('should return last n elements', () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(last([1, 2, 3, 4], 3)).toEqual([2, 3, 4]);
    expect(last([7, 9, 0, -2], 1)).toEqual([-2]);
  });

  test('should return empty array when array is null', () => {
    expect(last(null, 2)).toEqual([]);
  });

  test('should return all elements when n is greater than array length', () => {
    expect(last([1, 2, 3], 10)).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(last([], 2)).toEqual([]);
  });

  test('should return last element when n is 1', () => {
    expect(last([1, 2, 3, 4], 1)).toEqual([4]);
  });
});