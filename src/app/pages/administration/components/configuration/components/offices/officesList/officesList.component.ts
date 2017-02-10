import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { OfficeService } from '../../../../../../../services/office.service';

import { OfficeModel } from '../../../../../../../models/office';


//     //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//     //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// //import {MenuModule,MenuItem} from 'primeng/primeng';
//   //import {MenuModule} from 'primeng/primeng';
//   import {MenuItem} from 'primeng/primeng';
// import {Message} from 'primeng/primeng';
// //import {GrowlModule} from 'primeng/primeng';
//     //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//     //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

@Component({
  selector: 'offices-list',
  template: require('./officesList.html')
})

export class OfficesListComponent {

    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // msgs: Message[] = [];
    
    // items: MenuItem[];
    
    // ngOnInit() {
    //     this.items = [
    //         {label: 'Update', icon: 'fa-refresh', command: () => {
    //             this.update();
    //         }},
    //         {label: 'Delete', icon: 'fa-close', command: () => {
    //             this.delete();
    //         }},
    //         // {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
    //         // {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
    //     ];
    // }

    // save() {
    //     this.msgs = [];
    //     this.msgs.push({severity:'info', summary:'Success', detail:'Data Saved'});
    // }
    
    // update() {
    //     this.msgs = [];
    //     this.msgs.push({severity:'info', summary:'Success', detail:'Data Updated'});
    // }
    
    // delete() {
    //     this.msgs = [];
    //     this.msgs.push({severity:'info', summary:'Success', detail:'Data Deleted'});
    // }

    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  _offices: Array<EditItemModel<OfficeModel>>;

  private aOfficeIsOnEditMode: boolean = false;



  @Input()
  set offices (offices: Array<OfficeModel>) {
        //console.log("offices");
        //console.log(offices);
        this._offices = offices.map(item => new EditItemModel(item));                    
  }

  get offices () {
    return this._offices.map(editableItem => editableItem.item);;
  }
                      



  constructor(private _officesService: OfficeService) { }



  addOffice2Office() {
    console.error('==> BTN addOffice2Office ');
    this.aOfficeIsOnEditMode = true;  //Para indicar si hay algun office en Edicion

    //console.log('==> BTN addOffice2Office ');

    let newOffice = new OfficeModel();
    let newEditItem = new EditItemModel(newOffice);
    newEditItem.editing = true;

    this._offices.push(newEditItem);
  }




  onSaved (editItem: EditItemModel<OfficeModel>, updatedOffice: OfficeModel) {
    console.warn('==> officeList onSaved (editItem - office)');

    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedOffice; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> officeList onSaved (CREATE - office)'); 
        this._officesService
            .create(updatedOffice)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aOfficeIsOnEditMode = false;  //Para indicar si hay algun office en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedOffice;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aOfficeIsOnEditMode = true;  //Para indicar si hay algun office en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> officeList onSaved (UPDATE - office)'); 
        this._officesService
            .update(updatedOffice)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aOfficeIsOnEditMode = false;  //Para indicar si hay algun office en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedOffice;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aOfficeIsOnEditMode = true;  //Para indicar si hay algun office en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<OfficeModel>) {
    console.warn('==> officeList onCanceled');

    editItem.editing = false;
    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
    if( this.isLocal(editItem) ) {
      this._offices = this._offices.filter(office => office !== editItem);  //remueve el editItem en cuestion  
    }

    this.aOfficeIsOnEditMode = false;  //Para indicar si hay algun office en Edicion  
  }


  isLocal(editItem: EditItemModel<OfficeModel>): boolean {
    console.warn('==> officeList isLocal');
    return ( ! editItem.item.id );
  }


}

