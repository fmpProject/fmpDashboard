import { Component, OnInit, Input } from '@angular/core';

    // import { TargetService } from '../../../../../../services/target.service';
    import { TargetModel } from '../../../../../../models/target';


import { NewSharedTargetsTaskService } from '../../../../../../services/new-shared-targets-task.service';
    // import { NewSharedTargetService } from '../../../../../../services/new-shared-target.service';


@Component({
  selector: 'targets-task',
  template: require('./targets.html')
})
export class TargetsTaskComponent implements OnInit {

  @Input() taskId:string;



  targets: Array<TargetModel>;

  constructor(private _newSharedTargetsTaskService: NewSharedTargetsTaskService) { }

  ngOnInit() {

    console.log("\t" + "\t" + "\t" + "ngOnInit TargetsTaskComponent (filtering Targets for this Task["+this.taskId+"] )");

    this.targets = this._newSharedTargetsTaskService.newSharedTargetArray.filter(target => target.taskId === this.taskId );

  }




      // //targets: Array<TargetModel>;

      // constructor(private _newSharedTargetsTaskService: NewSharedTargetsTaskService) { }

      // ngOnInit() {
      //   // this.targets = [];

      //   console.error(" getTargets 999");
        
      //   this._newSharedTargetsTaskService.uuuAAA_fetch_CachedTargets4Task(this.taskId);

      //       //.filter(target => target.taskId === this.taskId );

      //   // console.error(" getTargets 101010");
      //   // return this._newSharedTargetsTaskService.newSharedTargetArray;    
      // }

      // get targets(): Array<TargetModel> {
      //   console.error(" getTargets kkk");

      //   return this._newSharedTargetsTaskService.uuuAAA_cachedTargets4Task;

      //   //return this.targets;
      //     //return this._newSharedTargetsTaskService.newSharedTargetArray;
      // }



          // //targets: Array<TargetModel>;

          // constructor(private _newSharedTargetService: NewSharedTargetService) { }

          // ngOnInit() {
          //   // this.targets = [];

          //   console.error(" getTargets 999");
            
          //   this._newSharedTargetService.uuuAAA_fetch_CachedTargets4Task(this.taskId);

          //       //.filter(target => target.taskId === this.taskId );

          //   // console.error(" getTargets 101010");
          //   // return this._newSharedTargetService.newSharedTargetArray;    
          // }

          // get targets(): Array<TargetModel> {
          //   console.error(" getTargets kkk");

          //   return this._newSharedTargetService.uuuAAA_cachedTargets4Task;

          //   //return this.targets;
          //     //return this._newSharedTargetService.newSharedTargetArray;
          // }


                // todos_targets: Array<TargetModel>;

                // constructor(private _newSharedTargetService: NewSharedTargetService) { }

                // ngOnInit() {
                //   // this.targets = [];

                //   console.error(" getTargets 999");
                  
                //   this.todos_targets = this._newSharedTargetService.fetchNewSharedTargetArray()

                //       //.filter(target => target.taskId === this.taskId );

                //   // console.error(" getTargets 101010");
                //   // return this._newSharedTargetService.newSharedTargetArray;    
                // }

                // get targets(): Array<TargetModel> {
                //   console.error(" getTargets 666");
                //   return this.todos_targets;
                //     //return this._newSharedTargetService.newSharedTargetArray;
                // }



                    // constructor(private _newSharedTargetService: NewSharedTargetService) { }

                    // ngOnInit() {
                    //   // this.targets = [];

                    //   console.error(" getTargets 999");
                      
                    //   this._newSharedTargetService
                    //       .fetchNewSharedTargetArray()
                    //           // .then((data) => {
                    //           //   this.targets = data.filter(target => target.taskId === this.taskId );
                    //           // });
                    // }

                    // get targets(): Array<TargetModel> {
                    //   console.error(" getTargets 101010");
                    //   return this._newSharedTargetService.newSharedTargetArray;
                    // }


                        // targets: Array<TargetModel>;
                        
                        // constructor(private _newSharedTargetService: NewSharedTargetService) { }

                        // ngOnInit() {
                        //   this.targets = [];

                        //   console.error(" getTargets 999");
                          
                        //   this._newSharedTargetService
                        //       .fetch_CachedTargets4Task(this.taskId)
                        //       .then((data) => {
                        //         this.targets = data.filter(target => target.taskId === this.taskId );
                        //       });
                        // }  




        //-------------
        //-------------
                                // targets: Array<TargetModel>;
                                
                                // constructor(private _targetsService: TargetService) { }

                                // ngOnInit() {
                                //   this.targets = [];

                                //   console.error(" getTargets 2");
                                  
                                //   this._targetsService
                                //       .getTargets()
                                //       .then((data) => {
                                //         //console.log("---> Targets data");
                                //         //console.log(data);

                                //           //this.targets.filter(tarjet => tarjet.item.id <= "3");
                                //           //this._targets = this._targets.filter(target => target !== editItem);  //remueve el editItem en cuestion  

                                //   //this.targets = data.filter(target => target.id !== this.taskId);  //remueve el editItem en cuestion  

                                //         //console.log("---> 11 this.targets data  this.taskId="+this.taskId);
                                //         //console.log(this.targets);
                                //       this.targets = data.filter(target => target.taskId === this.taskId );
                                //         //console.log("---> 22 this.targets data");
                                //         //console.log(this.targets);


                                //           //%% this.targets = data.map(item => new EditItemModel(item));
                                //       });
                                // }
        //-------------
        //-------------




/*
  onTargetSaved( targetSaved: TargetModel ) {
    console.warn('--> RECIBIO TargetsComponent onTargetSaved');
  }
*/



/**
 * ESTE es el PARENT de toda la lista, solamente obtiene una lista de TARJETS y la pasa al hijo: ListaTargetsEditable
 * 
 * El hijo simplemente recibira la lista y interactuara con esa lista a su gusto sin decirle nada al Parent respecto a la lista.
 * 
 * Es decir: El Hijo es, ListaTargetsEditable. El Padre simplemente le manda al hijo la Lista al Hijo 
 * y Muestra lo que sea que tenga el Hijo.
 *  Asi que el Hijo, crea su lista Local y es lo que le muestra al Padre.
 * El hijo Internamente, tiene Metodos para Modificar la Lista que recibe como @Input, usando Get/Set en conjunto a sus Metodos internos,
 *   Dichos Metodos simplemente Agregan, Actualizan o Borran elementos de su Lista Local y el Parent no hace nada, simplemente renderiza al hijo.
 * Es decir El Hijo(ListaTargetsEditable) internamente no accede a servicios, sino solo a su lista Local.
 * - Dicha Lista solo puede ser alterada por Events emitidos por sus hijos.
 * 
 * Por otra parte:
 *  -Ese Hijo (ListaTargetsEditable), debe tener El BOTON de AGREGAR NUEVO,
 *    A su vez debe tener Metodos para detectar si alguno de sus Hijos Internos esta en EDICION, para saber si puede Agregar OTRO Nuevo
 * 
 */


}

