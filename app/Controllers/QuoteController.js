import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteService } from "../Services/QuoteService.js";



function _drawQuote() {
  document.getElementById('quote').innerHTML = /*html*/`
  <p class = "fs-5">"${ProxyState.quote}"</p>
  <p id="author" class="visually-hidden">-${ProxyState.author} </p>
  `
}

export class QuoteController {
  constructor() {
    ProxyState.on('quote', _drawQuote)
    ProxyState.on('author', _drawQuote)
    quoteService.getQuote()
    _drawQuote()
  }

  visibleAuthor(){
    document.getElementById('author').classList.toggle('visually-hidden')
  }
}

