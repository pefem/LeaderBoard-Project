import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'widget-login',
  templateUrl: 'widget.login.component.html',
  styleUrls: ['widget.login.component.css']
})
export class WidgetLoginComponent implements OnInit {

  // input
  @Input() forgotPasswordUrl: any;

  // output
  @Output() onWidgetLogin: any = new EventEmitter();

  // public variables
  public inProgress: boolean = false;


  constructor(private globals: GlobalService) { 
  }

  ngOnInit() {
    try {

    } catch (error) {

    }
  }

  emitWidgetEvent(event: any) {
    this.inProgress = true;
    this.onWidgetLogin.emit();
  }
}