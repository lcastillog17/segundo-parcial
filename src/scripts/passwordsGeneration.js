import passwordsGeneration from '../modules/passwordsGeneration/index.js';

const generatePassword = () => {
  const passwordLength = parseInt(document.getElementById('passwordLength').value);
  const includeLetters = document.getElementById('includeLetters').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const password = passwordsGeneration.generatePassword(
    passwordLength,
    includeLetters,
    includeNumbers,
    includeSymbols
  );

  document.getElementById('password').textContent = `Generated Password: ${password}`;
}

document.getElementById('generatePasswordBtn').addEventListener('click', generatePassword);

export default { generatePassword };
