import { Component, OnInit } from '@angular/core';

    import { UserService } from '../../../../../../services/user.service';
    import { UserModel } from '../../../../../../models/user';

@Component({
  selector: 'userzz-component',
  template: require('./users.html')
})
export class UsersComponent implements OnInit {

  users: Array<UserModel>;

  constructor(private _usersService: UserService) { }

  ngOnInit() {
    this.users = [];

    this._usersService
        .getUsers()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.users = data;
            //%% this.users = data.map(item => new EditItemModel(item));
        });
  }

}

