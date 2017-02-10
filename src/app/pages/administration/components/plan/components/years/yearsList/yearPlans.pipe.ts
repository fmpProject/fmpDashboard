
import { Pipe, PipeTransform } from '@angular/core';


//import { EditItemModel } from '../../../../../../../models/edit-item';
import { PlanModel } from '../../../../../../../models/plan';
import { YearModel } from '../../../../../../../models/year';

@Pipe({
    name: 'yearPlans'
})
export class YearPlansPipe implements PipeTransform {
  transform(misPlans: Array<PlanModel>, year: YearModel) {  ///  ///OJO deberia ser...  misPlans:PlanModel[], year:YearModel

    if(!misPlans || !year) {
      console.error("--->> PIPE aun no ha obtenido: (misPlans ó year)");
      return null;
    }

    return misPlans.filter(plan => plan.yearId === year.id );
  }
}
