import { Component, OnInit, Input } from '@angular/core';

    // import { MbfService } from '../../../../../../services/mbf.service';
    import { MbfModel } from '../../../../../../models/mbf';

import { SharedMbfsCategoryService } from '../../../../../../services/shared-mbfs-category.service';

@Component({
  selector: 'mbfs-category',
  template: require('./mbfs.html')
})
export class MbfsCategoryComponent implements OnInit {

  @Input() categoryId:string;


//(((((((((((((((((((((())))))))))))))))))))))
//(((((((((((((((((((((())))))))))))))))))))))

  mbfs: Array<MbfModel>;

  constructor(private _sharedMbfsCategoryService: SharedMbfsCategoryService) { }

  ngOnInit() {

    console.log("\t" + "ngOnInit MbfsCategoryComponent (filtering Mbfs for this Category["+this.categoryId+"] )");

    this.mbfs = this._sharedMbfsCategoryService.sharedMbfArray.filter(mbf => mbf.categoryId === this.categoryId );

  }
//(((((((((((((((((((((())))))))))))))))))))))
//(((((((((((((((((((((())))))))))))))))))))))



//-------------
//-------------
  // mbfs: Array<MbfModel>;

  // constructor(private _mbfsService: MbfService) { }

  // ngOnInit() {
  //   this.mbfs = [];

  //   this._mbfsService
  //       .getMbfs()
  //       .then((data) => {
  //         //console.log("---> Mbfs data");
  //         //console.log(data);

  //           //this.mbfs.filter(tarjet => tarjet.item.id <= "3");
  //           //this._mbfs = this._mbfs.filter(mbf => mbf !== editItem);  //remueve el editItem en cuestion  

  //   //this.mbfs = data.filter(mbf => mbf.id !== this.categoryId);  //remueve el editItem en cuestion  

  //         //console.log("---> 11 this.mbfs data  this.categoryId="+this.categoryId);
  //         //console.log(this.mbfs);
  //       this.mbfs = data.filter(mbf => mbf.categoryId === this.categoryId );
  //         //console.log("---> 22 this.mbfs data");
  //         //console.log(this.mbfs);


  //           //%% this.mbfs = data.map(item => new EditItemModel(item));
  //       });
  // }
//-------------
//-------------



/*
  onMbfSaved( mbfSaved: MbfModel ) {
    console.warn('--> RECIBIO MbfsComponent onMbfSaved');
  }
*/



/**
 * ESTE es el PARENT de toda la lista, solamente obtiene una lista de TARJETS y la pasa al hijo: ListaMbfsEditable
 * 
 * El hijo simplemente recibira la lista y interactuara con esa lista a su gusto sin decirle nada al Parent respecto a la lista.
 * 
 * Es decir: El Hijo es, ListaMbfsEditable. El Padre simplemente le manda al hijo la Lista al Hijo 
 * y Muestra lo que sea que tenga el Hijo.
 *  Asi que el Hijo, crea su lista Local y es lo que le muestra al Padre.
 * El hijo Internamente, tiene Metodos para Modificar la Lista que recibe como @Input, usando Get/Set en conjunto a sus Metodos internos,
 *   Dichos Metodos simplemente Agregan, Actualizan o Borran elementos de su Lista Local y el Parent no hace nada, simplemente renderiza al hijo.
 * Es decir El Hijo(ListaMbfsEditable) internamente no accede a servicios, sino solo a su lista Local.
 * - Dicha Lista solo puede ser alterada por Events emitidos por sus hijos.
 * 
 * Por otra parte:
 *  -Ese Hijo (ListaMbfsEditable), debe tener El BOTON de AGREGAR NUEVO,
 *    A su vez debe tener Metodos para detectar si alguno de sus Hijos Internos esta en EDICION, para saber si puede Agregar OTRO Nuevo
 * 
 */


}

