import { Component, Input } from '@angular/core';

import { TeamModel } from '../../../../../../../models/team';


@Component({
  selector: 'team-card',
  template: require('./teamCard.html')
})
export class TeamCardComponent {
  @Input() team: TeamModel;
}

