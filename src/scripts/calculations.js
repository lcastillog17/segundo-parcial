import calculations from '../modules/calculations/index.js';

const addNumbers = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = calculations.add(num1, num2);
  document.getElementById('result').textContent = `Result: ${result}`;
}

const subtractNumbers = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = calculations.subtract(num1, num2);
  document.getElementById('result').textContent = `Result: ${result}`;
}

const multiplyNumbers = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = calculations.multiply(num1, num2);
  document.getElementById('result').textContent = `Result: ${result}`;
}

const divideNumbers = () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (num2 !== 0) {
    const result = calculations.divide(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
  } else {
    document.getElementById('result').textContent = 'Cannot divide by zero';
  }
}

document.getElementById('addBtn').addEventListener('click', addNumbers);
document.getElementById('subtractBtn').addEventListener('click', subtractNumbers);
document.getElementById('multiplyBtn').addEventListener('click', multiplyNumbers);
document.getElementById('divideBtn').addEventListener('click', divideNumbers);

export default { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers };
