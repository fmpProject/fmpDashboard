
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { OfficeModel } from '../../../../../../../models/office';


@Component({
  selector: 'office-editor',
  template: require('./officeEditor.html'),
  providers: [RestoreService]
})

export class OfficeEditorComponent {
  @Output() canceled = new EventEmitter<OfficeModel>();
  @Output() saved = new EventEmitter<OfficeModel>();

  constructor(private _restoreService: RestoreService<OfficeModel>) {}


  @Input()
  set office (office: OfficeModel) {
    this._restoreService.setItem(office);
  }

  get office () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.office = this._restoreService.restoreItem();
    this.canceled.emit(this.office);
  }
}

