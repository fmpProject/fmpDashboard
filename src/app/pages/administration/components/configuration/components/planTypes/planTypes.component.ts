import { Component, OnInit } from '@angular/core';

    import { PlanTypeService } from '../../../../../../services/planType.service';
    import { PlanTypeModel } from '../../../../../../models/planType';



@Component({
  selector: 'planTypezz-component',
  template: require('./planTypes.html')
})
export class PlanTypesComponent implements OnInit {

  planTypes: Array<PlanTypeModel>;



  constructor(private _planTypesService: PlanTypeService) { }

  ngOnInit() {
    this.planTypes = [];

    this._planTypesService
        .getPlanTypes()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.planTypes = data;
            //%% this.planTypes = data.map(item => new EditItemModel(item));
        });

  }


}

