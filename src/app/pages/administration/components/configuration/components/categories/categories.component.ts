import { Component, OnInit } from '@angular/core';

    import { CategoryService } from '../../../../../../services/category.service';
    import { CategoryModel } from '../../../../../../models/category';



@Component({
  selector: 'categoryzz-component',
  template: require('./categories.html')
})
export class CategoriesComponent implements OnInit {

  categories: Array<CategoryModel>;



  constructor(private _categoriesService: CategoryService) { }

  ngOnInit() {
    this.categories = [];

    this._categoriesService
        .getCategories()
        .then((data) => {
          //console.log("data");
          //console.log(data);
          this.categories = data;
            //%% this.categories = data.map(item => new EditItemModel(item));
        });

  }


}

