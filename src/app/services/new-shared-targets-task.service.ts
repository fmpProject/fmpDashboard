
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { TargetModel } from '../models/target';

  import { NewTargetService } from './new-target.service';


@Injectable()
export class NewSharedTargetsTaskService {

  newSharedTargetArray: TargetModel[];


  constructor(private _newTargetService: NewTargetService) {}


  fetchNewSharedTargetArray(): TargetModel[] {

    // console.log("$$$ -->> " + "[TARGETS] INI(si hay:DEVUELVE, si no hay:CONSULTA) fetchNewSharedTargetArray");
    
    if (!this.newSharedTargetArray) {

      console.log("$$$ -->> " + "[TARGETS] IF(aun no hay) fetchNewSharedTargetArray");

      this._newTargetService
          .getTargets()
          .then((data) => {
            this.newSharedTargetArray = data;
          });
              //this.newSharedTargetArray = this._newTargetService.getTargets();      
    }else{
      console.log("$$$ -->> " + "[TARGETS] ELSE(ya habia) fetchNewSharedTargetArray");
    }

    return this.newSharedTargetArray;
  }


// uuuAAA_cachedTargets4Task: TargetModel[];

//   uuuAAA_fetch_CachedTargets4Task(taskId2Find: string): TargetModel[] {

//     console.warn("$$$ -->> " + "INI this.fetchNewSharedTargetArray()");
//     console.warn(this.fetchNewSharedTargetArray());
//     console.warn("$$$ -->> " + "FIN this.fetchNewSharedTargetArray()");


//     this.uuuAAA_cachedTargets4Task = this.newSharedTargetArray;
//       // this.uuuAAA_cachedTargets4Task = this.fetchNewSharedTargetArray().filter(sharedTarget => sharedTarget.taskId === taskId2Find );
//         //let uuuAAA_cachedTargets4Task: TargetModel[] = this.fetchNewSharedTargetArray().filter(sharedTarget => sharedTarget.taskId === taskId2Find );

//     console.log("$$$ -->> " + "uuuAAA_fetch_CachedTargets4Task");
//     return this.uuuAAA_cachedTargets4Task;
//   }




            // fetch_CachedTargets4Task(taskId2Find: string): TargetModel[] {
            //   let cachedTargets4Task: TargetModel[] = this.fetchNewSharedTargetArray().filter(sharedTarget => sharedTarget.taskId === taskId2Find );
            //       //this.targets = data.filter(target => target.taskId === this.taskId );
            //             // if (!this.newSharedTargetArray) {
            //             //   this._newTargetService
            //             //       .getTargets()
            //             //       .then((data) => {
            //             //         this.newSharedTargetArray = data;
            //             //       });
            //             //           //this.newSharedTargetArray = this._newTargetService.getTargets();      
            //             // }
            //             // return this.newSharedTargetArray;
            //   console.log("$$$ -->> " + "fetch_CachedTargets4Task");
            //   return cachedTargets4Task;
            // }



}



    // @Injectable()
    // export class HeroCacheService {
    //   hero: Hero;
    //   constructor(private heroService: HeroService) {}
    //   fetchCachedHero(id: number) {
    //     if (!this.hero) {
    //       this.hero = this.heroService.getHeroById(id);
    //     }
    //     return this.hero;
    //   }
    // }



          // @Injectable()
          // export class NewTargetService {
          //   private headers = new Headers({'Content-Type': 'application/json'});

          //   private baseUrl = 'http://587c175506972c1200b215a5.mockapi.io/fmpdashboard/restful/v1';   // private baseUrl = 'http://583e26dc95d29812004e445c.mockapi.io/nuevorest/v1';
          //   private endpointUrl = 'new-targets';
          //   private targetsUrl = `${this.baseUrl}/${this.endpointUrl}`; //'api/targets';  // URL to web api

          //   constructor(private http: Http) { }

          //   getTargets(): Promise<TargetModel[]> {
          //     console.log("getTargets");
          //     return this.http.get(this.targetsUrl)
          //                .toPromise()
          //                //.then(response => response.json().data as TargetModel[])
          //               .then(response => response.json() as TargetModel[])
          //                .catch(this.handleError);
          //   }

          //   // getTarget(id: number): Promise<TargetModel> {
          //   //   const url = `${this.targetsUrl}/${id}`;
          //   //   return this.http.get(url)
          //   //     .toPromise()
          //   //     //.then(response => response.json().data as TargetModel)
          //   //     .then(response => response.json() as TargetModel)
          //   //     .catch(this.handleError);
          //   // }

          //   // delete(id: number): Promise<void> {
          //   //   const url = `${this.targetsUrl}/${id}`;
          //   //   return this.http.delete(url, {headers: this.headers})
          //   //     .toPromise()
          //   //     .then(() => null)
          //   //     .catch(this.handleError);
          //   // }

          //   // create(target: TargetModel): Promise<TargetModel> {

          //   //   let targetPayLoad = {
          //   //     name: target.name,
          //   //     description: target.description
          //   //   }

          //   //   return this.http
          //   //     .post(this.targetsUrl, JSON.stringify(targetPayLoad), {headers: this.headers})
          //   //     .toPromise()
          //   //     //.then(res => res.json().data)
          //   //     .then(res => res.json())
          //   //     .catch(this.handleError);
          //   // }
          //   //     // create(name: string): Promise<TargetModel> {
          //   //     //   return this.http
          //   //     //     .post(this.targetsUrl, JSON.stringify({name: name}), {headers: this.headers})
          //   //     //     .toPromise()
          //   //     //     //.then(res => res.json().data)
          //   //     //     .then(res => res.json())
          //   //     //     .catch(this.handleError);
          //   //     // }
                

          //   // update(target: TargetModel): Promise<TargetModel> {
          //   //   const url = `${this.targetsUrl}/${target.id}`;
          //   //   return this.http
          //   //     .put(url, JSON.stringify(target), {headers: this.headers})
          //   //     .toPromise()
          //   //     .then(() => target)
          //   //     .catch(this.handleError);
          //   // }

          //   private handleError(error: any): Promise<any> {
          //     console.error('[target-service] An error occurred', error); // for demo purposes only
          //     return Promise.reject(error.message || error);
          //   }

          // }
