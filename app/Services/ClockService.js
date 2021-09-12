import { ProxyState } from "../AppState.js";



class ClockService{

getTime(){
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let am_pm = "PM";

  if (hour > 12){
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }
  // @ts-ignore
  hour = (hour < 10 ? "0" : "") + hour;
  // @ts-ignore
  min = (min < 10 ? "0" : "") + min;
  // @ts-ignore
  sec = (sec < 10 ? "0" : "") + sec;

  

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  ProxyState.time = currentTime

}

}


export const clockService = new ClockService()