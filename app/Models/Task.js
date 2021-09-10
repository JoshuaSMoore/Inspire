

export class Task{
  constructor(taskData){
    this.id = taskData.id
    this.checked = taskData.completed
    this.user = taskData.user
    this.description = taskData.description
  }

  get Template(){
    return /*html*/ `
    <div class="form-checkbox">
    <div class = "col">
    <list-group>
    <p class="todo-style" onclick ="app.taskController.newTask('${this.id}')"><input type="checkbox" value="" ${this.checked ? "checked" : ""}>
    ${this.description}
    <button onclick = "app.taskController.deleteTask('${this.id}')" id = "deleted" class="mdi mdi-delete-clock-outline" aria-label="Close"></button>
    </p> 
    </div>
    </div>
  `
  }
}
