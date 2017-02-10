import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { MbfService } from '../../../../../../../services/mbf.service';

import { MbfModel } from '../../../../../../../models/mbf';


@Component({
  selector: 'mbfz-list',
  template: require('./mbfsList.html')
})

export class MbfsListComponent {

  _mbfs: Array<EditItemModel<MbfModel>>;

  private aMbfIsOnEditMode: boolean = false;



  @Input() categoryId:string;
                  
  @Input()
  set mbfs (mbfs: Array<MbfModel>) {
        //console.log("mbfs");
        //console.log(mbfs);

        this._mbfs = mbfs.map(item => new EditItemModel(item));                    
  }

  get mbfs () {
    return this._mbfs.map(editableItem => editableItem.item);;
  }
  


  constructor(private _mbfsService: MbfService) { }



  addMbf2Mbf() {
    console.error('==> BTN addMbf2Mbf ');
    this.aMbfIsOnEditMode = true;  //Para indicar si hay algun mbf en Edicion

    //console.log('==> dos BTN addMbf2Mbf ');

    let newMbf = new MbfModel();
    console.error("OJO this.categoryId="+this.categoryId);
    newMbf.categoryId = this.categoryId;
    let newEditItem = new EditItemModel(newMbf);
    newEditItem.editing = true;

    this._mbfs.push(newEditItem);

  }




  onSaved (editItem: EditItemModel<MbfModel>, updatedMbf: MbfModel) {
    console.warn('==> mbfList onSaved (editItem - mbf)');


    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedMbf; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> mbfList onSaved (CREATE - mbf)'); 
        this._mbfsService
            .create(updatedMbf)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aMbfIsOnEditMode = false;  //Para indicar si hay algun mbf en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedMbf;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aMbfIsOnEditMode = true;  //Para indicar si hay algun mbf en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> mbfList onSaved (UPDATE - mbf)'); 
        this._mbfsService
            .update(updatedMbf)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aMbfIsOnEditMode = false;  //Para indicar si hay algun mbf en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedMbf;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aMbfIsOnEditMode = true;  //Para indicar si hay algun mbf en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<MbfModel>) {
    console.warn('==> mbfList onCanceled');
        editItem.editing = false;
        // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
        if( this.isLocal(editItem) ) {
          this._mbfs = this._mbfs.filter(mbf => mbf !== editItem);  //remueve el editItem en cuestion  
        }

        this.aMbfIsOnEditMode = false;  //Para indicar si hay algun mbf en Edicion  
  }


  isLocal(editItem: EditItemModel<MbfModel>): boolean {
    console.warn('==> mbfList isLocal');
    return ( ! editItem.item.id );
  }


}

