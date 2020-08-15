import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import { RandomNumberService } from '../shared/services/random.service';
import { WidgetPageLoaderService } from '../shared/widgets/loader/widget.page.loader.service';
import { WidgetConfirmDialogService } from '../shared/widgets/confirm.dialog/widget.confirm.dialog.service';
import { WidgetAlertDialogService } from '../shared/widgets/alert.dialog/widget.alert.dialog.service';
import { WidgetToastService } from '../shared/widgets/toast/widget.toast.service';
import { UserService } from './user.service';
import { DateTimeHelper } from '../shared/helpers/datetime.helper';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<any> = [];
  public user: any = {};

  public paginator: any = {};
  public currentPage = 0;
  public isFilterSectionDockable = false;

  constructor(
    public globals: GlobalService,
    public router: Router,
    public random: RandomNumberService,

    // shared widgets
    public pageLoader: WidgetPageLoaderService,
    public confirmationDialog: WidgetConfirmDialogService,
    public notificationDialog: WidgetAlertDialogService,
    public toastr: WidgetToastService,

    public dateTimeHelper: DateTimeHelper,

    public userService: UserService) {
    this.globals.isLoading = false;
    this.globals.isHomepage = false;

    this.globals.isAccountLoggedIn = true;

    this.globals.selectedLoggedInAccountPageTab = 'Users';
    this.globals.selectedModuleTitle = 'Users';
    this.globals.selectedModuleIcon = this.globals.calloutSubscriptionsMenuItems[0].icon;
  }

  ngOnInit() {

    $(() => {

      // enable tooltips
      ($('[data-toggle="tooltip"]') as any).tooltip();

    });

    this.getUsers();

  }


  // methods
  getUsers(pageNumber: number = 1) {
    this.pageLoader.setLabel('Loading, please wait...');
    this.pageLoader.show();

    this.paginator.PageNumber = pageNumber ? pageNumber : 1;
    this.paginator.RowsPerPage = this.paginator.rowsPerPage || 20;
    this.currentPage = pageNumber;

    return this.userService.getPaged(this.paginator).then(
      (response: any) => {
        this.users = response;
        this.pageLoader.hide();
      },
      (error: any) => {
        this.pageLoader.hide();
        this.toastr.show({
          title: 'Oops!',
          label: 'Something went wrong, please try again later.'
        });
      }
    );
  }

}
