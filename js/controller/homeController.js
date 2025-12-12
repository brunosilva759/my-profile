import homeView from '../view/homeView.js';
import weatherService from '../service/weatherService.js';

export async function init() {
    const weatherCard = await weatherService.getWeatherByCity();
    console.log(weatherCard) 
    homeView.render(weatherCard);
}


