
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { UserModel } from '../../../../../../../models/user';


@Component({
  selector: 'user-editor',
  template: require('./userEditor.html'),
  providers: [RestoreService]
})

export class UserEditorComponent {
  @Output() canceled = new EventEmitter<UserModel>();
  @Output() saved = new EventEmitter<UserModel>();

  constructor(private _restoreService: RestoreService<UserModel>) {}


  @Input()
  set user (user: UserModel) {
    this._restoreService.setItem(user);
  }

  get user () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.user = this._restoreService.restoreItem();
    this.canceled.emit(this.user);
  }
}

