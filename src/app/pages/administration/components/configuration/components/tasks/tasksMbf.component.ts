import { Component, OnInit, Input } from '@angular/core';

    // import { TaskService } from '../../../../../../services/task.service';
    import { TaskModel } from '../../../../../../models/task';

import { SharedTasksMbfService } from '../../../../../../services/shared-tasks-mbf.service';

@Component({
  selector: 'tasks-mbf',
  template: require('./tasks.html')
})
export class TasksMbfComponent implements OnInit {

  @Input() mbfId:string;

//(((((((((((((((((((((())))))))))))))))))))))
//(((((((((((((((((((((())))))))))))))))))))))

  tasks: Array<TaskModel>;

  constructor(private _sharedTasksMbfService: SharedTasksMbfService) { }

  ngOnInit() {

    console.log("\t" + "\t" + "ngOnInit TasksMbfComponent (filtering Tasks for this Mbf["+this.mbfId+"] )");

    this.tasks = this._sharedTasksMbfService.sharedTaskArray.filter(task => task.mbfId === this.mbfId );

  }
//(((((((((((((((((((((())))))))))))))))))))))
//(((((((((((((((((((((())))))))))))))))))))))



//-------------
//-------------
  // tasks: Array<TaskModel>;

  // constructor(private _tasksService: TaskService) { }

  // ngOnInit() {
  //   this.tasks = [];

  //   this._tasksService
  //       .getTasks()
  //       .then((data) => {
  //         //console.log("---> Tasks data");
  //         //console.log(data);

  //           //this.tasks.filter(tarjet => tarjet.item.id <= "3");
  //           //this._tasks = this._tasks.filter(task => task !== editItem);  //remueve el editItem en cuestion  

  //   //this.tasks = data.filter(task => task.id !== this.mbfId);  //remueve el editItem en cuestion  

  //         //console.log("---> 11 this.tasks data  this.mbfId="+this.mbfId);
  //         //console.log(this.tasks);
  //       this.tasks = data.filter(task => task.mbfId === this.mbfId );
  //         //console.log("---> 22 this.tasks data");
  //         //console.log(this.tasks);


  //           //%% this.tasks = data.map(item => new EditItemModel(item));
  //       });
  // }
//-------------
//-------------






/*
  onTaskSaved( taskSaved: TaskModel ) {
    console.warn('--> RECIBIO TasksComponent onTaskSaved');
  }
*/



/**
 * ESTE es el PARENT de toda la lista, solamente obtiene una lista de TARJETS y la pasa al hijo: ListaTasksEditable
 * 
 * El hijo simplemente recibira la lista y interactuara con esa lista a su gusto sin decirle nada al Parent respecto a la lista.
 * 
 * Es decir: El Hijo es, ListaTasksEditable. El Padre simplemente le manda al hijo la Lista al Hijo 
 * y Muestra lo que sea que tenga el Hijo.
 *  Asi que el Hijo, crea su lista Local y es lo que le muestra al Padre.
 * El hijo Internamente, tiene Metodos para Modificar la Lista que recibe como @Input, usando Get/Set en conjunto a sus Metodos internos,
 *   Dichos Metodos simplemente Agregan, Actualizan o Borran elementos de su Lista Local y el Parent no hace nada, simplemente renderiza al hijo.
 * Es decir El Hijo(ListaTasksEditable) internamente no accede a servicios, sino solo a su lista Local.
 * - Dicha Lista solo puede ser alterada por Events emitidos por sus hijos.
 * 
 * Por otra parte:
 *  -Ese Hijo (ListaTasksEditable), debe tener El BOTON de AGREGAR NUEVO,
 *    A su vez debe tener Metodos para detectar si alguno de sus Hijos Internos esta en EDICION, para saber si puede Agregar OTRO Nuevo
 * 
 */


}

