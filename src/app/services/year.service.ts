
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { YearModel } from '../models/year';


@Injectable()
export class YearService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'years';
  private yearsUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/years';  // URL to web api

  constructor(private http: Http) { }

  getYears(): Promise<YearModel[]> {
    console.log("getYears");
    return this.http.get(this.yearsUrl)
               .toPromise()
               //.then(response => response.json().data as YearModel[])
              .then(response => response.json() as YearModel[])
               .catch(this.handleError);
  }

  getYear(id: number): Promise<YearModel> {
    const url = `${this.yearsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as YearModel)
      .then(response => response.json() as YearModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.yearsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(year: YearModel): Promise<YearModel> {

    let yearPayLoad = {
      name: year.name     
    }

    return this.http
      .post(this.yearsUrl, JSON.stringify(yearPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<YearModel> {
        return this.http
          .post(this.yearsUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(year: YearModel): Promise<YearModel> {
    const url = `${this.yearsUrl}/${year.id}`;
    return this.http
      .put(url, JSON.stringify(year), {headers: this.headers})
      .toPromise()
      .then(() => year)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[year-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
