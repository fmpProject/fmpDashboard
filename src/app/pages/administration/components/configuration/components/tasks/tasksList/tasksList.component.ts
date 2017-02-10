import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { TaskService } from '../../../../../../../services/task.service';

import { TaskModel } from '../../../../../../../models/task';



                import { NewSharedTargetsTaskService } from '../../../../../../../services/new-shared-targets-task.service';


@Component({
  selector: 'taskz-list',
  template: require('./tasksList.html')
})

export class TasksListComponent {

  _tasks: Array<EditItemModel<TaskModel>>;

  private aTaskIsOnEditMode: boolean = false;



  @Input() mbfId:string;
                  
  @Input()
  set tasks (tasks: Array<TaskModel>) {
        //console.log("tasks");
        //console.log(tasks);

        this._tasks = tasks.map(item => new EditItemModel(item));                    
  }

  get tasks () {
    return this._tasks.map(editableItem => editableItem.item);
  }
  


  constructor(private _tasksService: TaskService) { }

/*
                    constructor(
                      private _tasksService: TaskService,
                      private _newSharedTargetsTaskService: NewSharedTargetsTaskService
                    ) { }

                    ngOnInit() {
                      console.error("ngOnInit getTargets PREVIAMENTE");                      
                      this._newSharedTargetsTaskService.fetchNewSharedTargetArray(); 
                    }

                    get targetsReady(): boolean {
                      if(this._newSharedTargetsTaskService.newSharedTargetArray){
                        return true;
                      }
                      return false;
                    }   
*/                      
                        
                        // targetsReady: any;

                        // constructor(
                        //   private _tasksService: TaskService,
                        //   private _newSharedTargetsTaskService: NewSharedTargetsTaskService
                        // ) {
                        //           this.targetsReady = this._newSharedTargetsTaskService.fetchNewSharedTargetArray();
                        // }

                        // ngOnInit() {
                        //   console.error(" getTargets PREVIAMENTE");                      
                        //           // this.targetsReady = this._newSharedTargetsTaskService.fetchNewSharedTargetArray();

                        // }


                              // constructor(
                              //   private _tasksService: TaskService,
                              //   private _newSharedTargetsTaskService: NewSharedTargetsTaskService
                              // ) { }

                              // ngOnInit() {
                              //   // this.targets = [];

                              //   console.error(" getTargets PREVIAMENTE");
                                
                              //   this._newSharedTargetsTaskService.fetchNewSharedTargetArray();

                              //       //.filter(target => target.taskId === this.taskId );

                              //   // console.error(" getTargets 101010");
                              //   // return this._newSharedTargetsTaskService.newSharedTargetArray;    
                              // }

                              // get targetsReady(): boolean {
                              //   console.error("INI targetsReady");

                              //   let areTargetsReady: boolean = false;

                              //   if(this._newSharedTargetsTaskService.newSharedTargetArray){
                              //     areTargetsReady = true;
                              //   }

                              //   console.error("FIN targetsReady= "+areTargetsReady);

                              //   return areTargetsReady;

                              // }                                        

                                      // get targets(): Array<TargetModel> {
                                      //   console.error(" getTargets kkk");

                                      //   return this._newSharedTargetsTaskService.uuuAAA_cachedTargets4Task;

                                      //   //return this.targets;
                                      //     //return this._newSharedTargetsTaskService.newSharedTargetArray;
                                      // }





  addTask2Task() {
    console.error('==> BTN addTask2Task ');
    this.aTaskIsOnEditMode = true;  //Para indicar si hay algun task en Edicion

    //console.log('==> dos BTN addTask2Task ');

    let newTask = new TaskModel();
    console.error("OJO this.mbfId="+this.mbfId);
    newTask.mbfId = this.mbfId;
    let newEditItem = new EditItemModel(newTask);
    newEditItem.editing = true;

    this._tasks.push(newEditItem);

  }




  onSaved (editItem: EditItemModel<TaskModel>, updatedTask: TaskModel) {
    console.warn('==> taskList onSaved (editItem - task)');


    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedTask; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> taskList onSaved (CREATE - task)'); 
        this._tasksService
            .create(updatedTask)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aTaskIsOnEditMode = false;  //Para indicar si hay algun task en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedTask;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aTaskIsOnEditMode = true;  //Para indicar si hay algun task en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> taskList onSaved (UPDATE - task)'); 
        this._tasksService
            .update(updatedTask)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aTaskIsOnEditMode = false;  //Para indicar si hay algun task en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedTask;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aTaskIsOnEditMode = true;  //Para indicar si hay algun task en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<TaskModel>) {
    console.warn('==> taskList onCanceled');
        editItem.editing = false;
        // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
        if( this.isLocal(editItem) ) {
          this._tasks = this._tasks.filter(task => task !== editItem);  //remueve el editItem en cuestion  
        }

        this.aTaskIsOnEditMode = false;  //Para indicar si hay algun task en Edicion  
  }


  isLocal(editItem: EditItemModel<TaskModel>): boolean {
    console.warn('==> taskList isLocal');
    return ( ! editItem.item.id );
  }


}

