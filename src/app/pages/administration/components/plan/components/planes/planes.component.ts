import { Component, OnInit } from '@angular/core';

    import { YearService } from '../../../../../../services/year.service';
    import { YearModel } from '../../../../../../models/year';

@Component({
  selector: 'plancitos-component',
  template: require('./planes.html')
})
export class PlanesComponent implements OnInit {

  years: Array<YearModel>;

  constructor(private _yearsService: YearService) { }

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
  }

}

