import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface WidgetAlertDialogInterface {
    toggleDialog: boolean;
    label: string;
}

@Injectable()
export class WidgetAlertDialogService {
    public dialog = new Subject<void>();
    public label = new BehaviorSubject('');

    // event handler
    public onOkay = new Subject<void>();

    show() {
        this.dialog.next();
    }

    hide() {
        // this.dialog.next(null);
    }

    setLabel(label: string) {
        this.label.next(label);
    }

    addEventHandler(event: any) {
        // this.observableOkayEvent.next(event);
        this.onOkay.next(event);
    }
}