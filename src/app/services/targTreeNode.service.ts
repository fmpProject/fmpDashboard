
import { Injectable }    from '@angular/core';

      import {TreeNode} from 'primeng/primeng';
    
        import { CategoryService } from './category.service';
        import { CategoryModel } from '../models/category';        
            import { MbfService } from './mbf.service';
            import { MbfModel } from '../models/mbf';
              import { TaskService } from './task.service';
              import { TaskModel } from '../models/task';
                import { TargetService } from './target.service';
                import { TargetModel } from '../models/target';   

@Injectable()
export class TargTreeNodeService {
    
    selectedFiles222: TreeNode[];
    files222: TreeNode[];
      categories: Array<CategoryModel>;
            mbfs: Array<MbfModel>;
              tasks: Array<TaskModel>;
                targets: Array<TargetModel>;

  constructor(
    //private _planTypesService: PlanTypeService,
    private _categoriesService: CategoryService,
    private _mbfsService: MbfService,
    private _tasksService: TaskService,
    private _targetsService: TargetService
  ) { }


  getTargetsTree(): Promise<TreeNode[]> {
 
      this.categories = [];
        this.mbfs = [];
          this.tasks = [];
            this.targets = [];

//   return new Promise((resolve, reject) => {
//     resolve(42);
//   });
            let self = this;

            return new Promise(function(resolve, reject) { 


                self._categoriesService
                    .getCategories()
                    .then((data) => {
                        self.categories = data; 

                        self._mbfsService
                            .getMbfs()
                            .then((data) => {
                                self.mbfs = data; 
console.log("getTasks LLAMADA 4");
                                self._tasksService
                                    .getTasks()
                                    .then((data) => {
                                        self.tasks = data;


    console.error("getTargets 5");
    
                                        self._targetsService
                                            .getTargets()
                                            .then((data) => {
                                                self.targets = data;

                                                let miArbolTargets: TreeNode[] = self.generateTree();
                                                resolve( miArbolTargets );
                                            }); 
                                    }); 
                            });                     

                    });

            });


    // Observable.forkJoin(
    //     this.http.get('/app/books.json').map((res:Response) => res.json()),
    //     this.http.get('/app/movies.json').map((res:Response) => res.json())
    // ).subscribe(
    //   data => {
    //     this.books = data[0]
    //     this.movies = data[1]
    //   },
    //   err => console.error(err)
    // );          

  }



  generateTree(): TreeNode[] {

      this.files222 = this.categories.map(category => {
          let categoryTreeNode: TreeNode = {
              label: category.name,
              data: category,
              expandedIcon: "fa-folder-open",
              collapsedIcon: "fa-folder",
              expanded: true,

              children : this.mbfs
                .filter(mbf => mbf.categoryId === category.id )
                .map(mbf => {
                    let mbfTreeNode: TreeNode = {
                        label: mbf.name,
                        data: mbf,
                        expandedIcon: "fa-folder-open",
                        collapsedIcon: "fa-folder",
                        expanded: true,

                        children : this.tasks
                          .filter(task => task.mbfId === mbf.id )
                          .map(task => {
                              let taskTreeNode: TreeNode = {
                                  label: task.name,
                                  data: task,
                                  expandedIcon: "fa-folder-open",
                                  collapsedIcon: "fa-folder",
                                  expanded: true,
                                  
                                  children : this.targets
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
      console.warn("222 INI this.files222");
      console.warn(this.files222);
      console.warn("222 FIN this.files222");

      return this.files222;
  }



    // constructor(private http: Http) {}

    // getFiles() {
    //     return this.http.get('showcase/resources/data/files.json')
    //                 .toPromise()
    //                 .then(res => <TreeNode[]> res.json().data)
    //                 .then(data => { return data; });
    // }



}