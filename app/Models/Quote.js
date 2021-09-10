

export class Quote{
  constructor(quoteData) {
    this.quote = quoteData.content 
    this.author = quoteData.author
    this.id = quoteData.id
  }

get Template(){
  return /*html*/`
  <div class="col-12-text-center">
    <h5>'${this.quote}</h5>
    </div>
    `
}

}