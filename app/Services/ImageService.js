import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"



// @ts-ignore
const imageApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImageService{
  async getImage(){
    let res = await imageApi.get()
    ProxyState.image = new Image(res.data)
    console.log('picture is happening now')
  }
}

export const imageService = new ImageService()