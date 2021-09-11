export class Weather {
    constructor(data){
      this.city = data.name
      this.timzone = data.timezone
      this.clouds = data.clouds
      this.kelvin = data.main.temp
      this.weather = data.weather[1]
      this.weatherDesc = data.weather[0].main
      this.icon = data.weather[0].icon
    }
    
    
    
    
    weatherConversion(){
        let temp = ((this.kelvin - 273.15) * 1.8) + 32
        
        
        return Math.floor(temp)    
      }
      
      cecliusConversion(){
    
      let celcius = (((this.kelvin - 273.15) * 1.8) +32) -32
   
        return Math.floor(celcius)
    }

      
  
    get Template(){
        return /*html*/`
        <h4 class="weatherCard ps-1">${this.city}</h4>
        <img class=" img-fluid" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/> <h4 class="weatherCard ps-2">${this.weatherConversion()}&deg;</h4>
        </div>`
    
    }

  }