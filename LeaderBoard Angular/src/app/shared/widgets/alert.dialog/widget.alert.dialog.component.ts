import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import { WidgetAlertDialogService } from './widget.alert.dialog.service';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'widget-alert-dialog',
  templateUrl: 'widget.alert.dialog.component.html',
  styleUrls: ['widget.alert.dialog.component.css']
})
export class WidgetAlertDialogComponent implements OnInit {

  @Input() toggle: boolean;
  @Input() label: string;

  @Output() widgetOkayButtonClick = new EventEmitter();

  private widgetOkayButtonClickEvent: any;

  constructor(public widgetAlertDialogService: WidgetAlertDialogService) {
    this.widgetAlertDialogService.dialog.subscribe(() => this.showDialog());
    this.widgetAlertDialogService.label.subscribe(label => this.label = label);
    this.widgetAlertDialogService.onOkay.subscribe(event => this.widgetOkayButtonClickEvent = event);
  }

  ngOnInit() {
    //
  }

  showDialog() {
    ($('#alertDialogModal') as any).modal('show');
  }

  hideDialog() {
    ($('#alertDialogModal') as any).modal('hide');
  }

  onOkay(event?: any) {
    try {
      if (this.widgetOkayButtonClickEvent) {
        this.widgetOkayButtonClickEvent(event);
      }
      ($('#alertDialogModal') as any).modal('hide');
    } catch (e) {
      throw e;
    }
  }

}
