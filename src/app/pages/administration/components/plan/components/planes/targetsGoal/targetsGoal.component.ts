
import { Component, Input, OnInit } from '@angular/core';

	import { TargetsGoalPlanModel } from '../../../../../../../models/targetsGoalPlan';

		import { TargetModel } from '../../../../../../../models/target';



import {TreeNode} from 'primeng/primeng';
import { TargTreeNodeService } from '../../../../../../../services/targTreeNode.service';

//        import { TargetsStructureService } from '../../../../../../../services/targetsStructure.service';

import {
  OnChanges,
  SimpleChanges
} from '@angular/core';





@Component({
  selector: 'targets-goal',
  template: require('./targetsGoal.html')
})
export class TargetsGoalComponent implements OnInit, OnChanges {

	@Input() targetsEsteGoal: Array<TargetsGoalPlanModel>;

		@Input() targets: Array<TargetModel>;

@Input() targetsStructure: any;



	selectedFiles: TreeNode[];
	files: TreeNode[];

selectedFiles777: TreeNode[];
files777: TreeNode[];

//        targetsStructure: any;    



  constructor(
    private _targTreeNodeService: TargTreeNodeService
  ) { }
//   constructor(
//     private _targTreeNodeService: TargTreeNodeService,
//     private _targetsStructureService: TargetsStructureService
//   ) { }




  ngOnInit() {

this.files = []; //##__$$ //##__$$ //##__$$ 
//##__$$    this._targTreeNodeService
//##__$$	.getTargetsTree()
//##__$$	.then(targetsTree => this.files = targetsTree);


this.generateTargetsTree_2();

//     this._targetsStructureService
//         .getTargetsStructure()
//         .then(targetsStructure => this.targetsStructure = targetsStructure);        


  }





//((((((((((((((((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]])))))))))))))))))))))))))))))))
//((((((((((((((((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]])))))))))))))))))))))))))))))))
//((((((((((((((((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]])))))))))))))))))))))))))))))))


	targetsStructure_isReady = false;
	targetsEsteGoal_isReady = false;

ngOnChanges(changes: SimpleChanges) {
	console.log("nuevon DETECTO CAMBIOS");

	// let targetsStructure_isReady = false;
	// let targetsEsteGoal_isReady = false;

	for (let propName in changes) {

		if (propName === 'targetsStructure') {
			let changed_targetsStructure = changes['targetsStructure'].currentValue;

			if(changed_targetsStructure) {
				console.log("==>> dummy__ YA EXISTE (targetsStructure)");
				console.log(JSON.stringify(changed_targetsStructure));

				this.targetsStructure_isReady = true;

				// this.files777 = this.generateTargetsTree_1_new();                                                                                        
			}else{
				console.log("==>> dummy__ aun no EXISTE (targetsStructure)");
				console.log(JSON.stringify(changed_targetsStructure));
			}
		}
		else if (propName === 'targetsEsteGoal') {
			let changed_targetsEsteGoal = changes['targetsEsteGoal'].currentValue;

			if(changed_targetsEsteGoal) {
				console.log("==>> dummy__ YA EXISTE (targetsEsteGoal)");
				console.log(JSON.stringify(changed_targetsEsteGoal));

				this.targetsEsteGoal_isReady = true;

				// this.selectedFiles777 = this.deMisTargets_generateTargetsTree_9_new();                                                                                        
			}else{
				console.log("==>> dummy__ aun no EXISTE (targetsEsteGoal)");
				console.log(JSON.stringify(changed_targetsEsteGoal));
			}
		}
		
	}

	if( (this.targetsStructure_isReady) && (this.targetsEsteGoal_isReady) ){
		console.log("==>> dummy__ TEZT AMBOS LISTOS");

			this.files777 = this.generateTargetsTree_1_new(); 
			this.selectedFiles777 = this.deMisTargets_generateTargetsTree_10_new(this.files777);

				// this.selectedFiles777 = this.deMisTargets_generateTargetsTree_9_new(); 			
				// this.files777 = this.selectedFiles777;
				
					//this.selectedFiles777 = this.deMisTargets_generateTargetsTree_9_new(); 
					//this.files777 = this.generateTargetsTree_1_new(); 



	}else{
		console.log("==>> dummy__ TEZT falta alguno:" + " this.targetsStructure_isReady=" + this.targetsStructure_isReady + " this.targetsEsteGoal_isReady=" + this.targetsEsteGoal_isReady );
	}

}

