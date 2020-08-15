import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'widget-forgot-password',
  templateUrl: 'widget.forgot.password.component.html',
  styleUrls: ['widget.forgot.password.component.css']
})
export class WidgetForgotPasswordComponent implements OnInit {

  @Input() forgotPasswordUrl: any;

  constructor(private globals: GlobalService) { 
    this.globals.isAccountLogInPage = true;
  }

  ngOnInit() {
    try {

    } catch (error) {

    }
  }
}