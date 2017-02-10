
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GolesPlamModel } from '../models/golesPlam';


@Injectable()
export class GolesPlamService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'golesPlam';
  private golesPlamUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/golesPlam';  // URL to web api

  constructor(private http: Http) { }

  getGolesPlam(): Promise<GolesPlamModel[]> {
    console.log("getGolesPlam");
    return this.http.get(this.golesPlamUrl)
               .toPromise()
               //.then(response => response.json().data as GolesPlamModel[])
              .then(response => response.json() as GolesPlamModel[])
               .catch(this.handleError);
  }

  getGolPlam(id: number): Promise<GolesPlamModel> {
    const url = `${this.golesPlamUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as GolesPlamModel)
      .then(response => response.json() as GolesPlamModel)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.golesPlamUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
    // delete(id: number): Promise<void> {
    //   const url = `${this.golesPlamUrl}/${id}`;
    //   return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }  

  create(golesPlam: GolesPlamModel): Promise<GolesPlamModel> {

    let golesPlamPayLoad = {
      name: golesPlam.name,
      description: golesPlam.description,
      plamId: golesPlam.plamId,
      goalId: golesPlam.goalId,
      indexGoal: golesPlam.indexGoal
    }

    return this.http
      .post(this.golesPlamUrl, JSON.stringify(golesPlamPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<GolesPlamModel> {
        return this.http
          .post(this.golesPlamUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(golesPlam: GolesPlamModel): Promise<GolesPlamModel> {
    const url = `${this.golesPlamUrl}/${golesPlam.id}`;
    return this.http
      .put(url, JSON.stringify(golesPlam), {headers: this.headers})
      .toPromise()
      .then(() => golesPlam)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[golesPlam-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
