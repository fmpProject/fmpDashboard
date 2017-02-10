
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { PlanTypeModel } from '../../../../../../../models/planType';


@Component({
  selector: 'planType-editor',
  template: require('./planTypeEditor.html'),
  providers: [RestoreService]
})

export class PlanTypeEditorComponent {
  @Output() canceled = new EventEmitter<PlanTypeModel>();
  @Output() saved = new EventEmitter<PlanTypeModel>();

  constructor(private _restoreService: RestoreService<PlanTypeModel>) {}


  @Input()
  set planType (planType: PlanTypeModel) {
    this._restoreService.setItem(planType);
  }

  get planType () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.planType = this._restoreService.restoreItem();
    this.canceled.emit(this.planType);
  }
}

