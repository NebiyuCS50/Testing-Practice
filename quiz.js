function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
};
function cesarCipher(str, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let lowerChar = char.toLowerCase();
    let currentIndex = alphabet.indexOf(lowerChar);

    if (currentIndex === -1) {
      newStr += char;
      continue;
    }

    let newIndex = (currentIndex + num) % 26;
    if (newIndex < 0) newIndex += 26;

    let cipherChar = alphabet[newIndex];
    newStr +=
      char.toUpperCase() === char
        ? alphabet[newIndex].toUpperCase()
        : alphabet[newIndex];
  }
  return newStr;
}
function analyzeArray(array) {
  let aver = array.reduce((previous, current) => {
    (previous + current) / array.length;
  });
  let min = Math.min(...array);
  let max = Math.max(...array);
  let len = array.length;
  return {
    average: aver,
    min: min,
    max: max,
    length: len,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  cesarCipher,
  analyzeArray,
};
