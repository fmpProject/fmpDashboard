import { Component, Input } from '@angular/core';

import { PlanTypeModel } from '../../../../../../../models/planType';


@Component({
  selector: 'planType-card',
  template: require('./planTypeCard.html')
})
export class PlanTypeCardComponent {
  @Input() planType: PlanTypeModel;
}

