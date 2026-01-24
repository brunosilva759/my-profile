import homeController from "../controller/homeController.js";

function render(weatherCard) {
  let inputValue;

  const card = document.querySelector(".weatherCard");
  const button = document.querySelector("#searchBtn");
  const input = document.querySelector("#cityInput");

  if (!weatherCard) {
    card.innerHTML = "<p>City not found.</p>";
    return;
  }

  button.onclick = e => {
    e.preventDefault();
    if (inputValue) homeController.searchCity(inputValue);
  };

  input.oninput = e => {
    inputValue = e.target.value;
  };

  card.innerHTML = `
    <div class="city-name">${weatherCard.cityName}, ${weatherCard.countryName}</div>
    <div class="temp">${weatherCard.temperature}°C</div>
    <div class="condition">${convertWeatherCode(weatherCard.weatherCode)}</div>
    <div class="details">
      <div><strong>Wind:</strong> ${weatherCard.windspeed} km/h</div>
      <div><strong>Code:</strong> ${weatherCard.weatherCode}</div>
    </div>
  `;
}

function convertWeatherCode(code) {
  const map = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Snowfall",
    73: "Snow",
    75: "Heavy snow",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with hail"
  };

  return map[code] || "Unknown weather";
}

export default { render };
