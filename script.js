let temperature = document.getElementById("temperature");
let unit = document.getElementById("unit");
let convertButton = document.getElementById("convert");
let result = document.getElementById("result");

convertButton.addEventListener("click", function () {
  let temp = Number(temperature.value);
  let selectedUnit = unit.value;

  if (temperature.value === "") {
    result.textcontent = "please enter a temperature";
    return;
  }
  let celsius;
  let fahrenheit;
  let kelvin;

  if (selectedUnit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9) / 5 + 32;
    kelvin = temp + 273.15;
  } else if (selectedUnit === "fahrenheit") {
    fahrenheit = temp;
    celsius = ((temp - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else if (selectedUnit === "kelvin") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }
  result.textContent = `Celsius: ${celsius.toFixed(2)} C Fahrenheit: ${fahrenheit.toFixed(2)} F Kelvin: ${kelvin.toFixed(2)} K`;
});
