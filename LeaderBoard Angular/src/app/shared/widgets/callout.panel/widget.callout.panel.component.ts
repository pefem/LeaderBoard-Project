import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, OnChanges } from '@angular/core';

import * as $ from 'jquery';
import { EventEmitter } from 'events';
import { WidgetCalloutPanelService } from './widget.callout.panel.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'widget-callout-panel',
  templateUrl: 'widget.callout.panel.component.html',
  styleUrls: ['widget.callout.panel.component.css']
})
export class WidgetCalloutPanelComponent implements OnInit, OnChanges {

  @Input() items: any = [];
  @Input() name = '';
  @Input() selected: any;

  public toggle = false;

  public calloutDiscoverMenuItems: any;
  public calloutLearningMenuItems: any;
  public calloutManagementMenuItems: any;
  public calloutSettingsMenuItems: any;

  // product
  public calloutProductMenuItems: any;
  public calloutProviderMenuItems: any;

  // Subscriptions
  public calloutSubscriptionsMenuItems: any;

  // content
  public calloutContentManagementMenuItems: any;

  // payment
  public calloutPaymentMenuItems: any;

  // reports
  public calloutReportsMenuItems: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemSelected = new EventEmitter();

  constructor(
    private hostElement: ElementRef,
    public globals: GlobalService,
    public widgetCalloutPanelService: WidgetCalloutPanelService) {

    this.widgetCalloutPanelService.callout.subscribe(() => this.showCallout());

    this.calloutDiscoverMenuItems = globals.calloutDiscoverMenuItems;
    this.calloutLearningMenuItems = globals.calloutLearningMenuItems;
    this.calloutManagementMenuItems = globals.calloutManagementMenuItems;

    //
    this.calloutProductMenuItems = globals.calloutProductMenuItems;
    this.calloutProviderMenuItems = globals.calloutProviderMenuItems;
    this.calloutSubscriptionsMenuItems = globals.calloutSubscriptionsMenuItems;
    this.calloutContentManagementMenuItems = globals.calloutContentManagementMenuItems;
    this.calloutSettingsMenuItems = globals.calloutSettingsMenuItems;
    this.calloutReportsMenuItems = globals.calloutReportsMenuItems;

    // transaction
    // this.calloutPaymentMenuItems = globals.calloutPaymentMenuItems;
    // this.calloutSubscriptionsMenuItems = globals.calloutSubscriptionsMenuItems;
  }

  ngOnInit() {
    try {
      $(() => {
        $(document).on('click', (evt: any) => {
          // $('div.widget-callout-panel').find('div.card').removeClass('expand-callout-panel');
          // this.toggle = false;
        });
      });
    } catch (error) {

    }
  }

  ngOnChanges() {
    try {
      //
    } catch (error) {

    }
  }

  showCallout() {
    if (this.toggle == false) {
      $('div.widget-callout-panel').find('div.card').addClass('expand-callout-panel');
      this.toggle = true;
    } else {
      $('div.widget-callout-panel').find('div.card').removeClass('expand-callout-panel');
      this.toggle = false;
    }
  }

  hideCallout() {
      $('div.widget-callout-panel').find('div.card').removeClass('expand-callout-panel');
      this.toggle = false;
  }

  onItemClick(event?: any, args?: any) {
    //
  }

}