

export class Quote{
  constructor(quoteData) {
    this.quote = quoteData.content 
    this.author = quoteData.author
    this.id = quoteData.id
  }

get Template(){
  return /*html*/`
  <div class="col-12-text-center">
    <figure class="text-center">
    <blockquote class="blockquote">
    <p class = "fs-5">'${this.quote}</p>
    </blockquote>
    <div><figcaption class="blockquote-footer">
    ${this.author} 
    </figcaption></div>
    </figure>
    </div>
    `
}

}