
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TeamModel } from '../models/team';


@Injectable()
export class TeamService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'teams';
  private teamsUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/teams';  // URL to web api

  constructor(private http: Http) { }

  getTeams(): Promise<TeamModel[]> {
    console.log("getTeams");
    return this.http.get(this.teamsUrl)
               .toPromise()
               //.then(response => response.json().data as TeamModel[])
              .then(response => response.json() as TeamModel[])
               .catch(this.handleError);
  }

  getTeam(id: number): Promise<TeamModel> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as TeamModel)
      .then(response => response.json() as TeamModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(team: TeamModel): Promise<TeamModel> {

    let teamPayLoad = {
      name: team.name,
      description: team.description,
      officeId: team.officeId,
      teamTypeId: team.teamTypeId
    }

    return this.http
      .post(this.teamsUrl, JSON.stringify(teamPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<TeamModel> {
        return this.http
          .post(this.teamsUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(team: TeamModel): Promise<TeamModel> {
    const url = `${this.teamsUrl}/${team.id}`;
    return this.http
      .put(url, JSON.stringify(team), {headers: this.headers})
      .toPromise()
      .then(() => team)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[team-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
