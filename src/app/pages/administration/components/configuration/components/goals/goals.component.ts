import { Component, OnInit } from '@angular/core';

    import { GoalService } from '../../../../../../services/goal.service';
    import { GoalModel } from '../../../../../../models/goal';



@Component({
  selector: 'goalzz-component',
  template: require('./goals.html')
})
export class GoalsComponent implements OnInit {

  goals: Array<GoalModel>;



  constructor(private _goalsService: GoalService) { }

  ngOnInit() {
    this.goals = [];

    this._goalsService
        .getGoals()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.goals = data;
            //%% this.goals = data.map(item => new EditItemModel(item));
        });

  }


}

