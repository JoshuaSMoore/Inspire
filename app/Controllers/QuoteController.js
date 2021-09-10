import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteService } from "../Services/QuoteService.js";



function _drawQuote() {
  let template = ''
  document.getElementById('quotes').innerHTML = ProxyState.quote.Template
}

export class QuoteController {
  constructor() {
    ProxyState.on('quote', _drawQuote)
    quoteService.getQuote()
    _drawQuote()
  }
}