		/*
		ngOnChanges(changes: SimpleChanges) {
			console.log("nuevon DETECTO CAMBIOS");

			for (let propName in changes) {

				if (propName === 'targetsStructure') {
					let changed_targetsStructure = changes['targetsStructure'].currentValue;

					if(changed_targetsStructure) {
						console.log("==>> dummy__ YA EXISTE");
						console.log(JSON.stringify(changed_targetsStructure));

						this.files777 = this.generateTargetsTree_1_new();                                                                                        
					}else{
						console.log("==>> dummy__ aun no EXISTE");
						console.log(JSON.stringify(changed_targetsStructure));
					}
				}
				// else {
				//         changesMsgs.push(propName + ' ' + this.verb);
				// }
				
			}
		}
		*/


				/*
				// private verb = 'initialized';

				ngOnChanges(changes: SimpleChanges) {

					console.log("nuevon DETECTO CAMBIOS");

					// let changesMsgs: string[] = [];
					//         // let indice = 0;
					//         // // let changeLog = [];

					for (let propName in changes) {


						if (propName === 'targetsStructure') {
							let new_targetsStructure = changes['targetsStructure'].currentValue;

									if(new_targetsStructure) {
										console.log("==>> dummy__ YA EXISTE");
										console.log(JSON.stringify(new_targetsStructure));

											this.files777 = this.generateTargetsTree_1_new();

											// if(new_targetsStructure.categories) {
											//         console.log("==>> dummy__ YA TIENE CATEGORIES");
											//         console.log(JSON.stringify(new_targetsStructure));
											// }else{
											//         console.log("==>> dummy__ aun no TIENE CATEGORIES");
											//         console.log(JSON.stringify(new_targetsStructure));
											// }
																	
									}else{
										console.log("==>> dummy__ aun no EXISTE");
										console.log(JSON.stringify(new_targetsStructure));
									}

							//         console.log("NUEVO_CAMBIO == new_targetsStructure==");
							//         console.log(JSON.stringify(new_targetsStructure));

							// changesMsgs.push(`new_targetsStructure ${this.verb} to "${new_targetsStructure}"`);
						}
						// else {
						//         changesMsgs.push(propName + ' ' + this.verb);
						// }


					}
				//     console.log(`OnChanges: ${changesMsgs.join('; ')}`);
				//     this.verb = 'changed'; // next time it will be a change

					// console.log("this.newLogCganges==");
					// console.log(this.newLogCganges);


				}
				*/


						/*
						private verb = 'initialized';

						ngOnChanges(changes: SimpleChanges) {

							console.log("__ --> DETECTO CAMBIOS");

							let changesMsgs: string[] = [];
								// let indice = 0;
								// // let changeLog = [];

							for (let propName in changes) {


								if (propName === 'targetsStructure') {
									let new_targetsStructure = changes['targetsStructure'].currentValue;

										console.log("NUEVO_CAMBIO == new_targetsStructure==");
										console.log(JSON.stringify(new_targetsStructure));

									changesMsgs.push(`new_targetsStructure ${this.verb} to "${new_targetsStructure}"`);
								}
								// else {
								//         changesMsgs.push(propName + ' ' + this.verb);
								// }

										// indice++;

										// let chng = changes[propName];
										// let cur  = JSON.stringify(chng.currentValue);
										// let prev = JSON.stringify(chng.previousValue);

										// this.newLogCganges.push(`${propName} (${indice}): currentValue = ${cur}, previousValue = ${prev}`);

							}
						console.log(`OnChanges: ${changesMsgs.join('; ')}`);
						this.verb = 'changed'; // next time it will be a change

							// console.log("this.newLogCganges==");
							// console.log(this.newLogCganges);


						}
						*/


								/*
								logCambios = [];

								ngOnChanges(changes: SimpleChanges) {

									console.log("__ --> DETECTO CAMBIOS");

									let indice = 0;
									// let changeLog = [];

									for (let propName in changes) {

									indice++;

									let chng = changes[propName];
									let cur  = JSON.stringify(chng.currentValue);
									let prev = JSON.stringify(chng.previousValue);

									//     this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);

									this.logCambios.push(`${propName} (${indice}): currentValue = ${cur}, previousValue = ${prev}`);

									}

									console.log("this.logCambios==");
									console.log(this.logCambios);


								}
								*/




