import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";


// @ts-ignore
const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})


class WeatherService{
  async getWeather(){
    let res = await weatherApi.get()
    console.log('did weather get?', res);
    ProxyState.weather = res.data.map(w => new Weather(w))
  }
}


export const weatherService = new WeatherService