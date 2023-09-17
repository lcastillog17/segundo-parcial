import unitsConversion from '../modules/unitsConversion/index.js';

const convertTemperature = () => {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const conversionType = document.getElementById("conversionType").value;
  let result;
  if (conversionType === "celsiusToFahrenheit") {
    result = unitsConversion.celsiusToFahrenheit(temperature);
  } else if (conversionType === "fahrenheitToCelsius") {
    result = unitsConversion.fahrenheitToCelsius(temperature);
  }
  document.getElementById("result").textContent = `Result: ${result}`;
}

document.getElementById("convertTemperatureBtn").addEventListener("click", convertTemperature);

export default { convertTemperature };
