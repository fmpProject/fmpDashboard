
import { Pipe, PipeTransform } from '@angular/core';


//import { EditItemModel } from '../../../../../../../models/edit-item';

  import { TargetsGoalPlanModel } from '../../../../../../../models/targetsGoalPlan';
    //import { GoalModel } from '../../../../../../../models/goal';
//import { PlanModel } from '../../../../../../../models/plan';
      import { TargetModel } from '../../../../../../../models/target';

@Pipe({
    name: 'targetsGoalPlan'
})
export class TargetsGoalPlanPipe implements PipeTransform {

  //transform(misTargetsGoalPlan: Array<TargetsGoalPlanModel>, plan: PlanModel, goals: GoalModel[] ) {  ///  ///OJO deberia ser...  misTargetsGoalPlan:TargetsGoalPlanModel[], plan:PlanModel
  transform(misTargetsGoalPlan: Array<TargetsGoalPlanModel>, goalPlan: any, targets: TargetModel[] ) {  ///  ///OJO deberia ser...  misTargetsGoalPlan:TargetsGoalPlanModel[], plan:PlanModel

    let self = this;
    
    if(!misTargetsGoalPlan || !goalPlan || !targets) {
      console.error("--->> PIPE aun no ha obtenido: (misTargetsGoalPlan ó goalPlan ó targets)");
      return null;
    }    
      // if(!misTargetsGoalPlan || !goalPlan) {
      //   console.error("--->> PIPE aun no ha obtenido: (misTargetsGoalPlan ó goalPlan ó goals)");
      //   return null;
      // }
          //if(!misTargetsGoalPlan || !plan || !goals) {



    //let newTargetsGoalPlan: TargetsGoalPlanModel[] =
    let newTargetsGoalPlan: any[] = 
      misTargetsGoalPlan
        .filter(targetGoalPlan => targetGoalPlan.golPlanId === goalPlan.id )
        .map(
          function(updatedTargetGoalPlan) {  

            let miTargetGoalPlan : any = updatedTargetGoalPlan;
            // console.log(miTargetGoalPlan);     

                  
            //miTargetGoalPlan.indexGoal = self.convert2Roman( parseInt(updatedTargetGoalPlan.indexGoal) )


            miTargetGoalPlan.target = 
              targets
                .filter(miTarget => miTarget.id === updatedTargetGoalPlan.targetId )
                  [0];

            // console.error("targets")
            // console.error(targets)

            // console.error("miTargetGoalPlan.target")
            // console.error(miTargetGoalPlan.target)            


            return miTargetGoalPlan;
          }
        );  

                // let newTargetsGoalPlan = 
                //       misTargetsGoalPlan
                //         //.filter(targetGoalPlan => targetGoalPlan.plamId === plan.id )
                //         .filter(targetGoalPlan => targetGoalPlan.golPlanId === goalPlan.id )

                //     // //let newTargetsGoalPlan: TargetsGoalPlanModel[] =
                //     // let newTargetsGoalPlan: any[] = 
                //     //   misTargetsGoalPlan
                //     //     .filter(targetGoalPlan => targetGoalPlan.plamId === plan.id )
                //     //     .map(
                //     //       function(updatedTargetGoalPlan) {  

                //     //         let miTargetGoalPlan : any = updatedTargetGoalPlan;
                //     //         // console.log(miTargetGoalPlan);     

                                  
                //     //         //miTargetGoalPlan.indexGoal = self.convert2Roman( parseInt(updatedTargetGoalPlan.indexGoal) )


                //     //         miTargetGoalPlan.target = 
                //     //           goals
                //     //             .filter(miTarget => miTarget.id === updatedTargetGoalPlan.targetId )
                //     //               [0];


                //     //         return miTargetGoalPlan;
                //     //       }
                //     //     );  

    return newTargetsGoalPlan;
  }




}
