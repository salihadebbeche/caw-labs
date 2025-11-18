const exf = require('./echo');

describe('Echo Function Tests', () => {
  test('should repeat "echo" 5 times', () => {
    const result = exf('echo', 5);
    const lines = result.split('\n');
    expect(lines.length).toBe(5);
    expect(lines[0]).toBe('echo');
  });

  test('should repeat "JS from server" 10 times', () => {
    const result = exf('JS from server', 10);
    const lines = result.split('\n');
    expect(lines.length).toBe(10);
    expect(lines[0]).toBe('JS from server');
  });

  test('should return empty string when n is 0', () => {
    expect(exf('test', 0)).toBe('');
  });

  test('should repeat string 1 time', () => {
    expect(exf('hello', 1)).toBe('hello');
  });
});