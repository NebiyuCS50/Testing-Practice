const {
  capitalize,
  reverseString,
  calculator,
  cesarCipher,
} = require("./quiz");

test.only("capitalize first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("javaScript")).toBe("JavaScript");
  expect(capitalize("jest")).toBe("Jest");
});

test.only("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("javaScript")).toBe("tpircSavaj");
  expect(reverseString("jest")).toBe("tsej");
});

describe.only("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(2, -3)).toBe(-1);
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(-2, 3)).toBe(-5);
    expect(calculator.subtract(2, -3)).toBe(5);
    expect(calculator.subtract(-2, -3)).toBe(1);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(2, -3)).toBe(-6);
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(6, -3)).toBe(-2);
    expect(calculator.divide(-6, -3)).toBe(2);
    expect(() => calculator.divide(6, 0)).toThrow("Division by zero");
  });
});

test.only("caesar cipher", () => {
  expect(cesarCipher("abc", 1)).toBe("bcd");
  expect(cesarCipher("xyz", 2)).toBe("zab");
  expect(cesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(cesarCipher("JavaScript", 5)).toBe("OfafXhwnuy");
  expect(cesarCipher("abc", -1)).toBe("zab");
  expect(cesarCipher("ABC", -2)).toBe("YZA");
  expect(cesarCipher("Hello, World!", -3)).toBe("Ebiil, Tloia!");
  expect(cesarCipher("JavaScript", -5)).toBe("EvqvNxmdko");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
