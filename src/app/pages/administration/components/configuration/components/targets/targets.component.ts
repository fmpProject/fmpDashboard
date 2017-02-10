import { Component, OnInit } from '@angular/core';

    import { TargetService } from '../../../../../../services/target.service';
    import { TargetModel } from '../../../../../../models/target';

@Component({
  selector: 'targetzz-component',
  template: require('./targets.html')
})
export class TargetsComponent implements OnInit {

  targets: Array<TargetModel>;

  constructor(private _targetsService: TargetService) { }

  ngOnInit() {
    this.targets = [];

    console.error("getTargets 1");
    
    this._targetsService
        .getTargets()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.targets = data;
            //%% this.targets = data.map(item => new EditItemModel(item));
        });
  }

}

