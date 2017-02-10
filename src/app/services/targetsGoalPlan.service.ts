
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TargetsGoalPlanModel } from '../models/targetsGoalPlan';


@Injectable()
export class TargetsGoalPlanService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'targetsGoalPlan';
  private targetsGoalPlanUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/targetsGoalPlan';  // URL to web api

  constructor(private http: Http) { }

  getTargetsGoalPlan(): Promise<TargetsGoalPlanModel[]> {
    console.log("getTargetsGoalPlan");
    return this.http.get(this.targetsGoalPlanUrl)
               .toPromise()
               //.then(response => response.json().data as TargetsGoalPlanModel[])
              .then(response => response.json() as TargetsGoalPlanModel[])
               .catch(this.handleError);
  }

  getTargetGoalPlan(id: number): Promise<TargetsGoalPlanModel> {
    const url = `${this.targetsGoalPlanUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as TargetsGoalPlanModel)
      .then(response => response.json() as TargetsGoalPlanModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.targetsGoalPlanUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(targetsGoalPlan: TargetsGoalPlanModel): Promise<TargetsGoalPlanModel> {

    let targetsGoalPlanPayLoad = {
      name: targetsGoalPlan.name,
      golPlanId: targetsGoalPlan.golPlanId,
      targetId: targetsGoalPlan.targetId,
      globalTarget: targetsGoalPlan.globalTarget
    }

    return this.http
      .post(this.targetsGoalPlanUrl, JSON.stringify(targetsGoalPlanPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<TargetsGoalPlanModel> {
        return this.http
          .post(this.targetsGoalPlanUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(targetsGoalPlan: TargetsGoalPlanModel): Promise<TargetsGoalPlanModel> {
    const url = `${this.targetsGoalPlanUrl}/${targetsGoalPlan.id}`;
    return this.http
      .put(url, JSON.stringify(targetsGoalPlan), {headers: this.headers})
      .toPromise()
      .then(() => targetsGoalPlan)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[targetsGoalPlan-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
