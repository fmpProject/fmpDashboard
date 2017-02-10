import { Component, OnInit } from '@angular/core';

    import { TaskService } from '../../../../../../services/task.service';
    import { TaskModel } from '../../../../../../models/task';

@Component({
  selector: 'taskzz-component',
  template: require('./tasks.html')
})
export class TasksComponent implements OnInit {

  tasks: Array<TaskModel>;

  constructor(private _tasksService: TaskService) { }

  ngOnInit() {
    this.tasks = [];

    console.log("getTasks LLAMADA 1");

    this._tasksService
        .getTasks()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.tasks = data;
            //%% this.tasks = data.map(item => new EditItemModel(item));
        });
  }

}


/**
 * 
 * !!!!
 * OJO OJO
 * !!!
 * 
 * 
 * ESTE COMPONENTE NO SE ESTA USANDO...OJO   (creo)
 * 
 * 
 * 
 * 
 * 
 * 
 */
