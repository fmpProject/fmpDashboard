import { Component, OnInit } from '@angular/core';

    import { MbfService } from '../../../../../../services/mbf.service';
    import { MbfModel } from '../../../../../../models/mbf';

@Component({
  selector: 'mbfzz-component',
  template: require('./mbfs.html')
})
export class MbfsComponent implements OnInit {

  mbfs: Array<MbfModel>;

  constructor(private _mbfsService: MbfService) { }

  ngOnInit() {
    this.mbfs = [];

    this._mbfsService
        .getMbfs()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.mbfs = data;
            //%% this.mbfs = data.map(item => new EditItemModel(item));
        });
  }

}

