import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface WidgetConfirmDialogInterface {
    toggleDialog: boolean;
    label: string;
}

@Injectable()
export class WidgetConfirmDialogService {
    public dialog = new Subject<void>();
    public label = new BehaviorSubject("Loading, please wait...");

    // event handler
    // public observableOkayEvent = new Subject<void>();
    // public onOkay = this.observableOkayEvent.asObservable();
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