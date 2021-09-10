import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


function _drawTime(){
document.getElementById('time').innerHTML = ProxyState.time.toString()
}

export class ClockController{
  constructor(){
    setInterval(clockService.getTime, 1000);
    ProxyState.on('time', _drawTime)
    clockService.getTime()
  }
}