const BASE_URL = "https://api.open-meteo.com/v1/forecast";

const weatherService = {
  async getWeatherByCity(city = "Lisbon") {

    // 1. Geocode city → lat/lon
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      console.error("City not found");
      return null;
    }

    const { name, country, latitude, longitude } = geoData.results[0];

    // 2. Fetch weather
    const weatherRes = await fetch(
      `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    const { temperature, windspeed, weathercode } = weatherData.current_weather;

    // 3. Return clean object expected by the view
    return {
      cityName: name,
      countryName: country,
      temperature,
      windspeed,
      weatherCode: weathercode
    };
  }
};

export default weatherService;
