import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"


class TaskService {
  constructor(){

  }


newTask(id){
ProxyState.tasks = [...ProxyState.tasks, new Task(id)]
ProxyState.tasks = ProxyState.tasks
console.log('is it working', ProxyState.tasks)
}


}

export const taskService = new TaskService()