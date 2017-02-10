
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { TargetModel } from '../../../../../../../models/target';


@Component({
  selector: 'target-editor',
  template: require('./targetEditor.html'),
  providers: [RestoreService]
})

export class TargetEditorComponent {
  @Output() canceled = new EventEmitter<TargetModel>();
  @Output() saved = new EventEmitter<TargetModel>();

  constructor(private _restoreService: RestoreService<TargetModel>) {}


  @Input()
  set target (target: TargetModel) {
    this._restoreService.setItem(target);
  }

  get target () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.target = this._restoreService.restoreItem();
    this.canceled.emit(this.target);
  }
}

