import { Component, Input } from '@angular/core';

import { CategoryModel } from '../../../../../../../models/category';


@Component({
  selector: 'category-card',
  template: require('./categoryCard.html')
})
export class CategoryCardComponent {
  @Input() category: CategoryModel;
}

