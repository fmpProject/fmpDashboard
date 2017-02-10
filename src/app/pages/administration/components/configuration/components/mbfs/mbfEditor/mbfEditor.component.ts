
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { MbfModel } from '../../../../../../../models/mbf';


@Component({
  selector: 'mbf-editor',
  template: require('./mbfEditor.html'),
  providers: [RestoreService]
})

export class MbfEditorComponent {
  @Output() canceled = new EventEmitter<MbfModel>();
  @Output() saved = new EventEmitter<MbfModel>();

  constructor(private _restoreService: RestoreService<MbfModel>) {}


  @Input()
  set mbf (mbf: MbfModel) {
    this._restoreService.setItem(mbf);
  }

  get mbf () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.mbf = this._restoreService.restoreItem();
    this.canceled.emit(this.mbf);
  }
}

