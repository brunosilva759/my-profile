const BASE_URL = 'http://api.weatherapi.com/v1/current.json?key=';
const API_KEY =   "c34cb08c8af048b0914101937251212"

const weatherService = {

   async getWeatherByCity(city = "Lisbon") {
       const response = await fetch(`${BASE_URL}${API_KEY}&q=${city}`);
       const data = await response.json();
       console.log(data)
       return data;
   }
}

export default weatherService