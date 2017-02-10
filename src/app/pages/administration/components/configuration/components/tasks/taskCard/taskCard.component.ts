import { Component, Input } from '@angular/core';

import { TaskModel } from '../../../../../../../models/task';


@Component({
  selector: 'task-card',
  template: require('./taskCard.html')
})
export class TaskCardComponent {
  @Input() task: TaskModel;
}

