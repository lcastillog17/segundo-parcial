import { default as common } from '../common/index.js';

const calculations = {
  add: (num1, num2) => common.isValidNumber(num1) && common.isValidNumber(num2) ? num1 + num2 : 0,
  subtract: (num1, num2) => common.isValidNumber(num1) && common.isValidNumber(num2) ? num1 - num2 : 0,
  multiply: (num1, num2) => common.isValidNumber(num1) && common.isValidNumber(num2) ? num1 * num2 : 0,
  divide: (num1, num2) => common.isValidNumber(num1) && common.isValidNumber(num2) ? num1 / num2 : 0,
};

export default calculations;
