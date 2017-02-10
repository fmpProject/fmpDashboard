
//import { Component, Input } from '@angular/core';
//import { PlanModel } from '../../../../../../../models/plan';


import { Component, OnInit, Output, EventEmitter } from '@angular/core';

    import { PlanTypeService } from '../../../../../../../services/planType.service';
    import { PlanTypeModel } from '../../../../../../../models/planType';

    import { PlanModel } from '../../../../../../../models/plan';



//import {MessagesModule, Message} from 'primeng/primeng';
import {Message} from 'primeng/primeng';


@Component({
  selector: 'plan-creator',
  template: require('./planCreator.html')
})
export class PlanCreatorComponent implements OnInit {
        
  msgs: Message[] = [];

  @Output() canceledPlanCreation = new EventEmitter<PlanModel>();
  @Output() savedPlanCreation = new EventEmitter<PlanModel>();
        
             

  // @Input() plan: PlanModel;

  public newPlan: PlanModel;
    // this.newPlan = new PlanModel();
    // this.newPlan.taskId = this.taskId;


  planTypes: Array<PlanTypeModel>;

  constructor(
    private _planTypesService: PlanTypeService
  ) { }



  ngOnInit() {

    //this.msgs = [];


    this.planTypes = [];

    this._planTypesService
        .getPlanTypes()
        .then((data) => {
          this.planTypes = data;
        });

    this.resetThisNewPlan();
        // this.newPlan = new PlanModel();
        // this.newPlan.name = "NAME_New_Plan";
        // this.newPlan.description = "DESCR_New_Plan";

        // this.newPlan.yearId = "";  // OJO !!!!   ... NOTA: NO SE PUEDE HACER ASI; el SELECT del YEAR deberia empezar en valor NULO y forzar a que se elija para luego recibir el EVENTO aqui, o de otra manera RECIBIR el valor en que se inicialize O TAMBIEN pasarle dicho valor (YEAR inicial)

    

            

  }

  resetThisNewPlan () {
    console.warn('==> resetThisNewPlan');

    this.newPlan = new PlanModel();  //OJO: NO ESTOY SEGURO por que, pero PARECE QUE, SIN ESTO NO FUCNIONA !!!!

    this.newPlan.name = ""; //"NAME_New_Plan";
    this.newPlan.description = ""; //"DESCR_New_Plan";

    this.newPlan.yearId = "";  // OJO !!!!   ... NOTA: NO SE PUEDE HACER ASI; el SELECT del YEAR deberia empezar en valor NULO y forzar a que se elija para luego recibir el EVENTO aqui, o de otra manera RECIBIR el valor en que se inicialize O TAMBIEN pasarle dicho valor (YEAR inicial)
  }



  onYearChange (yy : string) {
    //onYearChange (yy : number) {
    console.warn('==> onYearChange (Selected Year CHANGED) yy==' + yy);

    //console.warn('==> OLD:: this.newPlan.yearId==' + this.newPlan.yearId);
    this.newPlan.yearId = yy;
    //console.warn('==> NEW:: this.newPlan.yearId==' + this.newPlan.yearId);
  }




  onCanceledPlanCreation () {
    //this.office = this._restoreService.restoreItem();
    this.canceledPlanCreation.emit(this.newPlan);
  }



  onSavedPlanCreation () {
    if( (this.newPlan.name=="") || (this.newPlan.description=="") || (this.newPlan.yearId=="") ){
        //this.msgs = [];
        this.msgs.push({severity:'error', summary:'Falta info', detail:'Debe completar todo el FORMULARIO para este Plan'});
    }else{
      this.savedPlanCreation.emit(this.newPlan);

        //this.resetThisNewPlan();

    }
  }  



}



