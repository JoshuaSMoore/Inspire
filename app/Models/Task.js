import {generateId} from "../Utils/generateId.js"

export class Task{
  constructor(taskData){
    this.id = taskData.id || generateId()
    this.completed = taskData.completed
    this.description = taskData.description
  }


    get Template() {
      return /*html*/`
      <li class="list-group-item task-in">
      
      <p class = "list-content pt-2" onclick ="app.taskController.finishedTask('${this.id}')"><input type="checkbox" value="" ${this.completed ? "checked" : ""}/> 
        <span class>${this.description}
        <span class = "d-flex justify-content-end list-content deleted">
        <button onclick = "app.taskController.removeTask('${this.id}')" id = "deleted" class="mdi mdi-delete-clock-outline" aria-label="Close"></button>
        
      </li>
      <div>
      
      `
  }
}

