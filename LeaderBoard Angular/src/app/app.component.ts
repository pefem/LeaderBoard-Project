import { Component, AfterViewChecked, AfterViewInit, OnInit } from '@angular/core';
import { GlobalService } from './shared/services/global.service';

// import * as $ from 'jquery';
// declare var jQuery: any;

import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery-datetimepicker';
import { WidgetPageLoaderService } from './shared/widgets/loader/widget.page.loader.service';
import { WidgetCalloutPanelService } from './shared/widgets/callout.panel/widget.callout.panel.service';
import { WidgetLoaderService } from './shared/widgets/loader/widget.loader.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { StateManagementService } from './shared/services/state.management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public calloutDiscoverMenuItems: any;

  public constructor(
    public globals: GlobalService,
    public authService: AuthService,
    public stateManager: StateManagementService,
    public router: Router,
    public callout: WidgetCalloutPanelService,
    public loaderService: WidgetLoaderService,
    public pageLoaderService: WidgetPageLoaderService,
  ) {
    this.globals.isAccountLogInPage = false;
    this.calloutDiscoverMenuItems = globals.calloutDiscoverMenuItems;
  }

  ngOnInit() {
    // $(() => {
    //   ($('[data-toggle="tooltip"]') as any).tooltip();
    // });
  }

  logout(): void {
    const doLogout = (): void => {
      this.pageLoaderService.hide();
      this.router.navigate(['/']);
    };

    this.pageLoaderService.show();
    this.authService.logout().then(
      resonse => {
        // clear state management store

        // redirect to home page
        doLogout();
      },
      error => doLogout()
    );
  }

}
