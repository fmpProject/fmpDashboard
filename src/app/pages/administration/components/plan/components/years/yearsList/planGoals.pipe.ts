
import { Pipe, PipeTransform } from '@angular/core';


//import { EditItemModel } from '../../../../../../../models/edit-item';

  import { GolesPlamModel } from '../../../../../../../models/golesPlam';
    import { GoalModel } from '../../../../../../../models/goal';
import { PlanModel } from '../../../../../../../models/plan';

@Pipe({
    name: 'planGoals'
})
export class PlanGoalsPipe implements PipeTransform {


  transform(misPlanGoals: Array<GolesPlamModel>, plan: PlanModel, goals: GoalModel[] ) {  ///  ///OJO deberia ser...  misPlanGoals:GolesPlamModel[], plan:PlanModel

    let self = this;
    
    if(!misPlanGoals || !plan || !goals) {
      console.error("--->> PIPE aun no ha obtenido: (misPlanGoals ó plan ó goals)");
      return null;
    }

    //let newPlamGoles: GolesPlamModel[] =
    let newPlamGoles: any[] = 
      misPlanGoals
        .filter(plamGoal => plamGoal.plamId === plan.id )
        .map(
          function(updatedPlamGoal) {  

            let miGolcito : any = updatedPlamGoal;
            // console.log(miGolcito);     

                  
            miGolcito.indexGoal = self.convert2Roman( parseInt(updatedPlamGoal.indexGoal) )

                  // switch(updatedPlamGoal.indexGoal){
                  //   case "1":
                  //     miGolcito.indexGoal="I-rom";
                  //   break;
                  //   case "2":
                  //     miGolcito.indexGoal="II-rom";
                  //   break;
                  //   default:
                  //     miGolcito.indexGoal="??-rom";
                  //   break;        
                  // }

            miGolcito.golcito = 
              goals
                .filter(miGol => miGol.id === updatedPlamGoal.goalId )
                  [0];


            // console.warn("updatedPlamGoal");
            // console.warn(updatedPlamGoal);

            // console.warn("miGolcito");
            // console.warn(miGolcito);

            return miGolcito;
          }
        );  

        // var nuevoPlamGoles: any[] = [];
        // nuevoPlamGoles = 
        // newPlamGoles
        //   .map(function(updatedPlamGoal) {  
        //          console.log(updatedPlamGoal);     
        //     switch(updatedPlamGoal.indexGoal){
        //       case "1":
        //         updatedPlamGoal.indexGoal="I-rom";
        //       break;
        //       case "2":
        //         updatedPlamGoal.indexGoal="II-rom";
        //       break;
        //       default:
        //         updatedPlamGoal.indexGoal="??-rom";
        //       break;        
        //     }
        //     console.warn(updatedPlamGoal);
        //     return updatedPlamGoal;
        //   });        

        //   return nuevoPlamGoles;

    return newPlamGoles;
  }



 convert2Roman(num: number): string {

  // Create arrays with default conversion with matching indices.
  var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  // Create a copy of num to work on and an empty string variable for the final roman number
  var numCopy = num;
  var romanized = '';

  // While the decimal number is greater than 0,
  while (numCopy > 0) {
    // Loop through the indices of the decimalValue array.
    for (var index = 0; index < decimalValue.length; index++) {
      // Get the maximum decimal number less or equal then the decimal number.
      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        // Add the Roman numeral & decrease numCopy by the decimal equivalent.
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }
    }
  }

  return romanized;
};


}
