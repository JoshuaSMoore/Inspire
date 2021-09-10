import { ProxyState } from "../AppState.js"


// @ts-ignore
const imageApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImageService{
  async getImage(url){
    let res = await imageApi.get(url)
    ProxyState.image = new Image(res.data.url)
  }
}

export const imageService = new ImageService()