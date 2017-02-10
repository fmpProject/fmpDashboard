
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RestoreService } from '../../../../../../../services/restore.service';
import { CategoryModel } from '../../../../../../../models/category';


@Component({
  selector: 'category-editor',
  template: require('./categoryEditor.html'),
  providers: [RestoreService]
})

export class CategoryEditorComponent {
  @Output() canceled = new EventEmitter<CategoryModel>();
  @Output() saved = new EventEmitter<CategoryModel>();

  constructor(private _restoreService: RestoreService<CategoryModel>) {}


  @Input()
  set category (category: CategoryModel) {
    this._restoreService.setItem(category);
  }

  get category () {
    return this._restoreService.getItem();
  }

  onSaved () {
    this.saved.emit(this._restoreService.getItem());
  }

  onCanceled () {
    this.category = this._restoreService.restoreItem();
    this.canceled.emit(this.category);
  }
}

