import { Component, OnInit } from '@angular/core';

    import { YearService } from '../../../../../../services/year.service';
    import { YearModel } from '../../../../../../models/year';
          import { PlanService } from '../../../../../../services/plan.service';
          import { PlanModel } from '../../../../../../models/plan';  
            import { GoalService } from '../../../../../../services/goal.service';
            import { GoalModel } from '../../../../../../models/goal'; 
              import { GolesPlamService } from '../../../../../../services/golesPlam.service';
              import { GolesPlamModel } from '../../../../../../models/golesPlam';

                  import { TargetService } from '../../../../../../services/target.service';
                  import { TargetModel } from '../../../../../../models/target';
                import { TargetsGoalPlanService } from '../../../../../../services/targetsGoalPlan.service';
                import { TargetsGoalPlanModel } from '../../../../../../models/targetsGoalPlan';

//##__$$  import { TargetsStructureService } from '../../../../../../services/targetsStructure.service';


@Component({
  selector: 'years-component',
  template: require('./years.html')
})
export class YearsComponent implements OnInit {

  years: Array<YearModel>;
      planes: Array<PlanModel>;
        goals: Array<GoalModel>;
          golesPlam: Array<GolesPlamModel>;
              targets: Array<TargetModel>;
            targetsGoalPlan: Array<TargetsGoalPlanModel>;
targetsStructure: any;            

  constructor(
    private _yearsService: YearService,
    private _planesService: PlanService,
    private _goalsService: GoalService,
    private _golesPlamService: GolesPlamService,
      private _targetsService: TargetService,
    private _targetsGoalPlanService: TargetsGoalPlanService,
//##__$$  private _targetsStructureService: TargetsStructureService
    ) { }

  ngOnInit() {

    this.years = [];
    this._yearsService
        .getYears()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.years = data;
            //%% this.years = data.map(item => new EditItemModel(item));
        });


    this.planes = [];
    this._planesService
        .getPlanes()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.planes = data;
            //%% this.planes = data.map(item => new EditItemModel(item));
        });


    this.goals = [];
    this._goalsService
        .getGoals()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.goals = data;
            //%% this.goals = data.map(item => new EditItemModel(item));
        });


    this.golesPlam = [];
    this._golesPlamService
        .getGolesPlam()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.golesPlam = data;
            //%% this.golesPlam = data.map(item => new EditItemModel(item));
        });


    console.error("getTargets 3");
    
    this.targets = [];
    this._targetsService
        .getTargets()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.targets = data;
            //%% this.targets = data.map(item => new EditItemModel(item));
        });                    


    //this.targetsGoalPlan = [];
    this._targetsGoalPlanService
        .getTargetsGoalPlan()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.targetsGoalPlan = data;
            //%% this.targetsGoalPlan = data.map(item => new EditItemModel(item));
        });   


    console.error("--NOTA-- aqui hacia; TargetsStructureService ... pero creo que es algo viejo O SEA CREO Q SOBRA !!!");   
//##__$$    this._targetsStructureService
//##__$$        .getTargetsStructure()
//##__$$        .then(targetsStructure => this.targetsStructure = targetsStructure); 



  }

}

