import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { TeamService } from '../../../../../../../services/team.service';

import { TeamModel } from '../../../../../../../models/team';


@Component({
  selector: 'teamz-list',
  template: require('./teamsList.html')
})

export class TeamsListComponent {

  _teams: Array<EditItemModel<TeamModel>>;

  private aTeamIsOnEditMode: boolean = false;



  @Input() officeId:string;
                  
  @Input()
  set teams (teams: Array<TeamModel>) {
        //console.log("teams");
        //console.log(teams);

        this._teams = teams.map(item => new EditItemModel(item));                    
  }

  get teams () {
    return this._teams.map(editableItem => editableItem.item);;
  }
  


  constructor(private _teamsService: TeamService) { }



  addTeam2Team() {
    console.error('==> BTN addTeam2Team ');
    this.aTeamIsOnEditMode = true;  //Para indicar si hay algun team en Edicion

    //console.log('==> dos BTN addTeam2Team ');

    let newTeam = new TeamModel();
    console.error("OJO this.officeId="+this.officeId);
    newTeam.officeId = this.officeId;
    let newEditItem = new EditItemModel(newTeam);
    newEditItem.editing = true;

    this._teams.push(newEditItem);

  }




  onSaved (editItem: EditItemModel<TeamModel>, updatedTeam: TeamModel) {
    console.warn('==> teamList onSaved (editItem - team)');


    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedTeam; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> teamList onSaved (CREATE - team)'); 
        this._teamsService
            .create(updatedTeam)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aTeamIsOnEditMode = false;  //Para indicar si hay algun team en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedTeam;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aTeamIsOnEditMode = true;  //Para indicar si hay algun team en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> teamList onSaved (UPDATE - team)'); 
        this._teamsService
            .update(updatedTeam)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aTeamIsOnEditMode = false;  //Para indicar si hay algun team en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedTeam;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aTeamIsOnEditMode = true;  //Para indicar si hay algun team en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<TeamModel>) {
    console.warn('==> teamList onCanceled');
        editItem.editing = false;
        // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
        if( this.isLocal(editItem) ) {
          this._teams = this._teams.filter(team => team !== editItem);  //remueve el editItem en cuestion  
        }

        this.aTeamIsOnEditMode = false;  //Para indicar si hay algun team en Edicion  
  }


  isLocal(editItem: EditItemModel<TeamModel>): boolean {
    console.warn('==> teamList isLocal');
    return ( ! editItem.item.id );
  }


}

