
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserModel } from '../models/user';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'users';
  private usersUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<UserModel[]> {
    console.log("getUsers");
    return this.http.get(this.usersUrl)
               .toPromise()
               //.then(response => response.json().data as UserModel[])
              .then(response => response.json() as UserModel[])
               .catch(this.handleError);
  }

  getUser(id: number): Promise<UserModel> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as UserModel)
      .then(response => response.json() as UserModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(user: UserModel): Promise<UserModel> {

    let userPayLoad = {
      name: user.name,
      description: user.description,
      teamId: user.teamId,
    }

    return this.http
      .post(this.usersUrl, JSON.stringify(userPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<UserModel> {
        return this.http
          .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(user: UserModel): Promise<UserModel> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[user-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))
  //MOCK SERVICE
    mockUsers: Array<UserModel> = [
      { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia', teamId: '1'},
      { id: '2', name: 'Peru', description: 'descri-ofi-Peru', teamId: '1'},
      { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil', teamId: '2'},
    ];

    getAllMockUsers () {
      return this.mockUsers;
    }
  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))  

}
