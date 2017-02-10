
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PlanTypeModel } from '../models/planType';


@Injectable()
export class PlanTypeService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'planTypes2';
  private planTypesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/planTypes';  // URL to web api

  constructor(private http: Http) { }

  getPlanTypes(): Promise<PlanTypeModel[]> {
    console.log("getPlanTypes");
    return this.http.get(this.planTypesUrl)
               .toPromise()
               //.then(response => response.json().data as PlanTypeModel[])
              .then(response => response.json() as PlanTypeModel[])
               .catch(this.handleError);
  }

  getPlanType(id: number): Promise<PlanTypeModel> {
    const url = `${this.planTypesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as PlanTypeModel)
      .then(response => response.json() as PlanTypeModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.planTypesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(planType: PlanTypeModel): Promise<PlanTypeModel> {

    let planTypePayLoad = {
      name: planType.name,
      description: planType.description
    }

    return this.http
      .post(this.planTypesUrl, JSON.stringify(planTypePayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<PlanTypeModel> {
        return this.http
          .post(this.planTypesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(planType: PlanTypeModel): Promise<PlanTypeModel> {
    const url = `${this.planTypesUrl}/${planType.id}`;
    return this.http
      .put(url, JSON.stringify(planType), {headers: this.headers})
      .toPromise()
      .then(() => planType)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[planType-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))
  //MOCK SERVICE
    mockPlanTypes: Array<PlanTypeModel> = [
      { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia'},
      { id: '2', name: 'Peru', description: 'descri-ofi-Peru'},
      { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil'},
    ];

    getAllMockPlanTypes () {
      return this.mockPlanTypes;
    }
  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))  

}
