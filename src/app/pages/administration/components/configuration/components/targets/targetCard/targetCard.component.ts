import { Component, Input } from '@angular/core';

import { TargetModel } from '../../../../../../../models/target';


@Component({
  selector: 'target-card',
  template: require('./targetCard.html')
})
export class TargetCardComponent {
  @Input() target: TargetModel;
}

