
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'year-picker',
    template: require('./yearPicker.html')
})

export class YearPickerComponent implements OnInit {


private years: number[] =[];
private yy : number;

    ngOnInit() { 
        this.getYear();
    }  

     getYear(){
        var today = new Date();
        this.yy = today.getFullYear();        
        for(var i = this.yy; i <= (this.yy+2); i++) {
        //for(var i = (this.yy-100); i <= this.yy; i++) {
          this.years.push(i);
        }
    }


}
