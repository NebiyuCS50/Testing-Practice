const { capitalize, reverseString } = require("./quiz");

test("capitalize first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("javaScript")).toBe("JavaScript");
  expect(capitalize("jest")).toBe("Jest");
});

test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("javaScript")).toBe("tpircSavaj");
  expect(reverseString("jest")).toBe("tsej");
});