  generateTargetsTree_1_new(): TreeNode[] {

      let myGenerated_treeFiles = this.targetsStructure.categories.map(category => {
	  let categoryTreeNode: TreeNode = {
	      label: category.name,
	      data: category,
	      expandedIcon: "fa-folder-open",
	      collapsedIcon: "fa-folder",
	      expanded: true,

	      children : this.targetsStructure.mbfs
		.filter(mbf => mbf.categoryId === category.id )
		.map(mbf => {
		    let mbfTreeNode: TreeNode = {
			label: mbf.name,
			data: mbf,
			expandedIcon: "fa-folder-open",
			collapsedIcon: "fa-folder",
			expanded: true,

			children : this.targetsStructure.tasks
			  .filter(task => task.mbfId === mbf.id )
			  .map(task => {
			      let taskTreeNode: TreeNode = {
				  label: task.name,
				  data: task,
				  expandedIcon: "fa-folder-open",
				  collapsedIcon: "fa-folder",
				  expanded: true,
				  
				  children : this.targetsStructure.targets
				    .filter(target => target.taskId === task.id )
				    .map(target => {
					let targetTreeNode: TreeNode = {
					    label: target.name, // + ", texto de relleno para probar que tan largo puede ser el LABEL en el Tree, espero que pueda ser muy largo por que quizas deba poner la DESCRIPCION",
					    data: target,
					    icon: "fa-file-word-o"
					    
					};
					return targetTreeNode;
				    }) 
			      };
			      return taskTreeNode;
			  })                        
		    };
		    return mbfTreeNode;
		})
	  };
	  return categoryTreeNode;
      });
      console.warn("44_55 INI myGenerated_treeFiles");
      console.warn(myGenerated_treeFiles);
      console.warn("44_55 FIN myGenerated_treeFiles");
      

      return myGenerated_treeFiles;
  }




  deMisTargets_generateTargetsTree_9_new(): TreeNode[] {

      let myGenerated_treeFiles: TreeNode[] = this.targetsStructure.categories.map(category => {
		let categoryTreeNode: TreeNode = {
			label: category.name,
			data: category,
			expandedIcon: "fa-folder-open",
			collapsedIcon: "fa-folder",
			expanded: true,
			

			partialSelected: true,

			children : this.targetsStructure.mbfs
			.filter(mbf => mbf.categoryId === category.id )
			.map(mbf => {
				let mbfTreeNode: TreeNode = {
				label: mbf.name,
				data: mbf,
				expandedIcon: "fa-folder-open",
				collapsedIcon: "fa-folder",
				expanded: true,

				partialSelected: true,

				children : this.targetsStructure.tasks
				.filter(task => task.mbfId === mbf.id )
				.map(task => {
					let taskTreeNode: TreeNode = {
					label: task.name,
					data: task,
					expandedIcon: "fa-folder-open",
					collapsedIcon: "fa-folder",
					expanded: true,

					partialSelected: true,
					
					children : this.targetsStructure.targets
						.filter(target => target.taskId === task.id )
						.map(target => {
						let targetTreeNode: TreeNode = {
							label: target.name, // + ", texto de relleno para probar que tan largo puede ser el LABEL en el Tree, espero que pueda ser muy largo por que quizas deba poner la DESCRIPCION",
							data: target,
							icon: "fa-file-word-o"

							,partialSelected: false
							
						};
						return targetTreeNode;
						}) 
					};
					return taskTreeNode;
				})                        
				};
				return mbfTreeNode;
			})
		};
		

			//isSelected

		//categoryTreeNode.partialSelected .isSelected();//.partialSelected=false;

		return categoryTreeNode;
      });
      console.warn("66_77 INI myGenerated_treeFiles");
      console.warn(myGenerated_treeFiles);
      console.warn("66_77 FIN myGenerated_treeFiles");
      

      return myGenerated_treeFiles;
  }




  deMisTargets_generateTargetsTree_10_new(initialTreeNodes: TreeNode[]): TreeNode[] {

  let myGenerated_treeFiles: TreeNode[] = [];
  
	initialTreeNodes.forEach( (categ: TreeNode) => {
		categ.children.forEach( (mbf: TreeNode) => {
			mbf.children.forEach( (task: TreeNode) => {
				task.children.forEach( (target: TreeNode) => {
					if(target.label=="% Satisfaction with the response time to give non Objection PRM "){
						myGenerated_treeFiles.push(target);
						task.partialSelected = true;
						//myGenerated_treeFiles.push(task);
					}
				})
			})
		})
	})

//   let myGenerated_treeFiles: TreeNode[] = initialTreeNodes
//   	.filter( (categ: TreeNode) => {
// 		  //categ.categoryId === category.id
		  
// 		  //return categ.label == "A Operational";

// 		  return categ.children[0].label == "A01 Stakeholder & Donor DialogueAAA"
// 	})

/*
      let myGenerated_treeFiles: TreeNode[] = this.targetsStructure.categories.map(category => {
		let categoryTreeNode: TreeNode = {
			label: category.name,
			data: category,
			expandedIcon: "fa-folder-open",
			collapsedIcon: "fa-folder",
			expanded: true,

			partialSelected: true,

			children : this.targetsStructure.mbfs
			.filter(mbf => mbf.categoryId === category.id )
			.map(mbf => {
				let mbfTreeNode: TreeNode = {
				label: mbf.name,
				data: mbf,
				expandedIcon: "fa-folder-open",
				collapsedIcon: "fa-folder",
				expanded: true,

				partialSelected: true,

				children : this.targetsStructure.tasks
				.filter(task => task.mbfId === mbf.id )
				.map(task => {
					let taskTreeNode: TreeNode = {
					label: task.name,
					data: task,
					expandedIcon: "fa-folder-open",
					collapsedIcon: "fa-folder",
					expanded: true,

					partialSelected: true,
					
					children : this.targetsStructure.targets
						.filter(target => target.taskId === task.id )
						.map(target => {
						let targetTreeNode: TreeNode = {
							label: target.name, // + ", texto de relleno para probar que tan largo puede ser el LABEL en el Tree, espero que pueda ser muy largo por que quizas deba poner la DESCRIPCION",
							data: target,
							icon: "fa-file-word-o"

							,partialSelected: false
							
						};
						return targetTreeNode;
						}) 
					};
					return taskTreeNode;
				})                        
				};
				return mbfTreeNode;
			})
		};
		

			//isSelected

		//categoryTreeNode.partialSelected .isSelected();//.partialSelected=false;

		return categoryTreeNode;
      });
*/

      console.warn("66_77 INI myGenerated_treeFiles");
      console.warn(myGenerated_treeFiles);
      console.warn("66_77 FIN myGenerated_treeFiles");
      

      return myGenerated_treeFiles;
  }




