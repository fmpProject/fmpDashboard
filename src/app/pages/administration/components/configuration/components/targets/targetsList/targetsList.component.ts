import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { TargetService } from '../../../../../../../services/target.service';

import { TargetModel } from '../../../../../../../models/target';


@Component({
  selector: 'targetz-list',
  template: require('./targetsList.html')
})

export class TargetsListComponent {

  _targets: Array<EditItemModel<TargetModel>>;

  private aTargetIsOnEditMode: boolean = false;



  @Input() taskId:string;
                  
  @Input()
  set targets (targets: Array<TargetModel>) {
//##__$$         console.log("targets");
//##__$$         console.log(targets); 

        this._targets = targets.map(item => new EditItemModel(item));                    
  }

  get targets () {
    return this._targets.map(editableItem => editableItem.item);;
  }
  


  constructor(private _targetsService: TargetService) { }



  addTarget2Target() {
    console.error('==> BTN addTarget2Target ');
    this.aTargetIsOnEditMode = true;  //Para indicar si hay algun target en Edicion

    //console.log('==> dos BTN addTarget2Target ');

    let newTarget = new TargetModel();
    console.error("OJO this.taskId="+this.taskId);
    newTarget.taskId = this.taskId;
    let newEditItem = new EditItemModel(newTarget);
    newEditItem.editing = true;

    this._targets.push(newEditItem);

  }




  onSaved (editItem: EditItemModel<TargetModel>, updatedTarget: TargetModel) {
    console.warn('==> targetList onSaved (editItem - target)');


    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedTarget; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> targetList onSaved (CREATE - target)'); 
        this._targetsService
            .create(updatedTarget)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aTargetIsOnEditMode = false;  //Para indicar si hay algun target en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedTarget;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aTargetIsOnEditMode = true;  //Para indicar si hay algun target en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> targetList onSaved (UPDATE - target)'); 
        this._targetsService
            .update(updatedTarget)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aTargetIsOnEditMode = false;  //Para indicar si hay algun target en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedTarget;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aTargetIsOnEditMode = true;  //Para indicar si hay algun target en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<TargetModel>) {
    console.warn('==> targetList onCanceled');
        editItem.editing = false;
        // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
        if( this.isLocal(editItem) ) {
          this._targets = this._targets.filter(target => target !== editItem);  //remueve el editItem en cuestion  
        }

        this.aTargetIsOnEditMode = false;  //Para indicar si hay algun target en Edicion  
  }


  isLocal(editItem: EditItemModel<TargetModel>): boolean {
    console.warn('==> targetList isLocal');
    return ( ! editItem.item.id );
  }


}

