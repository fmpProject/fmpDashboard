import { Component, OnInit } from '@angular/core';

    import { OfficeService } from '../../../../../../services/office.service';
    import { OfficeModel } from '../../../../../../models/office';



@Component({
  selector: 'officezz-component',
  template: require('./offices.html')
})
export class OfficesComponent implements OnInit {

  offices: Array<OfficeModel>;



  constructor(private _officesService: OfficeService) { }

  ngOnInit() {
    this.offices = [];

    this._officesService
        .getOffices()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.offices = data;
            //%% this.offices = data.map(item => new EditItemModel(item));
        });

  }


}

