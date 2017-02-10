import {Component, ViewEncapsulation} from '@angular/core';


          import { SharedMbfsCategoryService } from '../../../../services/shared-mbfs-category.service';
        import { SharedTasksMbfService } from '../../../../services/shared-tasks-mbf.service';
      import { NewSharedTargetsTaskService } from '../../../../services/new-shared-targets-task.service';

@Component({
  selector: 'configuration',
  encapsulation: ViewEncapsulation.None,
  template: require('./configuration.html'),
})
export class ConfigurationComponent {

  // constructor() { }


                    constructor(
                      private _sharedMbfsCategoryService: SharedMbfsCategoryService,
                      private _sharedTasksMbfService: SharedTasksMbfService,
                      private _newSharedTargetsTaskService: NewSharedTargetsTaskService
                    ) { }

                    ngOnInit() {
                      console.warn("--> ngOnInit (getMbfs AND getTasks AND getTargets) PREVIAMENTE");                      
                      
                      this._sharedMbfsCategoryService.fetchSharedMbfArray();
                      this._sharedTasksMbfService.fetchSharedTaskArray();
                      this._newSharedTargetsTaskService.fetchNewSharedTargetArray();

                    }

                    get mbfs_n_tasks_n_targets_ready(): boolean {
                      if( (this._sharedMbfsCategoryService.sharedMbfArray) && (this._sharedTasksMbfService.sharedTaskArray) && (this._newSharedTargetsTaskService.newSharedTargetArray) ){
                        return true;
                      }
                      return false;
                    }

                        // constructor(
                        //   private _sharedTasksMbfService: SharedTasksMbfService,
                        //   private _newSharedTargetsTaskService: NewSharedTargetsTaskService
                        // ) { }

                        // ngOnInit() {
                        //   console.warn("&&&&&&&&& ngOnInit (getTasks AND getTargets) PREVIAMENTE");                      
                          
                        //   this._sharedTasksMbfService.fetchSharedTaskArray();
                        //   this._newSharedTargetsTaskService.fetchNewSharedTargetArray();

                        // }

                        // get tasks_n_targets_ready(): boolean {
                        //   if( (this._sharedTasksMbfService.sharedTaskArray) && (this._newSharedTargetsTaskService.newSharedTargetArray) ){
                        //     return true;
                        //   }
                        //   return false;
                        // }


                              // constructor(
                              //   private _newSharedTargetsTaskService: NewSharedTargetsTaskService
                              // ) { }

                              // ngOnInit() {
                              //   console.error("ngOnInit getTargets PREVIAMENTE");                      
                              //   this._newSharedTargetsTaskService.fetchNewSharedTargetArray(); 
                              // }

                              // get teztTEZT_targetsReady(): boolean {
                              //   if(this._newSharedTargetsTaskService.newSharedTargetArray){
                              //     return true;
                              //   }
                              //   return false;
                              // }    


}
