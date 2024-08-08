function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;

    let celsiusResult, fahrenheitResult, kelvinResult;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (inputUnit === "celsius") {
        celsiusResult = inputValue;
        fahrenheitResult = (inputValue * 9/5) + 32;
        kelvinResult = inputValue + 273.15;
    } else if (inputUnit === "fahrenheit") {
        celsiusResult = (inputValue - 32) * 5/9;
        fahrenheitResult = inputValue;
        kelvinResult = ((inputValue - 32) * 5/9) + 273.15;
    } else if (inputUnit === "kelvin") {
        celsiusResult = inputValue - 273.15;
        fahrenheitResult = ((inputValue - 273.15) * 9/5) + 32;
        kelvinResult = inputValue;
    }

    document.getElementById('celsiusResult').textContent = celsiusResult.toFixed(2);
    document.getElementById('fahrenheitResult').textContent = fahrenheitResult.toFixed(2);
    document.getElementById('kelvinResult').textContent = kelvinResult.toFixed(2);
}