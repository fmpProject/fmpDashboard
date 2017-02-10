import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { GoalService } from '../../../../../../../services/goal.service';

import { GoalModel } from '../../../../../../../models/goal';


          import { OnInit } from '@angular/core';
          import { TargetService } from '../../../../../../../services/target.service';
          import { TargetModel } from '../../../../../../../models/target';

            //========================================================================================================================
            //========================================================================================================================
            //========================================================================================================================
              import { TarGolService } from '../../../../../../../services/tarGol.service';
              import { TarGolModel } from '../../../../../../../models/tarGol';
            //========================================================================================================================
            //========================================================================================================================
            //========================================================================================================================  

//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
              import { TargTreeNodeService } from '../../../../../../../services/targTreeNode.service';
              import {TreeNode} from 'primeng/primeng';
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))         

@Component({
  selector: 'goals-list',
  template: require('./goalsList.html')
})

export class GoalsListComponent implements OnInit {

  _goals: Array<EditItemModel<GoalModel>>;

  private aGoalIsOnEditMode: boolean = false;

//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
        defTargetsTreeNodes: TreeNode[];
          //files777: TreeNode[];
          //selectedFiles777: TreeNode[];
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))        

  @Input()
  set goals (goals: Array<GoalModel>) {
        //console.log("goals");
        //console.log(goals);
        this._goals = goals.map(item => new EditItemModel(item));                    
  }

  get goals () {
    return this._goals.map(editableItem => editableItem.item);;
  }
                      

            //========================================================================================================================
            //========================================================================================================================
            //========================================================================================================================  
                targets_goals: Array<any>; //Array<TarGolModel>;
            //========================================================================================================================
            //========================================================================================================================
            //========================================================================================================================              


//          dropdownItems_defTargets: Array<any>;  //## targets: Array<TargetModel>;


          constructor(
            private _goalsService: GoalService,
            private _targetsService: TargetService,
            private _tarGolesService: TarGolService,
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
            private _targTreeNodeService: TargTreeNodeService
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
          ) { }
              //## constructor(private _goalsService: GoalService) { }


