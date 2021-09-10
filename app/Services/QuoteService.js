import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";

// @ts-ignore
const quoteApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuoteService{
  async getQuote(){
    let res = await quoteApi.get()
    console.log('what is the response', res);
    ProxyState.quote = new Quote(res.data)
    console.log('show me the quote', ProxyState.quote)
  }
}



export const quoteService = new QuoteService()