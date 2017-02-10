import { Component, Input } from '@angular/core';

import { MbfModel } from '../../../../../../../models/mbf';


@Component({
  selector: 'mbf-card',
  template: require('./mbfCard.html')
})
export class MbfCardComponent {
  @Input() mbf: MbfModel;
}

