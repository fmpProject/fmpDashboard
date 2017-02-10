
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { MbfModel } from '../models/mbf';


@Injectable()
export class MbfService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'mbfs';
  private mbfsUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/mbfs';  // URL to web api

  constructor(private http: Http) { }

  getMbfs(): Promise<MbfModel[]> {
    console.log("<<=_-_=>> " + "getMbfs [MbfService]");
    return this.http.get(this.mbfsUrl)
               .toPromise()
               //.then(response => response.json().data as MbfModel[])
              .then(response => response.json() as MbfModel[])
               .catch(this.handleError);
  }

  getMbf(id: number): Promise<MbfModel> {
    const url = `${this.mbfsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as MbfModel)
      .then(response => response.json() as MbfModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.mbfsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(mbf: MbfModel): Promise<MbfModel> {

    let mbfPayLoad = {
      name: mbf.name,
      description: mbf.description,
      categoryId: mbf.categoryId
    }

    return this.http
      .post(this.mbfsUrl, JSON.stringify(mbfPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<MbfModel> {
        return this.http
          .post(this.mbfsUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(mbf: MbfModel): Promise<MbfModel> {
    const url = `${this.mbfsUrl}/${mbf.id}`;
    return this.http
      .put(url, JSON.stringify(mbf), {headers: this.headers})
      .toPromise()
      .then(() => mbf)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[mbf-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
