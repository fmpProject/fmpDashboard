
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { GoalModel } from '../../../../../../../models/goal';


@Component({
  selector: 'goal-editor',
  template: require('./goalEditor.html'),
  providers: [RestoreService]
})

export class GoalEditorComponent {
  @Output() canceled = new EventEmitter<GoalModel>();
  @Output() saved = new EventEmitter<GoalModel>();

  constructor(private _restoreService: RestoreService<GoalModel>) {}


  @Input()
  set goal (goal: GoalModel) {
    this._restoreService.setItem(goal);
  }

  get goal () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.goal = this._restoreService.restoreItem();
    this.canceled.emit(this.goal);
  }
}

