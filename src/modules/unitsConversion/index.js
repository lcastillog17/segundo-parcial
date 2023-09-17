import { default as common } from '../common/index.js';

const unitsConversion = {
  celsiusToFahrenheit: (celsius) => common.isValidNumber(celsius) ? (celsius * 9/5) + 32 : 0,
  fahrenheitToCelsius: (fahrenheit) => common.isValidNumber(fahrenheit) ? (fahrenheit - 32) * 5/9 : 0,
};

export default unitsConversion;