/**
 * - Aqui obtenemos todos los Targets, para pasar la lista completa (de todos los disponibles a cada Goal)
 * - Cada Goal debe buscar (en otra DB) los Target que ya tenga disponibles
 * - Cada Goal debe encargarse de AGREGAR y BORRAR sus PROPIOS TARGETS (en la otra DB)
 */



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
       defTargsGoalsArray: any[];
        // defTargsGoalsTreeNodes: TreeNode[];
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 

          ngOnInit() {

//Obtiene todos los Targets PREDEFINIDOS , para el DROPDOWN de cada Goal
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
  /**
   * OJO !!!
   * NOTA:
   * Este funcionamiento, no debe estar en el GoalsList , este solamente hace la lista de GoalsList
   * - Cada Goal individual, debe generar su Tree y decidir cuales estan selectedFiles777
   * 
   */

            this.defTargetsTreeNodes = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente

//##__$$            this._targTreeNodeService
//##__$$                .getTargetsTree()
//##__$$                //.then(targetsTree => this.files777 = targetsTree);
//##__$$                .then(targetsTree => this.defTargetsTreeNodes = targetsTree);
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
            
            // //Obtiene todos los Targets PREDEFINIDOS , para el DROPDOWN de cada Goal
            // //========================================================================================================================
            // //========================================================================================================================
            // //========================================================================================================================
            // this.dropdownItems_defTargets = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente
            // this._targetsService
            //     .getTargets()
            //     .then((data) => {

            //         // Convierte el Array de TargetModel en otro Array de Items para el Dropdown
            //         this.dropdownItems_defTargets = data
            //           .map( (dataTarget:TargetModel) => {
            //               let dropdownItem_defTarget = {
            //                   id: dataTarget.id,
            //                   text: dataTarget.name
            //                     //## text: dataTarget.name + '_tID=' + dataTarget.id
            //               };
            //               return dropdownItem_defTarget;
            //             }
            //           );

            //     });
            // //========================================================================================================================
            // //========================================================================================================================
            // //========================================================================================================================



            //Obtiene todos los Targets ASOCIADOS A ALGUN GOAL, para el DROPDOWN de cada Goal
            //========================================================================================================================
            //========================================================================================================================
            //========================================================================================================================

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
this.defTargsGoalsArray = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente   

this._tarGolesService
    .getTarGoles()
    .then((data) => {
      //console.log("data");
      //console.log(data);
        this.defTargsGoalsArray = data;

    }); 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/*
                this.targets_goals = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente   
                    //## this.targets_goals = [{id:'1',text:'name 4_tID=4'},{id:2,text:'name 5_tID=5'}]; //## ['teztINIT'];

                this._tarGolesService
                    .getTarGoles()
                    .then((data) => {
                      //console.log("data");
                      //console.log(data);

                            //## this.targets_goals = data;
                              //%% this.categories = data.map(item => new EditItemModel(item));

                        // Convierte el Array de TarGolModel en otro Array de Items para el Dropdown

                          //## this.dropdownItems_defTargets = data.map //...etc...
                        this.targets_goals = data.map( (dataTarget:TarGolModel) => {
                              let dropdownItem_defTarget = {
                                  //## id: dataTarget.goalId, //## dataTarget.id,
                                  id: dataTarget.id, //## dataTarget.id,
                                  goalId: dataTarget.goalId, //## dataTarget.id,
                                  text: dataTarget.name
                                    //## text: dataTarget.name + ' (tID=' + dataTarget.id + ')'
                              };

//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
    //  this._targets_goals = targets_goals.filter(goals_target => goals_target.goalId === this.goalId );
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
                              return dropdownItem_defTarget;
                            }
                          );

                    });   
*/                          


            /*
            this.targetsGoals = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente
            this._targetsService
                .getTargets()
                .then((data) => {

                    // Convierte el Array de TargetModel en otro Array de Items para el Dropdown
                    this.targetsGoals = data
                      .map( (dataTarget:TargetModel) => {
                          let targetItem = {
                              id: dataTarget.id,
                              text: dataTarget.name + '_tID=' + dataTarget.id
                          };
                          return targetItem;
                        }
                      );

                });
            */
            //========================================================================================================================
            //========================================================================================================================
            //========================================================================================================================            



          }




  addGoal2Goal() {
    console.error('==> BTN addGoal2Goal ');
    this.aGoalIsOnEditMode = true;  //Para indicar si hay algun goal en Edicion

    //console.log('==> BTN addGoal2Goal ');

    let newGoal = new GoalModel();
    let newEditItem = new EditItemModel(newGoal);
    newEditItem.editing = true;

    this._goals.push(newEditItem);
  }




  onSaved (editItem: EditItemModel<GoalModel>, updatedGoal: GoalModel) {
    console.warn('==> goalList onSaved (editItem - goal)');

    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedGoal; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> goalList onSaved (CREATE - goal)'); 
        this._goalsService
            .create(updatedGoal)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aGoalIsOnEditMode = false;  //Para indicar si hay algun goal en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedGoal;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aGoalIsOnEditMode = true;  //Para indicar si hay algun goal en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> goalList onSaved (UPDATE - goal)'); 
        this._goalsService
            .update(updatedGoal)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aGoalIsOnEditMode = false;  //Para indicar si hay algun goal en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedGoal;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aGoalIsOnEditMode = true;  //Para indicar si hay algun goal en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<GoalModel>) {
    console.warn('==> goalList onCanceled');

    editItem.editing = false;
    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
    if( this.isLocal(editItem) ) {
      this._goals = this._goals.filter(goal => goal !== editItem);  //remueve el editItem en cuestion  
    }

    this.aGoalIsOnEditMode = false;  //Para indicar si hay algun goal en Edicion  
  }


  isLocal(editItem: EditItemModel<GoalModel>): boolean {
    console.warn('==> goalList isLocal');
    return ( ! editItem.item.id );
  }


}

