
import { Component, Input } from '@angular/core';

import { OfiTipoPlamService } from '../../../../../../../services/ofiTipoPlam.service';
import { OfiTipoPlamModel } from '../../../../../../../models/ofiTipoPlam';        



// webpack html imports
let template = require('./officesSelector.html');

@Component({
  selector: 'offices-selector',
  template
})
export class OfficesSelectorComponent {


  constructor(private _ofiTipoPlamesService: OfiTipoPlamService) { }
  

  @Input('dropdownItems') items:Array<any>;
  
  @Input() planTypeId:string;

  @Input()
  set offices_planTypes (offices_planTypes:Array<any>) {
    this._offices_planTypes = offices_planTypes.filter(planTypes_office => planTypes_office.planTypeId === this.planTypeId );
          //this._offices_planTypes = items.map(item => new EditItemModel(item));                    
  }
  get offices_planTypes () {
    return this._offices_planTypes;//.map(editableItem => editableItem.item);
  }
    


  private _offices_planTypes:any = [];

  private value:any = [];
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }



  public selected(value:any):void {
    console.log('Selected value is: ', value);


                          let planType_Targ: OfiTipoPlamModel = {
                            id: undefined,
                            name: value.text,
                            description: "descr " + value.text,
                            planTypeId: this.planTypeId,
                              //## planTypeId: this.planTypeId,
                            officeId: value.id                         
                          };

      console.warn('==> planTypeList onSaved (CREATE - planType)'); 
        this._ofiTipoPlamesService
            .create(planType_Targ)
            .then((data) => {
                    //console.log("===>>> create data");
                    //console.log(data);
                //## editItem.item = data;
                //## editItem.editing = false;
                  console.log('GUARDADO en la DB');
                //## this.aPlanTypeIsOnEditMode = false;  //Para indicar si hay algun planType en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedPlanType;
                  // editItem.editing = false;
              //## editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aPlanTypeIsOnEditMode = true;  //Para indicar si hay algun planType en Edicion
            });


  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);


    this._ofiTipoPlamesService
        .delete(value.id)
        .then(() => {
          console.log('ELIMINADO de  la DB');
          //## this.heroes = this.heroes.filter(h => h !== hero);
          //## if (this.selectedHero === hero) { this.selectedHero = null; }
        });

  }



  public refreshValue(value:any):void {
    this.value = value;
  }

  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }


}
