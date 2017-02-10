
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GoalModel } from '../models/goal';


@Injectable()
export class GoalService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'goals';
  private goalsUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/goals';  // URL to web api

  constructor(private http: Http) { }

  getGoals(): Promise<GoalModel[]> {
    console.log("<<=_-_=>> " + "getGoals [GoalService]");
    return this.http.get(this.goalsUrl)
               .toPromise()
               //.then(response => response.json().data as GoalModel[])
              .then(response => response.json() as GoalModel[])
               .catch(this.handleError);
  }

  getGoal(id: number): Promise<GoalModel> {
    const url = `${this.goalsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as GoalModel)
      .then(response => response.json() as GoalModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.goalsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(goal: GoalModel): Promise<GoalModel> {

    let goalPayLoad = {
      name: goal.name,
      description: goal.description
    }

    return this.http
      .post(this.goalsUrl, JSON.stringify(goalPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<GoalModel> {
        return this.http
          .post(this.goalsUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(goal: GoalModel): Promise<GoalModel> {
    const url = `${this.goalsUrl}/${goal.id}`;
    return this.http
      .put(url, JSON.stringify(goal), {headers: this.headers})
      .toPromise()
      .then(() => goal)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[goal-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))
  //MOCK SERVICE
    mockGoals: Array<GoalModel> = [
      { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia'},
      { id: '2', name: 'Peru', description: 'descri-ofi-Peru'},
      { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil'},
    ];

    getAllMockGoals () {
      return this.mockGoals;
    }
  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))  

}
