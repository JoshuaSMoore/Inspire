import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


function _drawImage(){
  document.body.style.backgroundImage = `url('${ProxyState.image}')`
}

export class ImageController {
  constructor(){
    ProxyState.on('image', _drawImage)
    imageService.getImage()
    _drawImage()
  }
}