import { Component, OnInit, Input } from '@angular/core';

    import { UserService } from '../../../../../../services/user.service';
    import { UserModel } from '../../../../../../models/user';

@Component({
  selector: 'users-team-new',
  template: require('./usersNew.html')
})
export class UsersTeamNewComponent implements OnInit {

  @Input() teamId:string;



  users: Array<UserModel>;

  constructor(private _usersService: UserService) { }

  ngOnInit() {
    this.users = [];

    this._usersService
        .getUsers()
        .then((data) => {
          this.users = data.filter(user => user.teamId === this.teamId );
        });
  }


}

