import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

// @ts-ignore
let taskApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Joshua/todos'
})
class TaskService {
  constructor(){
    this.getTasks()
  }


async addTask(taskData){
let newTask = new Task(taskData)
let res = await taskApi.post('', newTask)
ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
ProxyState.taskCount ++
console.log(res.data)
console.log(ProxyState.taskCount)

}

async getTasks(){
  let res = await taskApi.get()
  ProxyState.tasks = res.data.map(t => new Task(t))
  ProxyState.taskCount = ProxyState.tasks.length
  console.log('is it working?', ProxyState.tasks)
  console.log(ProxyState.taskCount)
}

async removeTask(id){
  await taskApi.delete(id)
  ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
  console.log(ProxyState.taskCount)
}

async finishedTask(Taskid){
  let task = await ProxyState.tasks.find(t => t.id == Taskid);

  if(task.completed){
    task.completed = false
    ProxyState.completed -= 1
  } else {
    task.completed = true
    ProxyState.completed += 1
  }
let res = await taskApi.put(Taskid, task)
this.getTasks()
  
}

}

export const taskService = new TaskService()