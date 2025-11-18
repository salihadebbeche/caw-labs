describe('Array String Methods Tests', () => {
  let myColor;

  beforeEach(() => {
    myColor = ["Red", "Green", "White", "Black"];
  });

  test('toString should return comma-separated string', () => {
    expect(myColor.toString()).toBe('Red,Green,White,Black');
  });

  test('join() should return comma-separated string by default', () => {
    expect(myColor.join()).toBe('Red,Green,White,Black');
  });

  test('join("") should concatenate without separator', () => {
    expect(myColor.join('')).toBe('RedGreenWhiteBlack');
  });

  test('join with custom separator', () => {
    expect(myColor.join(' ')).toBe('Red Green White Black');
    expect(myColor.join('-')).toBe('Red-Green-White-Black');
    expect(myColor.join(' + ')).toBe('Red + Green + White + Black');
  });
});