import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

function _drawTask(){
  let template = ''
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}




export class TaskController {
  constructor(){
ProxyState.on('tasks', _drawTask)
_drawTask()

  }

  newTask(){
    event.preventDefault()
    let form = event.target
    
  
    
  taskService.newTask()
  form.reset()


}

}