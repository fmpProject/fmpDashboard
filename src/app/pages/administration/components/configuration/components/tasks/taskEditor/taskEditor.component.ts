
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { TaskModel } from '../../../../../../../models/task';


@Component({
  selector: 'task-editor',
  template: require('./taskEditor.html'),
  providers: [RestoreService]
})

export class TaskEditorComponent {
  @Output() canceled = new EventEmitter<TaskModel>();
  @Output() saved = new EventEmitter<TaskModel>();

  constructor(private _restoreService: RestoreService<TaskModel>) {}


  @Input()
  set task (task: TaskModel) {
    this._restoreService.setItem(task);
  }

  get task () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.task = this._restoreService.restoreItem();
    this.canceled.emit(this.task);
  }
}

