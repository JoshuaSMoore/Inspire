import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

function _drawTask(){
  let template = ''
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template

  let count = ProxyState.tasks.filter((t) => t.completed);
  document.getElementById('task-count').innerHTML = `${count.length} out of ${ProxyState.tasks.length} tasks completed`

}

function _drawFinishedTask(){
  document.getElementById('completed-task').innerHTML = ProxyState.completed.toString()
}
export class TaskController {
  constructor(){
_drawTask()
ProxyState.on('tasks', _drawTask)

ProxyState.on('completed', _drawFinishedTask)

  }

  addTask(){
    event.preventDefault()
/**
 * @type {HTMLFormElement}
 */

    // @ts-ignore
    let form = event.target
    let taskData = {
    description: form.taskdescription.value,
    }
    
  
    
  taskService.addTask(taskData)
  form.reset()


}


finishedTask(Taskid){
  
  taskService.finishedTask(Taskid)
}
removeTask(id){
  
  taskService.removeTask(id)
}

}