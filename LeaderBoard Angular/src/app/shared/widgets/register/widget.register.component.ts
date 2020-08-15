import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'widget-register',
  templateUrl: 'widget.register.component.html',
  styleUrls: ['widget.register.component.css']
})
export class WidgetRegisterComponent implements OnInit {

  @Input() items: any;

  constructor(private globals: GlobalService) { 
    this.globals.isAccountLogInPage = true;
    
    this.items = [];
  }

  ngOnInit() {
    try {

    } catch (error) {

    }
  }
}