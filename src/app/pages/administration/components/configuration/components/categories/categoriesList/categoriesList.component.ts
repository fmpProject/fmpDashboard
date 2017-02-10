import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EditItemModel } from '../../../../../../../models/edit-item';

    import { CategoryService } from '../../../../../../../services/category.service';

import { CategoryModel } from '../../../../../../../models/category';


@Component({
  selector: 'categories-list',
  template: require('./categoriesList.html')
})

export class CategoriesListComponent {

  _categories: Array<EditItemModel<CategoryModel>>;

  private aCategoryIsOnEditMode: boolean = false;



  @Input()
  set categories (categories: Array<CategoryModel>) {
        //console.log("categories");
        //console.log(categories);
        this._categories = categories.map(item => new EditItemModel(item));                    
  }

  get categories () {
    return this._categories.map(editableItem => editableItem.item);;
  }
                      



  constructor(private _categoriesService: CategoryService) { }



  addCategory2Category() {
    console.error('==> BTN addCategory2Category ');
    this.aCategoryIsOnEditMode = true;  //Para indicar si hay algun category en Edicion

    //console.log('==> BTN addCategory2Category ');

    let newCategory = new CategoryModel();
    let newEditItem = new EditItemModel(newCategory);
    newEditItem.editing = true;

    this._categories.push(newEditItem);
  }




  onSaved (editItem: EditItemModel<CategoryModel>, updatedCategory: CategoryModel) {
    console.warn('==> categoryList onSaved (editItem - category)');

    console.error('==> NOTA!, test para que no permita guardar varias veces');
      editItem.editing = false; //%% OJO: test para que no permita guardar varias veces
      // editItem.item = updatedCategory; // editItem.editing = false;  

    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia Crearlo
    if( this.isLocal(editItem) ) {  
      console.warn('==> categoryList onSaved (CREATE - category)'); 
        this._categoriesService
            .create(updatedCategory)
            .then((data) => {
              //console.log("===>>> create data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aCategoryIsOnEditMode = false;  //Para indicar si hay algun category en Edicion
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO CREAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedCategory;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces
                  
                  // this.aCategoryIsOnEditMode = true;  //Para indicar si hay algun category en Edicion
            });
    } else { // Si este Item SI tiene ID, significa que SI esta en la DB, por lo tanto se deberia Actualizarlo
      console.warn('==> categoryList onSaved (UPDATE - category)'); 
        this._categoriesService
            .update(updatedCategory)
            .then((data) => {
              //console.log("===>>> update data");
              //console.log(data);
                      editItem.item = data;
                      editItem.editing = false;

                      this.aCategoryIsOnEditMode = false;  //Para indicar si hay algun category en Edicion             
            })
            .catch((e) => {
              console.error("===>>> NO LOGRO ACTUALIZAR !!!! ");
              console.error("===>>> reject: " + e);
                  // editItem.item = updatedCategory;
                  // editItem.editing = false;
                  editItem.editing = true; //%% OJO: test para que no permita guardar varias veces

                  // this.aCategoryIsOnEditMode = true;  //Para indicar si hay algun category en Edicion
            });
    }
  }


  onCanceled (editItem: EditItemModel<CategoryModel>) {
    console.warn('==> categoryList onCanceled');

    editItem.editing = false;
    // Si este Item no tiene ID, significa que no esta en la DB, por lo tanto se deberia remover al Cancelar la Edicion
    if( this.isLocal(editItem) ) {
      this._categories = this._categories.filter(category => category !== editItem);  //remueve el editItem en cuestion  
    }

    this.aCategoryIsOnEditMode = false;  //Para indicar si hay algun category en Edicion  
  }


  isLocal(editItem: EditItemModel<CategoryModel>): boolean {
    console.warn('==> categoryList isLocal');
    return ( ! editItem.item.id );
  }


}

