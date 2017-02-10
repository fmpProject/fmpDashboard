import { Component, OnInit, Input } from '@angular/core';

    import { UserService } from '../../../../../../services/user.service';
    import { UserModel } from '../../../../../../models/user';

@Component({
  selector: 'users-team',
  template: require('./users.html')
})
export class UsersTeamComponent implements OnInit {

  @Input() teamId:string;



  users: Array<UserModel>;

  constructor(private _usersService: UserService) { }

  ngOnInit() {
    this.users = [];

    this._usersService
        .getUsers()
        .then((data) => {
          //console.log("---> Users data");
          //console.log(data);

            //this.users.filter(tarjet => tarjet.item.id <= "3");
            //this._users = this._users.filter(user => user !== editItem);  //remueve el editItem en cuestion  

    //this.users = data.filter(user => user.id !== this.teamId);  //remueve el editItem en cuestion  

          //console.log("---> 11 this.users data  this.teamId="+this.teamId);
          //console.log(this.users);
        this.users = data.filter(user => user.teamId === this.teamId );
          //console.log("---> 22 this.users data");
          //console.log(this.users);


            //%% this.users = data.map(item => new EditItemModel(item));
        });
  }

/*
  onUserSaved( userSaved: UserModel ) {
    console.warn('--> RECIBIO UsersComponent onUserSaved');
  }
*/



/**
 * ESTE es el PARENT de toda la lista, solamente obtiene una lista de TARJETS y la pasa al hijo: ListaUsersEditable
 * 
 * El hijo simplemente recibira la lista y interactuara con esa lista a su gusto sin decirle nada al Parent respecto a la lista.
 * 
 * Es decir: El Hijo es, ListaUsersEditable. El Padre simplemente le manda al hijo la Lista al Hijo 
 * y Muestra lo que sea que tenga el Hijo.
 *  Asi que el Hijo, crea su lista Local y es lo que le muestra al Padre.
 * El hijo Internamente, tiene Metodos para Modificar la Lista que recibe como @Input, usando Get/Set en conjunto a sus Metodos internos,
 *   Dichos Metodos simplemente Agregan, Actualizan o Borran elementos de su Lista Local y el Parent no hace nada, simplemente renderiza al hijo.
 * Es decir El Hijo(ListaUsersEditable) internamente no accede a servicios, sino solo a su lista Local.
 * - Dicha Lista solo puede ser alterada por Events emitidos por sus hijos.
 * 
 * Por otra parte:
 *  -Ese Hijo (ListaUsersEditable), debe tener El BOTON de AGREGAR NUEVO,
 *    A su vez debe tener Metodos para detectar si alguno de sus Hijos Internos esta en EDICION, para saber si puede Agregar OTRO Nuevo
 * 
 */


}

