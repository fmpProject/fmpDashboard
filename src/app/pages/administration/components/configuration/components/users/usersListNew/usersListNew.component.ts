import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { UserService } from '../../../../../../../services/user.service';

import { UserModel } from '../../../../../../../models/user';


@Component({
  selector: 'userz-list-new',
  template: require('./usersListNew.html')
})

export class UsersListNewComponent {

  _users: Array<EditItemModel<UserModel>>;

  private aUserIsOnEditMode: boolean = false;



  @Input() teamId:string;
                  
  @Input()
  set users (users: Array<UserModel>) {
        //console.log("users");
        //console.log(users);

        this._users = users.map(item => new EditItemModel(item));                    
  }

  get users () {
    return this._users.map(editableItem => editableItem.item);;
  }
  


  constructor(private _usersService: UserService) { }



  addUser2User() {
    console.error('==> BTN addUser2User ');
    this.aUserIsOnEditMode = true;  //Para indicar si hay algun user en Edicion

    //console.log('==> dos BTN addUser2User ');

    let newUser = new UserModel();
    console.error("OJO this.teamId="+this.teamId);
    newUser.teamId = this.teamId;
    let newEditItem = new EditItemModel(newUser);
    newEditItem.editing = true;

    this._users.push(newEditItem);

  }




  onSaved (editItem: EditItemModel<UserModel>, updatedUser: UserModel) {
    console.warn('==> userList onSaved (editItem - user)');


    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedUser; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> userList onSaved (CREATE - user)'); 
        this._usersService
            .create(updatedUser)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aUserIsOnEditMode = false;  //Para indicar si hay algun user en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedUser;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aUserIsOnEditMode = true;  //Para indicar si hay algun user en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> userList onSaved (UPDATE - user)'); 
        this._usersService
            .update(updatedUser)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aUserIsOnEditMode = false;  //Para indicar si hay algun user en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedUser;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aUserIsOnEditMode = true;  //Para indicar si hay algun user en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<UserModel>) {
    console.warn('==> userList onCanceled');
        editItem.editing = false;
        // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
        if( this.isLocal(editItem) ) {
          this._users = this._users.filter(user => user !== editItem);  //remueve el editItem en cuestion  
        }

        this.aUserIsOnEditMode = false;  //Para indicar si hay algun user en Edicion  
  }


  isLocal(editItem: EditItemModel<UserModel>): boolean {
    console.warn('==> userList isLocal');
    return ( ! editItem.item.id );
  }


}

