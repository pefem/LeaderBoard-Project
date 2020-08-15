import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import * as $ from 'jquery';
declare var jQuery: any;

@Injectable()
export class WidgetCalloutPanelService {
    public callout = new Subject<void>();
    public onOkay = new Subject<void>();

    private className: any;

    init(args: any) {
        if ((args instanceof Object) && Object.keys(args).length > 0) {
            this.className = ("name" in args) ? args.name : "";
        } else {
            this.className = args;
        }
        return this;
    }

    show() {
        this.callout.next();
    }

    hide() {
        // 
    }

    addEventHandler(event: any) {
        this.onOkay.next(event);
    }
}