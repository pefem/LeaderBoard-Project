import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import { EmitterVisitorContext } from '@angular/compiler';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/services/global.service';
import { WidgetToastService } from '../shared/widgets/toast/widget.toast.service';

@Component({
  selector: 'app-users',
  templateUrl: 'createoredit.user.component.html',
  styleUrls: ['createoredit.user.component.css']
})
export class CreateOrEditUserComponent implements OnInit {

  public data: any = {};

  private widgetOkayButtonClickEvent: any;
  public urlParam: any = window.location.pathname.substring(1).split('/');

  constructor(
    public globals: GlobalService,
    public toastr: WidgetToastService,
    public userService: UserService,
    public router: Router) {

    this.globals.isLoading = false;
    this.globals.isHomepage = false;

    this.globals.isAccountLoggedIn = true;

    this.globals.selectedLoggedInAccountPageTab = 'Users';
    this.globals.selectedModuleTitle = 'Users';
    this.globals.selectedModuleIcon = this.globals.calloutSubscriptionsMenuItems[0].icon;

  }

  ngOnInit() {
    if (this.urlParam.indexOf('edit') > 0) {
      this.getUser(this.urlParam[2]);
    }
  }

  saveChanges() {
    if (this.urlParam.indexOf('edit') > 0) {
      this.userService.update(this.data).then(
        (response: any) => {
          this.router.navigate(['/users']);
          this.toastr.show({
            title: 'Done!',
            label: 'Record updated successfully.'
          });
        },
        (error: any) => {
          this.toastr.show({
            title: 'Oops!',
            label: 'Something went wrong, please try again later.'
          });
        }
      );
    } else {
      this.userService.save(this.data).then(
        (response: any) => {
          this.router.navigate(['/users']);
          this.toastr.show({
            title: 'Done!',
            label: 'Record saved successfully.'
          });
        },
        (error: any) => {
          this.toastr.show({
            title: 'Oops!',
            label: 'Something went wrong, please try again later.'
          });
        }
      );
    }
  }


  // methods
  getUser(userId: any) {
    console.log(userId);
    return this.userService.get(userId).then(
      (response: any) => {
        this.data = response;
        console.log(this.data);
      },
      (error: any) => {
        this.toastr.show({
          title: 'Oops!',
          label: 'Something went wrong, please try again later.'
        });
      }
    );
  }

}
