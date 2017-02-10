
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { TeamModel } from '../../../../../../../models/team';


@Component({
  selector: 'team-editor',
  template: require('./teamEditor.html'),
  providers: [RestoreService]
})

export class TeamEditorComponent {
  @Output() canceled = new EventEmitter<TeamModel>();
  @Output() saved = new EventEmitter<TeamModel>();

  constructor(private _restoreService: RestoreService<TeamModel>) {}


  @Input()
  set team (team: TeamModel) {
    this._restoreService.setItem(team);
  }

  get team () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.team = this._restoreService.restoreItem();
    this.canceled.emit(this.team);
  }
}

