
import { Component, Input } from '@angular/core';

        import { PlanModel } from '../../../../../../../models/plan';


import { GoalModel } from '../../../../../../../models/goal';
import { GolesPlamModel } from '../../../../../../../models/golesPlam';
import { TargetModel } from '../../../../../../../models/target';
import { TargetsGoalPlanModel } from '../../../../../../../models/targetsGoalPlan';


import { PlanService } from '../../../../../../../services/plan.service';


@Component({
  selector: 'plans-year',
  template: require('./plansYear.html')
})
export class PlansYearComponent {


  _plansEsteYear: Array<PlanModel>

  @Input()
  set plansEsteYear (plansEsteYear: Array<PlanModel>) {
        this._plansEsteYear = plansEsteYear;                    
  }
  get plansEsteYear () {
    return this._plansEsteYear;
  } 
  
  //@Input() plansEsteYear: Array<PlanModel>;

@Input() goals: Array<GoalModel>;
@Input() golesPlam: Array<GolesPlamModel>;
@Input() targets: Array<TargetModel>;
@Input() targetsGoalPlan: Array<TargetsGoalPlanModel>;

@Input() targetsStructure: any;


  constructor(private _planesService: PlanService) { }


  deleteThisPlan(planDelYear_paraEliminar: PlanModel) {
    console.warn("deleteThisPlan");

        // console.warn("this.targetsGoalPlan.length=="+this.targetsGoalPlan.length);


    this._planesService
      .delete(planDelYear_paraEliminar.id)
      .then(() => {
        console.log('ELIMINADO deleteThisPlan de  la DB');

        this._plansEsteYear = this._plansEsteYear.filter(plan => plan !== planDelYear_paraEliminar);

      })
      .catch((e) => {
        console.error("===>>> NO LOGRO ELIMINAR !!!! ");
        console.error("===>>> reject: " + e);

        // this.creatingGoal = true;  //Para indicar si hay algun goal en Edicion
      });
                  
  }


}



