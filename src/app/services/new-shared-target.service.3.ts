
import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { TargetModel } from '../models/target';

  import { NewTargetService } from './new-target.service';


@Injectable()
export class NewSharedTargetService {

  newSharedTargetArray: TargetModel[];


  constructor(private _newTargetService: NewTargetService) {}

/**
 * Al iniciar el app, deberia:
 * -inyectar el servicio SharedTargets,
 *  - este tiene un constructor, que solicita los targets al servicio HTTP ya
 *  - los guarda en una variable publica del servicio
 * 
 * Mas adelante en el app, consulto la variable de ese servicio y la almaceno en una variable del componente (por ejemplo task-list, consulta todos los target[shared])
 * 
 */

  fetchNewSharedTargetArray(): TargetModel[] {

    console.log("$$$ -->> " + "INI(si hay:DEVUELVE, si no hay:CONSULTA) fetchNewSharedTargetArray");
    
    if (!this.newSharedTargetArray) {

      console.log("$$$ -->> " + "IF(aun no hay) fetchNewSharedTargetArray");

      this._newTargetService
          .getTargets()
          .then((data) => {
            this.newSharedTargetArray = data;
          });
              //this.newSharedTargetArray = this._newTargetService.getTargets();      
    }else{
      console.log("$$$ -->> " + "ELSE(ya habia) fetchNewSharedTargetArray");
    }

    return this.newSharedTargetArray;
  }




}

