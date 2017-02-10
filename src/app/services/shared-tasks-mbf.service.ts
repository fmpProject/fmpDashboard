
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { TaskModel } from '../models/task';

  import { TaskService } from './task.service';
    //import { NewTaskService } from './new-task.service';


@Injectable()
export class SharedTasksMbfService {

  sharedTaskArray: TaskModel[];


  constructor(private _taskService: TaskService) {}


  fetchSharedTaskArray(): TaskModel[] {

    // console.log("$$$ -->> " + "[TASKS] INI(si hay:DEVUELVE, si no hay:CONSULTA) fetchSharedTaskArray");
    
    if (!this.sharedTaskArray) {

      console.log("$$$ -->> " + "[TASKS] IF(aun no hay) fetchSharedTaskArray");

      // console.log("getTasks LLAMADA 2");

      this._taskService
          .getTasks()
          .then((data) => {
            this.sharedTaskArray = data;
          });   
    }else{
      console.log("$$$ -->> " + "[TASKS] ELSE(ya habia) fetchSharedTaskArray");
    }

    return this.sharedTaskArray;
  }



}