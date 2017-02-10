
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TargetModel } from '../models/target';


@Injectable()
export class NewTargetService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'targets';
  private targetsUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/targets';  // URL to web api

  constructor(private http: Http) { }
 
  getTargets(): Promise<TargetModel[]> {
    console.log("<<=_-_=>> " + "getTargets [NewTargetService]");
    return this.http.get(this.targetsUrl)
               .toPromise()
               //.then(response => response.json().data as TargetModel[])
              .then(response => response.json() as TargetModel[])
               .catch(this.handleError);
  }

  // getTarget(id: number): Promise<TargetModel> {
  //   const url = `${this.targetsUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     //.then(response => response.json().data as TargetModel)
  //     .then(response => response.json() as TargetModel)
  //     .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.targetsUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  // create(target: TargetModel): Promise<TargetModel> {

  //   let targetPayLoad = {
  //     name: target.name,
  //     description: target.description,
  //     taskId: target.taskId,      
  //   }

  //   return this.http
  //     .post(this.targetsUrl, JSON.stringify(targetPayLoad), {headers: this.headers})
  //     .toPromise()
  //     //.then(res => res.json().data)
  //     .then(res => res.json())
  //     .catch(this.handleError);
  // }
      
  //     // create(name: string): Promise<TargetModel> {
  //     //   return this.http
  //     //     .post(this.targetsUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     //     .toPromise()
  //     //     //.then(res => res.json().data)
  //     //     .then(res => res.json())
  //     //     .catch(this.handleError);
  //     // }
      

  // update(target: TargetModel): Promise<TargetModel> {
  //   const url = `${this.targetsUrl}/${target.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(target), {headers: this.headers})
  //     .toPromise()
  //     .then(() => target)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('[new-target-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
