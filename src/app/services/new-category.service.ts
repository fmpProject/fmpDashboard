
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CategoryModel } from '../models/category';


@Injectable()
export class NewCategoryService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'new-categories';
  private categoriesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/categories';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Promise<CategoryModel[]> {
    console.log("getCategories");
    return this.http.get(this.categoriesUrl)
               .toPromise()
               //.then(response => response.json().data as CategoryModel[])
              .then(response => response.json() as CategoryModel[])
               .catch(this.handleError);
  }

  // getCategory(id: number): Promise<CategoryModel> {
  //   const url = `${this.categoriesUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     //.then(response => response.json().data as CategoryModel)
  //     .then(response => response.json() as CategoryModel)
  //     .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.categoriesUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  // create(category: CategoryModel): Promise<CategoryModel> {

  //   let categoryPayLoad = {
  //     name: category.name,
  //     description: category.description
  //   }

  //   return this.http
  //     .post(this.categoriesUrl, JSON.stringify(categoryPayLoad), {headers: this.headers})
  //     .toPromise()
  //     //.then(res => res.json().data)
  //     .then(res => res.json())
  //     .catch(this.handleError);
  // }
  //     // create(name: string): Promise<CategoryModel> {
  //     //   return this.http
  //     //     .post(this.categoriesUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     //     .toPromise()
  //     //     //.then(res => res.json().data)
  //     //     .then(res => res.json())
  //     //     .catch(this.handleError);
  //     // }
      

  // update(category: CategoryModel): Promise<CategoryModel> {
  //   const url = `${this.categoriesUrl}/${category.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(category), {headers: this.headers})
  //     .toPromise()
  //     .then(() => category)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('[new-category-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


 

}
