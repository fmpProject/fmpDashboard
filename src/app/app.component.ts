import { Component, ViewContainerRef } from '@angular/core';

import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';

import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
import 'style-loader!primeng/resources/primeng.min.css';
import 'style-loader!primeng/resources/themes/cupertino_fmp/theme.css';
  // import 'style-loader!primeng/resources/themes/cupertino/theme.css';
  // import 'style-loader!primeng/resources/themes/bootstrap/theme.css';
  // import 'style-loader!primeng/resources/themes/cruze/theme.css';
  // import 'style-loader!primeng/resources/themes/omega/theme.css';
    // <!--
    // <link rel="stylesheet" type="text/css" href="node_modules/primeng/resources/themes/omega/theme.css" />
    // <link rel="stylesheet" type="text/css" href="./node_modules/primeng/resources/primeng.min.css" />
    // <link rel="stylesheet" type="text/css" href="YOUR_PATH/font-awesome.min.css" />
    // -->   
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef) {

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

}
