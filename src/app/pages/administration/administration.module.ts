


//MODULES
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
    // import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { routing }       from './administration.routing';
    import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
    import {TabViewModule} from 'primeng/primeng';
        import {TreeModule} from 'primeng/primeng';
          //import {TreeModule,TreeNode} from 'primeng/primeng';
        import { SelectModule } from 'ng2-select';
          //import { SelectModule } from './components/select.module';
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // import {GrowlModule} from 'primeng/primeng';
    // import {MenuModule} from 'primeng/primeng';
    //     import {SplitButtonModule} from 'primeng/primeng';
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    import {GrowlModule} from 'primeng/primeng';

    import {PanelModule} from 'primeng/primeng';



//COMPONENTS      
    import { AdministrationComponent } from './administration.component';
      import { ConfigurationComponent } from './components/configuration';
      import { PlanComponent } from './components/plan';

    //-------TARGETS
    import { CategoriesComponent } from './components/configuration/components/categories';
        import { CategoriesListComponent } from './components/configuration/components/categories/categoriesList';
        import { CategoryCardComponent } from './components/configuration/components/categories/categoryCard';
        import { CategoryEditorComponent } from './components/configuration/components/categories/categoryEditor';

    import { MbfsComponent } from './components/configuration/components/mbfs';
    import { MbfsCategoryComponent } from './components/configuration/components/mbfs/mbfsCategory.component';
        import { MbfsListComponent } from './components/configuration/components/mbfs/mbfsList';
        import { MbfCardComponent } from './components/configuration/components/mbfs/mbfCard';
        import { MbfEditorComponent } from './components/configuration/components/mbfs/mbfEditor'; 

    import { TasksComponent } from './components/configuration/components/tasks';
    import { TasksMbfComponent } from './components/configuration/components/tasks/tasksMbf.component';
        import { TasksListComponent } from './components/configuration/components/tasks/tasksList';
        import { TaskCardComponent } from './components/configuration/components/tasks/taskCard';
        import { TaskEditorComponent } from './components/configuration/components/tasks/taskEditor';

    import { TargetsComponent } from './components/configuration/components/targets';
    import { TargetsTaskComponent } from './components/configuration/components/targets/targetsTask.component';
        import { TargetsListComponent } from './components/configuration/components/targets/targetsList';
        import { TargetCardComponent } from './components/configuration/components/targets/targetCard';
        import { TargetEditorComponent } from './components/configuration/components/targets/targetEditor';                        
    
    //-------OFFICES & USERS
    import { OfficesComponent } from './components/configuration/components/offices';
        import { OfficesListComponent } from './components/configuration/components/offices/officesList';
        import { OfficeCardComponent } from './components/configuration/components/offices/officeCard';
        import { OfficeEditorComponent } from './components/configuration/components/offices/officeEditor';

    import { TeamsComponent } from './components/configuration/components/teams';
    import { TeamsOfficeComponent } from './components/configuration/components/teams/teamsOffice.component';
        import { TeamsListComponent } from './components/configuration/components/teams/teamsList';
        import { TeamCardComponent } from './components/configuration/components/teams/teamCard';
        import { TeamEditorComponent } from './components/configuration/components/teams/teamEditor';

    import { UsersComponent } from './components/configuration/components/users';
    import { UsersTeamComponent } from './components/configuration/components/users/usersTeam.component';
        import { UsersListComponent } from './components/configuration/components/users/usersList';
        import { UserCardComponent } from './components/configuration/components/users/userCard';
        import { UserEditorComponent } from './components/configuration/components/users/userEditor';

    //-------PLAN TYPES
    import { PlanTypesComponent } from './components/configuration/components/planTypes';
    import { OfficesSelectorComponent } from './components/configuration/components/planTypes/officesSelector';
        import { PlanTypesListComponent } from './components/configuration/components/planTypes/planTypesList';
        import { PlanTypeCardComponent } from './components/configuration/components/planTypes/planTypeCard';
        import { PlanTypeEditorComponent } from './components/configuration/components/planTypes/planTypeEditor';

    //-------GOALS
    import { GoalsComponent } from './components/configuration/components/goals';
    import { TargetsSelectorComponent } from './components/configuration/components/goals/targetsSelector';
        import { GoalsListComponent } from './components/configuration/components/goals/goalsList';
        import { GoalCardComponent } from './components/configuration/components/goals/goalCard';
        import { GoalEditorComponent } from './components/configuration/components/goals/goalEditor';

    //-------YEARS - PLANS
    import { YearsComponent } from './components/plan/components/years';
      import { YearsListComponent } from './components/plan/components/years/yearsList';
      import { YearPickerComponent } from './components/plan/components/years/yearPicker';
      import {YearPlansPipe} from './components/plan/components/years/yearsList/yearPlans.pipe';
        import {PlanGoalsPipe} from './components/plan/components/years/yearsList/planGoals.pipe';
            import {TargetsGoalPlanPipe} from './components/plan/components/years/yearsList/targetsGoalPlan.pipe';

      import { TargetsGoalComponent } from './components/plan/components/planes/targetsGoal';
      import { GolesPlamComponent } from './components/plan/components/planes/golesPlam';
      import { PlansYearComponent } from './components/plan/components/planes/plansYear';
      
      
      

    // //-------PLANS
    // import { PlanesComponent } from './components/plan/components/planes';
    //   import { YearsListComponent } from './components/plan/components/planes/yearsList';
      import { PlanCreatorComponent } from './components/plan/components/planes/planCreator';
    //   import { YearPickerComponent } from './components/plan/components/planes/yearPicker';  



