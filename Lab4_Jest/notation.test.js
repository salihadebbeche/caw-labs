const mean = require('./notation');

describe('Mean Function Tests', () => {
  test('should calculate mean of [20, 20, 20, 20, 20]', () => {
    expect(mean([20, 20, 20, 20, 20])).toBe(20);
  });

  test('should calculate mean of [10, 15, 20]', () => {
    expect(mean([10, 15, 20])).toBe(15);
  });

  test('should calculate mean of [5, 10, 15, 20]', () => {
    expect(mean([5, 10, 15, 20])).toBe(12.5);
  });

  test('should return 0 for empty array', () => {
    expect(mean([])).toBe(0);
  });

  test('should handle single element', () => {
    expect(mean([100])).toBe(100);
  });

  test('should handle negative numbers', () => {
    expect(mean([-10, 10, 0])).toBeCloseTo(0);
  });
});