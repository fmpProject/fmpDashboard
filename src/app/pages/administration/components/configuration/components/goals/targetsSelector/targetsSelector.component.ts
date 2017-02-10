
              import { Component, Input } from '@angular/core';


    import {TreeNode} from 'primeng/primeng';


// webpack html imports
let template = require('./targetsSelector.html');

@Component({
  selector: 'targets-selector',
  template
})
export class TargetsSelectorComponent {


//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
    nodeSelect(event) {
        //event.node = selected node
        console.warn("SEL nodeSelect");

        console.warn("SEL event.node");
        console.warn(event.node);
        console.warn("SEL this.selectedTargetsTreeNodes");
        console.warn(this.selectedTargetsTreeNodes);

    }

    nodeUnselect(event) {
        //event.node = selected node
        console.warn("UnSEL nodeUnselect");

        console.warn("UnSEL event.node");
        console.warn(event.node);
        console.warn("UnSEL this.selectedTargetsTreeNodes");
        console.warn(this.selectedTargetsTreeNodes);

    }    
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))



//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
        _defTargetsTreeNodes: TreeNode[];

        @Input()
        set defTargetsTreeNodes (defTargetsTreeNodes: TreeNode[]) {
              this._defTargetsTreeNodes = defTargetsTreeNodes;               
//##__$$              console.log("this._defTargetsTreeNodes");
//##__$$              console.log(this._defTargetsTreeNodes);
        }

        get defTargetsTreeNodes () {
          return this._defTargetsTreeNodes;//.map(editableItem => editableItem.item);
        }        
          //@Input() defTargetsTreeNodes: TreeNode[];
            //files777: TreeNode[];
          selectedTargetsTreeNodes: TreeNode[];
            //selectedFiles777: TreeNode[];
//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))  




  // @Input('dropdownItems') items:Array<any>;


@Input() goalId:string;        



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

private _TEZTselectedTargetsTreeNodes: TreeNode[];

        private _defTargsGoalsArray:any = [];

        @Input()
        set defTargsGoalsArray (defTargsGoalsArray:Array<any>) {
//##__$$              console.log("===>>> defTargsGoalsArray");
//##__$$              console.log(defTargsGoalsArray);
              
              this._defTargsGoalsArray = defTargsGoalsArray
                .filter(targets_goals => targets_goals.goalId === this.goalId );

//##__$$              console.log("===>>> this._defTargsGoalsArray");
//##__$$              console.log(this._defTargsGoalsArray);

              //this._defTargsGoalsArray = items.map(item => new EditItemModel(item));                    

/*
        return items.filter(item => {
            for (let field in conditions) {
                if (item[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
*/        

//##__$$  console.error("===>>> INICIO a TEZT_bbb");
//##__$$  console.error(this.defTargetsTreeNodes);
//##__$$  console.error("===>>> INICIO b TEZT_bbb");
//##__$$  console.error(this._defTargetsTreeNodes);

let TEZT_bbb = this.defTargetsTreeNodes.filter(TEZT_Cat_trgt222 => {
    for (let TEZT_Mbf_trgt222 in TEZT_Cat_trgt222.children) {

//##__$$                                                                                                            console.error("===>>> ini AQUI_TOY");
                                                                                                            
//##__$$                                                                                                            console.warn("===>>> TEZT_Cat_trgt222.children[TEZT_Mbf_trgt222].data");
//##__$$                                                                                                            console.warn(TEZT_Cat_trgt222.children[TEZT_Mbf_trgt222].data);

//##__$$                                                                                                            console.warn("===>>> TEZT_Cat_trgt222.children[TEZT_Mbf_trgt222].data.id");
//##__$$                                                                                                            console.warn(TEZT_Cat_trgt222.children[TEZT_Mbf_trgt222].data.id); 

//##__$$                                                                                                            console.error("===>>> fin AQUI_TOY");   

        if ( TEZT_Cat_trgt222.children[TEZT_Mbf_trgt222].data.id !== "1" ) {
            console.error("===>>> REMOVER remove QUITAR  --> id=" + TEZT_Cat_trgt222.children[TEZT_Mbf_trgt222].data.id); 

            return false;
        }
    }
    return true;
});

//##__$$  console.error("===>>> FINAL TEZT_bbb");
//##__$$  console.error(TEZT_bbb);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
/*
          let TEZT_aaa = this.defTargetsTreeNodes
            .filter( (TEZT_Cat_trgt: TreeNode) => {

console.warn("===>>> TEZT_Cat_trgt");
console.warn(TEZT_Cat_trgt);

              let TEZT_include_Cat = false;
              TEZT_Cat_trgt.children
                .filter( (TEZT_Mbf_trgt: TreeNode) => {

console.warn("===>>> TEZT_Mbf_trgt");
console.warn(TEZT_Mbf_trgt);

                  let TEZT_include_Mbf = false;
                  TEZT_Mbf_trgt.children
                    .filter( (TEZT_Task_trgt: TreeNode) => {

console.warn("===>>> TEZT_Task_trgt");
console.warn(TEZT_Task_trgt);

                      let TEZT_include_Task = false;
                      TEZT_Task_trgt.children
                        .filter( (TEZT_Target_trgt: TreeNode) => {

console.warn("===>>> TEZT_Target_trgt");
console.warn(TEZT_Target_trgt);


                          let TEZT_include_Target = true;
                            //let TEZT_include_Target = false;

                          //------------------
                          //------------------
                          //------------------
                                
                                // TEZT_Target_trgt.data.taskId

                                console.error("===>>> ini AQUI_TOY");

                                console.warn("===>>> TEZT_Target_trgt.data.taskId");
                                console.warn(TEZT_Target_trgt.data.taskId); 

                                console.warn("===>>> TEZT_Target_trgt.data");
                                console.warn(TEZT_Target_trgt.data);

                                console.error("===>>> fin AQUI_TOY");                           
                          //------------------
                          //------------------
                          //------------------
                              // TEZT_Target_trgt.children
                              //   .filter( (TEZT_Target_trgt: TreeNode) => {

                              //     TEZT_Target_trgt.children
                              //         //TEZT_Target_trgt.goalId === this.goalId

                              //   });


                          return TEZT_include_Target;    



                        });                                          
                      return TEZT_include_Task;                  
                    });                    
                  return TEZT_include_Mbf;                  
                });
              return TEZT_include_Cat;              
            });

console.error("===>>> TEZT_aaa");
console.error(TEZT_aaa);
*/

// this._defTargetsTreeNodes.filter(targets_goals => targets_goals.goalId === this.goalId );


        }

        get defTargsGoalsArray () {
          return this._defTargsGoalsArray;//.map(editableItem => editableItem.item);
        }
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// private _targets_goals:any = [];

//         @Input()
//         set targets_goals (targets_goals:Array<any>) {
//               console.log("targets_goals");
//               console.log(targets_goals);
              
//               this._targets_goals = targets_goals.filter(goals_target => goals_target.goalId === this.goalId );
//                 //## this._targets_goals = targets_goals.filter(goals_target => goals_target.id === this.goalId );
//                   //## this._targets_goals = targets_goals.filter(goals_target => goals_target.goalId === this.goalId );

//               console.log("this._targets_goals");
//               console.log(this._targets_goals);

//               //this._targets_goals = items.map(item => new EditItemModel(item));                    
//         }

//         get targets_goals () {
//           return this._targets_goals;//.map(editableItem => editableItem.item);
//         }
    


          // ngOnInit() {
          //     console.log("this.defTargetsTreeNodes");
          //     console.log(this.defTargetsTreeNodes);            
          // }


}
