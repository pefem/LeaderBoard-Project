import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import { WidgetToastService } from './widget.toast.service';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'widget-toast',
  templateUrl: 'widget.toast.component.html',
  styleUrls: ['widget.toast.component.css']
})
export class WidgetToastComponent implements OnInit {

  @Input() toggle: boolean;
  @Input() icon: string;
  @Input() title: string;
  @Input() timestamp: string;
  @Input() label: string;
  // @Input() show: boolean;

  @Output() widgetOkayButtonClick = new EventEmitter();

  private widgetOkayButtonClickEvent: any;

  constructor(public widgetToastService: WidgetToastService) {
    this.widgetToastService.toast.subscribe(() => this.show());
    this.widgetToastService.icon.subscribe(icon => this.icon = icon);
    this.widgetToastService.title.subscribe(title => this.title = title);
    this.widgetToastService.timestamp.subscribe(timestamp => this.timestamp = timestamp);
    this.widgetToastService.label.subscribe(label => this.label = label);
    this.widgetToastService.onOkay.subscribe(event => this.widgetOkayButtonClickEvent = event);
  }

  ngOnInit() {
    // 
    ($('.toast') as any).toast({
      animation: true,
      autohide: true,
      delay: 5000
    });
  }

  show() {
    ($('.toast') as any).toast('show');
    this.widgetToastService.icon.subscribe(icon => this.icon = icon);
    this.widgetToastService.title.subscribe(title => this.title = title);
    this.widgetToastService.timestamp.subscribe(timestamp => this.timestamp = timestamp);
    this.widgetToastService.label.subscribe(label => this.label = label);

    this.toggle = true;
  }

  hide() {
    ($('.toast') as any).toast('hide');
  }

  onOkey(event?: any) {
    try {
      this.widgetOkayButtonClickEvent(event);
      ($('.toast') as any).toast('hide');
      this.toggle = false;
    } catch (e) {
      throw e;
    }
  }

}
