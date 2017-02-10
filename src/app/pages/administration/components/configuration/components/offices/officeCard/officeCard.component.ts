import { Component, Input } from '@angular/core';

import { OfficeModel } from '../../../../../../../models/office';


@Component({
  selector: 'office-card',
  template: require('./officeCard.html')
})
export class OfficeCardComponent {
  @Input() office: OfficeModel;
}

