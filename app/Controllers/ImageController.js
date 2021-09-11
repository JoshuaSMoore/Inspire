import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


function _drawImage(){
  document.body.style.backgroundImage =  `url(${ProxyState.image.largeImgUrl})`;
}

export class ImageController {
  constructor(){
    ProxyState.on('image', _drawImage)
    this.getImage()
  }


  getImage(){
    imageService.getImage()
  }

}