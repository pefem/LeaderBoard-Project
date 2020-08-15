import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private globals: GlobalService) {
    this.globals.isHomepage = true;
    this.globals.isAccountLogInPage = false;
    this.globals.isAccountLoggedIn = false;
  }

  ngOnInit() {
    try {
      ($('.carousel') as any).carousel({
        interval: 5000
      });
    } catch (error) {

    }
  }

}
