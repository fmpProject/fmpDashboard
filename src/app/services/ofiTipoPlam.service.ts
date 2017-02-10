
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { OfiTipoPlamModel } from '../models/ofiTipoPlam';


@Injectable()
export class OfiTipoPlamService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
  private endpointUrl = 'ofiTipoPlames2';
  private ofiTipoPlamesUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/ofiTipoPlames';  // URL to web api

  constructor(private http: Http) { }

  getOfiTipoPlames(): Promise<OfiTipoPlamModel[]> {
    console.log("getOfiTipoPlames");
    return this.http.get(this.ofiTipoPlamesUrl)
               .toPromise()
               //.then(response => response.json().data as OfiTipoPlamModel[])
              .then(response => response.json() as OfiTipoPlamModel[])
               .catch(this.handleError);
  }

  getOfiTipoPlam(id: number): Promise<OfiTipoPlamModel> {
    const url = `${this.ofiTipoPlamesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      //.then(response => response.json().data as OfiTipoPlamModel)
      .then(response => response.json() as OfiTipoPlamModel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.ofiTipoPlamesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(ofiTipoPlam: OfiTipoPlamModel): Promise<OfiTipoPlamModel> {

    let ofiTipoPlamPayLoad = {
      name: ofiTipoPlam.name,
      description: ofiTipoPlam.description,
      planTypeId: ofiTipoPlam.planTypeId,
      officeId: ofiTipoPlam.officeId         
    }

    return this.http
      .post(this.ofiTipoPlamesUrl, JSON.stringify(ofiTipoPlamPayLoad), {headers: this.headers})
      .toPromise()
      //.then(res => res.json().data)
      .then(res => res.json())
      .catch(this.handleError);
  }
      /*
      create(name: string): Promise<OfiTipoPlamModel> {
        return this.http
          .post(this.ofiTipoPlamesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          //.then(res => res.json().data)
          .then(res => res.json())
          .catch(this.handleError);
      }
      */

  update(ofiTipoPlam: OfiTipoPlamModel): Promise<OfiTipoPlamModel> {
    const url = `${this.ofiTipoPlamesUrl}/${ofiTipoPlam.id}`;
    return this.http
      .put(url, JSON.stringify(ofiTipoPlam), {headers: this.headers})
      .toPromise()
      .then(() => ofiTipoPlam)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('[ofiTipoPlam-service] An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))
  //MOCK SERVICE
    mockOfiTipoPlames: Array<OfiTipoPlamModel> = [
      { id: '1', name: 'Colombia', description: 'descri-ofi-Colombia', planTypeId: '1', officeId: '1'},
      { id: '2', name: 'Peru', description: 'descri-ofi-Peru', planTypeId: '1', officeId: '2'},
      { id: '3', name: 'Brazil', description: 'descri-ofi-Brazil', planTypeId: '2', officeId: '3'},
    ];

    getAllMockOfiTipoPlames () {
      return this.mockOfiTipoPlames;
    }
  //((((((((((((((((((()))))))))))))))))))
  //((((((((((((((((((()))))))))))))))))))  

}
