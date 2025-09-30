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
function caesarCipher(str, num) {
  const strLower = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const newStr = "";
  for (let i = 0; i < strLower.length; i++) {
    let currentStr = strLower[i];
    if ((currentStr = "")) {
      newStr = +currentStr;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentStr);
    let newIndex = currentIndex + (num % 25);
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 25) newIndex = newIndex + 26;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
    return newStr;
  }
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
