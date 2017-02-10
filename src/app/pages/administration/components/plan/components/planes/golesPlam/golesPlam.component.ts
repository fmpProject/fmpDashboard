
import { Component, Input } from '@angular/core';

        import { GolesPlamModel } from '../../../../../../../models/golesPlam';


          import { TargetModel } from '../../../../../../../models/target';
        import { TargetsGoalPlanModel } from '../../../../../../../models/targetsGoalPlan';

                import { GoalModel } from '../../../../../../../models/goal';
                import { PlanModel } from '../../../../../../../models/plan';

import { GolesPlamService } from '../../../../../../../services/golesPlam.service';

@Component({
  selector: 'goles-plam',
  template: require('./golesPlam.html')
})
export class GolesPlamComponent {

  _golsEstePlam: Array<GolesPlamModel>

  @Input()
  set golsEstePlam (golsEstePlam: Array<GolesPlamModel>) {
        this._golsEstePlam = golsEstePlam;                    
  }
  get golsEstePlam () {
    return this._golsEstePlam;
  }  

        //@Input() golsEstePlam: Array<GolesPlamModel>;

        @Input() targets: Array<TargetModel>;
        @Input() targetsGoalPlan: Array<TargetsGoalPlanModel>;

                @Input() goals: Array<GoalModel>;
                @Input() plan: PlanModel;        

@Input() targetsStructure: any;



// private goalIndexes: Array<string> = ["Goal I","Goal II","Goal III","Goal IV","Goal V","Goal VI"];

private creatingGoal: boolean = false;

private newGoal = new GolesPlamModel();
//private newGoal: GolesPlamModel;


  constructor(private _golesPlamService: GolesPlamService) { }

  openNewGoalCreator() {
    console.log('$ -->>  openNewGoalCreator ');

        this.creatingGoal = true;  //Para indicar si hay algun goal en Edicion

        this.newGoal = new GolesPlamModel();
        this.newGoal.plamId = this.plan.id; //"1"; 

  }

/*
  createNewGolYUKA() {
    console.log('$ -->>  YUKA_YUKA BTN createNewGolYUKA ');

// let newGoal = new GolesPlamModel();  //OJO: NO ESTOY SEGURO por que, pero PARECE QUE, SIN ESTO NO FUCNIONA !!!!

this.newGoal.name = "No_IMPORTA"; 
this.newGoal.description = "No_IMPORTA"; 

// this.newGoal.plamId = "1"; 
// this.newGoal.goalId = "1"; 
//this.newGoal.indexGoal = "1"; 

        //   id: string;
        //   name: string;
        //   description: string;
        //   plamId: string;
        //   goalId: string;
        //   indexGoal: string;

                let miGolcito : any = this.newGoal;

miGolcito.indexGoal = "" + (this._golsEstePlam.length+1);


            miGolcito.golcito = 
              this.goals
                .filter(miGol => miGol.id === this.newGoal.goalId )
                  [0];


// Pipe updates display because "this._golsEstePlam" array is a new object
//this._golsEstePlam = this._golsEstePlam.concat(this.newGoal);   
//this._golsEstePlam = this._golsEstePlam.concat(miGolcito);   
// Pure pipe won't update display because "this._golsEstePlam" array reference is unchanged    // Impure pipe will display
//this._golsEstePlam.push(this.newGoal);
this._golsEstePlam.push(miGolcito);

console.warn("this._golsEstePlam")
console.warn(this._golsEstePlam)

this.creatingGoal = false;


          //?????????????????????????????????????????????????????????????????????????????????????????????????
          //?????????????????????????????????????????????????????????????????????????????????????????????????
                //   this.aOfficeIsOnEditMode = true;  //Para indicar si hay algun office en Edicion

                //   //console.log('==> BTN addOffice2Office ');

                //   let newOffice = new OfficeModel();
                //   let newEditItem = new EditItemModel(newOffice);
                //   newEditItem.editing = true;

                //   this._offices.push(newEditItem);
          //?????????????????????????????????????????????????????????????????????????????????????????????????
          //????????????????????????????????????????????????????????????????????????????????????????????????? 

  }  
*/
  

  deleteThisGoal(golDelPlan_paraEliminar: GolesPlamModel) {
    console.warn("deleteThisGoal");

        // console.warn("this.targetsGoalPlan.length=="+this.targetsGoalPlan.length);


    this._golesPlamService
      .delete(golDelPlan_paraEliminar.id)
      .then(() => {
        console.log('ELIMINADO deleteThisGoal de  la DB');

        this._golsEstePlam = this._golsEstePlam.filter(gol => gol !== golDelPlan_paraEliminar);

        //## this.heroes = this.heroes.filter(h => h !== hero);
        //## if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch((e) => {
        console.error("===>>> NO LOGRO ELIMINAR !!!! ");
        console.error("===>>> reject: " + e);

        // this.creatingGoal = true;  //Para indicar si hay algun goal en Edicion
      });
                  
  }



  cancelGoalCreation() {
    console.warn("cancelGoalCreation");
    //console.warn(a);
    this.creatingGoal = false;  //Para indicar que YA NO HAY ningun goal en Edicion
  }





  saveGoalCreation() {
                          // console.warn("saveGoalCreation this.newGoal"); 
                          // console.warn(this.newGoal); 



          let myNewGoal : any = this.newGoal;

    console.warn("saveGoalCreation myNewGoal.plamId :: "+myNewGoal.plamId); 
    //console.warn(myNewGoal);
    this.creatingGoal = false;  //Para indicar que YA NO HAY ningun goal en Edicion


          myNewGoal.name = "No_IMPORTA"; 
          myNewGoal.description = "No_IMPORTA";
          myNewGoal.indexGoal = "" + (this._golsEstePlam.length+1);

    this._golesPlamService
      .create(myNewGoal)
      .then((data) => {
          console.warn("goal_SAVED : goalID="+data.id); 

          this.creatingGoal = false;  //Para indicar que YA NO HAY ningun goal en Edicion

            myNewGoal.id = data.id;

            myNewGoal.golcito = 
              this.goals
                .filter(miGol => miGol.id === myNewGoal.goalId )
                  [0];

          // Pipe updates display because "this._golsEstePlam" array is a new object
            //this._golsEstePlam = this._golsEstePlam.concat(myNewGoal);   
          // Pure pipe won't update display because "this._golsEstePlam" array reference is unchanged    // Impure pipe will display
            this._golsEstePlam.push(myNewGoal);

      })
      .catch((e) => {
        console.error("===>>> NO LOGRO CREAR !!!! ");
        console.error("===>>> reject: " + e);

        this.creatingGoal = true;  //Para indicar si hay algun goal en Edicion
      });

  }


}



