import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { RandomNumberService } from 'src/app/shared/services/random.service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/shared/services/global.service';

@Injectable()
export class UserService {
    public createOrEditDialog = new Subject<void>();
    public label = new BehaviorSubject('');

    // event handler
    public onOkay = new Subject<void>();

    private url = this.globals.apiUrl;

    public constructor(
        public random: RandomNumberService,
        public http: HttpClient,
        public globals: GlobalService
    ) {
        //
    }

    showCreateOrEditDialog() {
        this.createOrEditDialog.next();
    }

    hideCreateOrEditDialog() {
        // this.createOrEditDialog.next(null);
    }

    setLabel(label: string) {
        this.label.next(label);
    }

    addEventHandler(event: any) {
        this.onOkay.next(event);
    }

    getPaged(credentials?: any): any {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/users').subscribe(
                (response: any) => resolve(response),
                (error: any) => reject(error)
            );
        });
    }

    get(userId: any): any {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/user/' + userId).subscribe(
                (response: any) => resolve(response),
                (error: any) => reject(error)
            );
        });
    }

    board(userId: any): any {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/leaderboard/' + userId).subscribe(
                (response: any) => resolve(response),
                (error: any) => reject(error)
            );
        });
    }

    save(data?: any): any {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/user', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(
                (response: any) => resolve(response),
                (error: any) => reject(error)
            );
        });
    }

    saveBoard(data?: any): any {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/leaderboard', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(
                (response: any) => resolve(response),
                (error: any) => reject(error)
            );
        });
    }

    update(data?: any): any {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/user', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(
                (response: any) => resolve(response),
                (error: any) => reject(error)
            );
        });
    }

    delete(data?: any): any {
        return this.http.post(this.globals.apiUrl + 'users/delete', {
            data
        });
    }

}