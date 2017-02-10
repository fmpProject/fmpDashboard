
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TarGolModel } from '../models/tarGol';


@Injectable()
export class TarGolService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'tarGoles2';
  private tarGolesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/tarGoles';  // URL to web api

  constructor(private http: Http) { }

  getTarGoles(): Promise<TarGolModel[]> {
    console.log("getTarGoles");
    return this.http.get(this.tarGolesUrl)
               .toPromise()
               //.then(response => response.json().data as TarGolModel[])
              .then(response => response.json() as TarGolModel[])
               .catch(this.handleError);
  }

  getTarGol(id: number): Promise<TarGolModel> {
    const url = `${this.tarGolesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as TarGolModel)
      .then(response => response.json() as TarGolModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.tarGolesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(tarGol: TarGolModel): Promise<TarGolModel> {

    let tarGolPayLoad = {
      name: tarGol.name,
      description: tarGol.description,
      goalId: tarGol.goalId,
      targetId: tarGol.targetId         
    }

    return this.http
      .post(this.tarGolesUrl, JSON.stringify(tarGolPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<TarGolModel> {
        return this.http
          .post(this.tarGolesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(tarGol: TarGolModel): Promise<TarGolModel> {
    const url = `${this.tarGolesUrl}/${tarGol.id}`;
    return this.http
      .put(url, JSON.stringify(tarGol), {headers: this.headers})
      .toPromise()
      .then(() => tarGol)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[tarGol-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))
  //MOCK SERVICE
    mockTarGoles: Array<TarGolModel> = [
      { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia', goalId: '1', targetId: '1'},
      { id: '2', name: 'Peru', description: 'descri-ofi-Peru', goalId: '1', targetId: '2'},
      { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil', goalId: '2', targetId: '3'},
    ];

    getAllMockTarGoles () {
      return this.mockTarGoles;
    }
  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))  

}
