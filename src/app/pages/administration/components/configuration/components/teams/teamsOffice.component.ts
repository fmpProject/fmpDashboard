import { Component, OnInit, Input } from '@angular/core';

    import { TeamService } from '../../../../../../services/team.service';
    import { TeamModel } from '../../../../../../models/team';

@Component({
  selector: 'teams-office',
  template: require('./teams.html')
})
export class TeamsOfficeComponent implements OnInit {

  @Input() officeId:string;



  teams: Array<TeamModel>;

  constructor(private _teamsService: TeamService) { }

  ngOnInit() {
    this.teams = [];

    this._teamsService
        .getTeams()
        .then((data) => {
          //console.log("---> Teams data");
          //console.log(data);

            //this.teams.filter(tarjet => tarjet.item.id <= "3");
            //this._teams = this._teams.filter(team => team !== editItem);  //remueve el editItem en cuestion  

    //this.teams = data.filter(team => team.id !== this.officeId);  //remueve el editItem en cuestion  

          //console.log("---> 11 this.teams data  this.officeId="+this.officeId);
          //console.log(this.teams);
        this.teams = data.filter(team => team.officeId === this.officeId );
          //console.log("---> 22 this.teams data");
          //console.log(this.teams);


            //%% this.teams = data.map(item => new EditItemModel(item));
        });
  }

/*
  onTeamSaved( teamSaved: TeamModel ) {
    console.warn('--> RECIBIO TeamsComponent onTeamSaved');
  }
*/



/**
 * ESTE es el PARENT de toda la lista, solamente obtiene una lista de TARJETS y la pasa al hijo: ListaTeamsEditable
 * 
 * El hijo simplemente recibira la lista y interactuara con esa lista a su gusto sin decirle nada al Parent respecto a la lista.
 * 
 * Es decir: El Hijo es, ListaTeamsEditable. El Padre simplemente le manda al hijo la Lista al Hijo 
 * y Muestra lo que sea que tenga el Hijo.
 *  Asi que el Hijo, crea su lista Local y es lo que le muestra al Padre.
 * El hijo Internamente, tiene Metodos para Modificar la Lista que recibe como @Input, usando Get/Set en conjunto a sus Metodos internos,
 *   Dichos Metodos simplemente Agregan, Actualizan o Borran elementos de su Lista Local y el Parent no hace nada, simplemente renderiza al hijo.
 * Es decir El Hijo(ListaTeamsEditable) internamente no accede a servicios, sino solo a su lista Local.
 * - Dicha Lista solo puede ser alterada por Events emitidos por sus hijos.
 * 
 * Por otra parte:
 *  -Ese Hijo (ListaTeamsEditable), debe tener El BOTON de AGREGAR NUEVO,
 *    A su vez debe tener Metodos para detectar si alguno de sus Hijos Internos esta en EDICION, para saber si puede Agregar OTRO Nuevo
 * 
 */


}

