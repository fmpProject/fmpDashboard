import { Component, OnInit } from '@angular/core';

    import { TeamService } from '../../../../../../services/team.service';
    import { TeamModel } from '../../../../../../models/team';

@Component({
  selector: 'teamzz-component',
  template: require('./teams.html')
})
export class TeamsComponent implements OnInit {

  teams: Array<TeamModel>;

  constructor(private _teamsService: TeamService) { }

  ngOnInit() {
    this.teams = [];

    this._teamsService
        .getTeams()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.teams = data;
            //%% this.teams = data.map(item => new EditItemModel(item));
        });
  }

}