//SERVICES
          import { CategoryService } from '../../services/category.service';
          import { MbfService } from '../../services/mbf.service';
          import { TaskService } from '../../services/task.service';
          import { TargetService } from '../../services/target.service';
          import { OfficeService } from '../../services/office.service';
          import { TeamService } from '../../services/team.service';
          import { UserService } from '../../services/user.service';

          import { PlanTypeService } from '../../services/planType.service';
          import { OfiTipoPlamService } from '../../services/ofiTipoPlam.service';

          import { GoalService } from '../../services/goal.service';
          import { TarGolService } from '../../services/tarGol.service';

          import { PlanService } from '../../services/plan.service';


            import { TargTreeNodeService } from '../../services/targTreeNode.service'; //##__$$ //##__$$ //##__$$ 



        import { YearService } from '../../services/year.service';

        import { GolesPlamService } from '../../services/golesPlam.service';

        import { TargetsGoalPlanService } from '../../services/targetsGoalPlan.service';

//##__$$                        import { TargetsStructureService } from '../../services/targetsStructure.service';


import { NewCategoryService } from '../../services/new-category.service';


import { NewTargetService } from '../../services/new-target.service';
// import { NewSharedTargetService } from '../../services/new-shared-target.service';
import { NewSharedTargetsTaskService } from '../../services/new-shared-targets-task.service';

import { SharedTasksMbfService } from '../../services/shared-tasks-mbf.service';

import { SharedMbfsCategoryService } from '../../services/shared-mbfs-category.service';


          import { RestoreService } from '../../services/restore.service';



@NgModule({
  imports: [
    CommonModule,
      AccordionModule,
      TabViewModule,
        TreeModule,
        SelectModule,

        GrowlModule,

        PanelModule,
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //     GrowlModule,
    //     MenuModule,
    //     SplitButtonModule,
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    AngularFormsModule,
    NgaModule,
    // RatingModule,
    routing
  ],
  declarations: [
    
      AdministrationComponent,
        ConfigurationComponent,
        PlanComponent,

      CategoriesComponent,
        CategoriesListComponent,
        CategoryCardComponent,
        CategoryEditorComponent,                
      
      MbfsComponent,
      MbfsCategoryComponent,
        MbfsListComponent,
        MbfCardComponent,
        MbfEditorComponent, 

      TasksComponent,
      TasksMbfComponent,
        TasksListComponent,
        TaskCardComponent,
        TaskEditorComponent, 

      TargetsComponent,
      TargetsTaskComponent,
        TargetsListComponent,
        TargetCardComponent,
        TargetEditorComponent, 

      OfficesComponent,
        OfficesListComponent,
        OfficeCardComponent,
        OfficeEditorComponent, 

      TeamsComponent,
      TeamsOfficeComponent,
          TeamsListComponent,
          TeamCardComponent,
          TeamEditorComponent,

      UsersComponent,
      UsersTeamComponent,
          UsersListComponent,
          UserCardComponent,
          UserEditorComponent, 

      PlanTypesComponent,
      OfficesSelectorComponent,
          PlanTypesListComponent,
          PlanTypeCardComponent,
          PlanTypeEditorComponent,


      GoalsComponent,
      TargetsSelectorComponent,
          GoalsListComponent,
          GoalCardComponent,
          GoalEditorComponent,

      YearsComponent,
          YearsListComponent,
          YearPickerComponent, 
            YearPlansPipe,
                PlanGoalsPipe,
                    TargetsGoalPlanPipe,

        TargetsGoalComponent,
        GolesPlamComponent,
        PlansYearComponent,

        // PlanesComponent,
        //   YearsListComponent,
          PlanCreatorComponent,
        //   YearPickerComponent,          
  ],
  providers: [
          CategoryService,
          MbfService,
          TaskService,
          TargetService,

          OfficeService,
          TeamService,
          UserService,

          PlanTypeService,
          OfiTipoPlamService,
          GoalService,
          TarGolService,

          PlanService,
            TargTreeNodeService,

        YearService,

        GolesPlamService,

        TargetsGoalPlanService,

//##__$$                        TargetsStructureService,

NewCategoryService,


NewTargetService,
// NewSharedTargetService,
NewSharedTargetsTaskService,

SharedTasksMbfService,

SharedMbfsCategoryService,

          RestoreService
  ]
})

export class AdministrationModule { }
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
    //export default class AdministrationModule { }       //NOTA: Si se usa DEFAULT, en el ROUTING no se puede indicar la clase, sino que se debe dejar vacia y viceversa ... { path: 'administration', loadChildren: 'app/pages/administration/administration.module#AdministrationModule' }
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------