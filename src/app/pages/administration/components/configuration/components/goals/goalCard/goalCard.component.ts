import { Component, Input } from '@angular/core';

import { GoalModel } from '../../../../../../../models/goal';


@Component({
  selector: 'goal-card',
  template: require('./goalCard.html')
})
export class GoalCardComponent {
  @Input() goal: GoalModel;
}