	generateTargetsTree_2() {

	console.warn("888 INI this.targetsStructure");
	console.warn(this.targetsStructure);
	console.warn("888 FIN this.targetsStructure");

	}


		/*
		generateTargetsTree_3(): TreeNode[] {


		this.files777 = this.targetsStructure.categories.map(category => {
			let categoryTreeNode: TreeNode = {
			label: category.name,
			data: category,
			expandedIcon: "fa-folder-open",
			collapsedIcon: "fa-folder",
			expanded: true,

			children : this.targetsStructure.mbfs
				.filter(mbf => mbf.categoryId === category.id )
				.map(mbf => {
				let mbfTreeNode: TreeNode = {
					label: mbf.name,
					data: mbf,
					expandedIcon: "fa-folder-open",
					collapsedIcon: "fa-folder",
					expanded: true,

					children : this.targetsStructure.tasks
					.filter(task => task.mbfId === mbf.id )
					.map(task => {
					let taskTreeNode: TreeNode = {
						label: task.name,
						data: task,
						expandedIcon: "fa-folder-open",
						collapsedIcon: "fa-folder",
						expanded: true,
						
						children : this.targetsStructure.targets
						.filter(target => target.taskId === task.id )
						.map(target => {
							let targetTreeNode: TreeNode = {
							label: target.name, // + ", texto de relleno para probar que tan largo puede ser el LABEL en el Tree, espero que pueda ser muy largo por que quizas deba poner la DESCRIPCION",
							data: target,
							icon: "fa-file-word-o"
							
							};
							return targetTreeNode;
						}) 
					};
					return taskTreeNode;
					})                        
				};
				return mbfTreeNode;
				})
			};
			return categoryTreeNode;
		});
		console.warn("777 INI this.files777");
		console.warn(this.files777);
		console.warn("777 FIN this.files777");
		

		return this.files777;
		}
		*/



    nodeSelect(event) {
        // this.msgs = [];
        // this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
			console.log("==>> CLIS nodeSelect event.node::");
			console.log(event.node);	

			console.log("==>> CLIS nodeSelect this.selectedFiles777::");
			console.log(this.selectedFiles777);					
    }
    
    nodeUnselect(event) {
        // this.msgs = [];
        // this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
			console.log("==>> CLIS nodeUnselect event.node::");
			console.log(event.node);	

			console.log("==>> CLIS nodeUnselect this.selectedFiles777::");
			console.log(this.selectedFiles777);		
    }


//((((((((((((((((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]])))))))))))))))))))))))))))))))
//((((((((((((((((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]])))))))))))))))))))))))))))))))
//((((((((((((((((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]])))))))))))))))))))))))))))))))





  createNewTargetYUKA() {
    console.log('$ -->>  YUKA_YUKA BTN createNewTargetYUKA ');

	  //?????????????????????????????????????????????????????????????????????????????????????????????????
	  //?????????????????????????????????????????????????????????????????????????????????????????????????
	  /*
		  this.aOfficeIsOnEditMode = true;  //Para indicar si hay algun office en Edicion

		  //console.log('==> BTN addOffice2Office ');

		  let newOffice = new OfficeModel();
		  let newEditItem = new EditItemModel(newOffice);
		  newEditItem.editing = true;

		  this._offices.push(newEditItem);
	  */
	  //?????????????????????????????????????????????????????????????????????????????????????????????????
	  //????????????????????????????????????????????????????????????????????????????????????????????????? 

  }


}



