export class Weather{
  constructor(weatherData){
    this.temp = weatherData.main.temp
    this.icon = weatherData.weather.icon
    this.weather = weatherData.weather.main
    this.location = weatherData.name
  }


  get Template(){
    return /*html*/`
    
    
    
    `
  }
}