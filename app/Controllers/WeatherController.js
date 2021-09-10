import { ProxyState } from "../AppState.js";

function _drawWeather() {
let template = ''
ProxyState.weather.forEach(weather => template += weather.Template)
document.getElementById('weather').innerHTML = template
}




export class WeatherController {
constructor(){

}

}