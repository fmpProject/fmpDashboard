import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { PlanTypeService } from '../../../../../../../services/planType.service';

import { PlanTypeModel } from '../../../../../../../models/planType';


          import { OnInit } from '@angular/core';
          import { OfficeService } from '../../../../../../../services/office.service';
          import { OfficeModel } from '../../../../../../../models/office';

              import { OfiTipoPlamService } from '../../../../../../../services/ofiTipoPlam.service';
              import { OfiTipoPlamModel } from '../../../../../../../models/ofiTipoPlam';           

@Component({
  selector: 'planTypes-list',
  template: require('./planTypesList.html')
})

export class PlanTypesListComponent implements OnInit {

  constructor(private _planTypesService: PlanTypeService, private _officesService: OfficeService, private _ofiTipoPlamesService: OfiTipoPlamService) { }

  @Input()
  set planTypes (planTypes: Array<PlanTypeModel>) {
        //console.log("planTypes");
        //console.log(planTypes);
        this._planTypes = planTypes.map(item => new EditItemModel(item));                    
  }
  get planTypes () {
    return this._planTypes.map(editableItem => editableItem.item);;
  }


  _planTypes: Array<EditItemModel<PlanTypeModel>>;
  private aPlanTypeIsOnEditMode: boolean = false;
  offices_planTypes: Array<any>; //Array<OfiTipoPlamModel>;
  dropdownItems_defOffices: Array<any>;  //## offices: Array<OfficeModel>;

    
  ngOnInit() {
    
    //Obtiene todos los Offices PREDEFINIDOS , para el DROPDOWN de cada PlanType
    this.dropdownItems_defOffices = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente
    this._officesService
        .getOffices()
        .then((data) => {

            // Convierte el Array de OfficeModel en otro Array de Items para el Dropdown
            this.dropdownItems_defOffices = data
              .map( (dataOffice:OfficeModel) => {
                  let dropdownItem_defOffice = {
                      id: dataOffice.id,
                      text: dataOffice.name
                        //## text: dataOffice.name + '_tID=' + dataOffice.id
                  };
                  return dropdownItem_defOffice;
                }
              );

        });

    //Obtiene todos los Offices ASOCIADOS A ALGUN planType, para el DROPDOWN de cada PlanType
    this.offices_planTypes = [];  //Test: Al iniciar, asegura que haya al menos un array VACIO ... creo que NO ES LA MEJOR MANERA y quizas sobre o deba ser implementado diferente        
    this._ofiTipoPlamesService
        .getOfiTipoPlames()
        .then((data) => {
            // Convierte el Array de OfiTipoPlamModel en otro Array de Items para el Dropdown
            this.offices_planTypes = data
              .map( (dataOffice:OfiTipoPlamModel) => {
                  let dropdownItem_defOffice = {
                      id: dataOffice.id,
                      planTypeId: dataOffice.planTypeId,
                      text: dataOffice.name
                  };
                  return dropdownItem_defOffice;
                }
              );
        });

  }




  addPlanType2PlanType() {
    console.error('==> BTN addPlanType2PlanType ');
    this.aPlanTypeIsOnEditMode = true;  //Para indicar si hay algun planType en Edicion

    //console.log('==> BTN addPlanType2PlanType ');

    let newPlanType = new PlanTypeModel();
    let newEditItem = new EditItemModel(newPlanType);
    newEditItem.editing = true;

    this._planTypes.push(newEditItem);
  }




  onSaved (editItem: EditItemModel<PlanTypeModel>, updatedPlanType: PlanTypeModel) {
    console.warn('==> planTypeList onSaved (editItem - planType)');

    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedPlanType; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> planTypeList onSaved (CREATE - planType)'); 
        this._planTypesService
            .create(updatedPlanType)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aPlanTypeIsOnEditMode = false;  //Para indicar si hay algun planType en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedPlanType;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aPlanTypeIsOnEditMode = true;  //Para indicar si hay algun planType en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> planTypeList onSaved (UPDATE - planType)'); 
        this._planTypesService
            .update(updatedPlanType)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aPlanTypeIsOnEditMode = false;  //Para indicar si hay algun planType en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedPlanType;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aPlanTypeIsOnEditMode = true;  //Para indicar si hay algun planType en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<PlanTypeModel>) {
    console.warn('==> planTypeList onCanceled');

    editItem.editing = false;
    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
    if( this.isLocal(editItem) ) {
      this._planTypes = this._planTypes.filter(planType => planType !== editItem);  //remueve el editItem en cuestion  
    }

    this.aPlanTypeIsOnEditMode = false;  //Para indicar si hay algun planType en Edicion  
  }


  isLocal(editItem: EditItemModel<PlanTypeModel>): boolean {
    console.warn('==> planTypeList isLocal');
    return ( ! editItem.item.id );
  }


}

