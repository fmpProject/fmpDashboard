import { Component, Input } from '@angular/core';

import { UserModel } from '../../../../../../../models/user';


@Component({
  selector: 'user-card',
  template: require('./userCard.html')
})
export class UserCardComponent {
  @Input() user: UserModel;
}

