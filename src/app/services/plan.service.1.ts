
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PlanModel } from '../models/plan';


@Injectable()
export class PlanService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'planes2';
  private planesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/planes';  // URL to web api

  constructor(private http: Http) { }

  getPlanes(): Promise<PlanModel[]> {
    console.log("getPlanes");
    return this.http.get(this.planesUrl)
               .toPromise()
               //.then(response => response.json().data as PlanModel[])
              .then(response => response.json() as PlanModel[])
               .catch(this.handleError);
  }

  getPlan(id: number): Promise<PlanModel> {
    const url = `${this.planesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as PlanModel)
      .then(response => response.json() as PlanModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.planesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(plan: PlanModel): Promise<PlanModel> {

    let planPayLoad = {
      name: plan.name,
      description: plan.description,
      yearId: plan.yearId
//      year: plan.year,      
    }

    return this.http
      .post(this.planesUrl, JSON.stringify(planPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<PlanModel> {
        return this.http
          .post(this.planesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(plan: PlanModel): Promise<PlanModel> {
    const url = `${this.planesUrl}/${plan.id}`;
    return this.http
      .put(url, JSON.stringify(plan), {headers: this.headers})
      .toPromise()
      .then(() => plan)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[plan-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))
  //MOCK SERVICE
    mockPlanes: Array<PlanModel> = [
      { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia', yearId:'1'},
      { id: '2', name: 'Peru', description: 'descri-ofi-Peru', yearId:'1'},
      { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil', yearId:'2'},
      // { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia', year:'1'},
      // { id: '2', name: 'Peru', description: 'descri-ofi-Peru', year:'1'},
      // { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil', year:'2'},      
    ];

    getAllMockPlanes () {
      return this.mockPlanes;
    }
  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))  

}
