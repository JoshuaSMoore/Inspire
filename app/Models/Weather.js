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
      
      celsiusConversion(){
    
      let celcius = ((this.kelvin - 273.15))
   
        return Math.floor(celcius)
    }

      
  
    get Template(){
        return /*html*/`
        <div class = "col-m-12">
        <div class = "selectable" onclick = "app.weatherController.tempChange()">
        <div id = "temp">
        <h4 class = "temp-card">${this.weatherConversion()}&deg;F</h4> </div>
        <div id = "celsius" class = "visually-hidden">
        <h4 class = "temp-card">${this.celsiusConversion()}&deg;C<h4>
        </div>
        <h3 class="text-center"><img class="currentweather img-fluid text-center pt-2" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/></h3>
        </div>
        </div>
        </div>
        <h6 class="text-end weather-place">${this.city}</h6>
        </div>`
    }

  }