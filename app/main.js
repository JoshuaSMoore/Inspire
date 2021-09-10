import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import {QuoteController} from "./Controllers/QuoteController.js";
import { TaskController } from "./Controllers/TaskController.js";

class App {
  quoteController = new QuoteController()
  clockController = new ClockController()

  imageController = new ImageController()

  taskController = new TaskController()
}

window["app"] = new App();
