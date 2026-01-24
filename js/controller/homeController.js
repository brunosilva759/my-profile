import homeView from '../view/homeView.js';
import weatherService from '../service/weatherService.js';

const homeController = {

  async init() {
    const weatherCard = await weatherService.getWeatherByCity();
    console.log(weatherCard);
    homeView.render(weatherCard);
  },

  async searchCity(city) {
    const weatherCard = await weatherService.getWeatherByCity(city);
    homeView.render(weatherCard);
  }
};

export default homeController;
