import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {

document.getElementById('weather').innerHTML = ProxyState.weather.Template

}




export class WeatherController {
constructor(){
ProxyState.on('weather', _drawWeather);
weatherService.getWeather()


}

tempChange(){
  document.getElementById('temp').classList.toggle('visually-hidden')
  document.getElementById('celsius').classList.toggle('visually-hidden');
}




getWeather(){
  weatherService.getWeather()
}

}