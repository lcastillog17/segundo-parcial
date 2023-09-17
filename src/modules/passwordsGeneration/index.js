const characters = {
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
};

const passwordsGeneration = {
  generatePassword: (length, useLetters, useNumbers, useSymbols) => {
    let allowedCharacters = "";
  
    if (useLetters) {
      allowedCharacters += characters.letters;
    }
  
    if (useNumbers) {
      allowedCharacters += characters.numbers;
    }
  
    if (useSymbols) {
      allowedCharacters += characters.symbols;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      password += allowedCharacters.charAt(randomIndex);
    }
  
    return password;
  }
};

export default passwordsGeneration;
