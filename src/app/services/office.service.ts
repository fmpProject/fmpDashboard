
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { OfficeModel } from '../models/office';


@Injectable()
export class OfficeService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'offices';
  private officesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/offices';  // URL to web api

  constructor(private http: Http) { }

  getOffices(): Promise<OfficeModel[]> {
    console.log("<<=_-_=>> " + "getOffices [OfficeService]");
    return this.http.get(this.officesUrl)
               .toPromise()
               //.then(response => response.json().data as OfficeModel[])
              .then(response => response.json() as OfficeModel[])
               .catch(this.handleError);
  }

  getOffice(id: number): Promise<OfficeModel> {
    const url = `${this.officesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as OfficeModel)
      .then(response => response.json() as OfficeModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.officesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(office: OfficeModel): Promise<OfficeModel> {

    let officePayLoad = {
      name: office.name,
      description: office.description
    }

    return this.http
      .post(this.officesUrl, JSON.stringify(officePayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<OfficeModel> {
        return this.http
          .post(this.officesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(office: OfficeModel): Promise<OfficeModel> {
    const url = `${this.officesUrl}/${office.id}`;
    return this.http
      .put(url, JSON.stringify(office), {headers: this.headers})
      .toPromise()
      .then(() => office)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[office-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




}
