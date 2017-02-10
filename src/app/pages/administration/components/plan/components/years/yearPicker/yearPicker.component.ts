
import { Component, OnInit } from '@angular/core';

import { YearModel } from '../../../../../../../models/year';
import { YearService } from '../../../../../../../services/year.service';

@Component({
    selector: 'year-picker',
    template: require('./yearPicker.html')
})

export class YearPickerComponent implements OnInit {

years: Array<YearModel>;

  constructor(
    private _yearsService: YearService) { }

// private years: number[] =[];
// private yy : number;

    ngOnInit() {


        this.years = [];
        this._yearsService
            .getYears()
            .then((data) => {
                this.years = data;
            });

        // this.getYear();
    }  

    // getYear(){
    //     var today = new Date();
    //     this.yy = today.getFullYear();        
    //     for(var i = this.yy; i <= (this.yy+2); i++) {
    //     //for(var i = (this.yy-100); i <= this.yy; i++) {
    //       this.years.push(i);
    //     }
    // }


}
