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
console.log(res.data)

}

async getTasks(){
  let res = await taskApi.get()
  ProxyState.tasks = res.data.map(t => new Task(t))
  console.log('is it working?', ProxyState.tasks)
}


async finishedTask(Taskid){
  let task = await ProxyState.tasks.find(t => t.id == Taskid);
  
  if(task.completed){
    task.completed = false
  } else {
    task.completed = true
  }
let res = await taskApi.put(Taskid, task)
console.log('is this triggering')
this.getTasks()


}
async removeTask(id){
  let yes = confirm("Are you positive you want to delete this?")
  if(yes == true)
  await taskApi.delete(id)
this.getTasks()
// ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)

}

}

export const taskService = new TaskService()