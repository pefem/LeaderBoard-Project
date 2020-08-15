import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import { EmitterVisitorContext } from '@angular/compiler';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/services/global.service';
import { WidgetToastService } from '../shared/widgets/toast/widget.toast.service';

@Component({
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css']
})
export class BoardComponent implements OnInit {

  public data: any = {
    Score: 0,
    GamesPlayed: 0
  };
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
    this.getBoard(this.urlParam[2]);
  }

  saveChanges() {
    this.data.UserId = this.urlParam[2];
    this.userService.saveBoard(this.data).then(
      (response: any) => this.router.navigate(['/users']),
      (error: any) => {
        this.toastr.show({
          title: 'Oops!',
          label: 'Something went wrong, please try again later.'
        });
      }
    );
  }


  // methods
  getBoard(userId: any) {
    return this.userService.board(userId).then(
      (response: any) => {
        if (response) {
          this.data = response;
        }
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
