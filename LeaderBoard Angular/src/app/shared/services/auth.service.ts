import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
// import axios, { AxiosResponse } from 'axios';
import { GlobalService } from './global.service';
import { StateManagementService } from './state.management.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    // private
    private url = this.globalService.apiUrl + '/auth';

    // public
    public authState: any;
    public identity: any;

    public constructor(
        public globalService: GlobalService,
        public http: HttpClient,
        private stateManager: StateManagementService
    ) {
        this.identity = this.stateManager.get('auth-data') ? (this.stateManager.get('auth-data')).Details : null;
        this.authState = this.identity ? true : false;
    }

    getData(): any {
        return this.stateManager.get('auth-data');
    }

    login(credentials: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.url, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(
                (response: any) => {
                    const data = response.data;
                    if (response.ResponseCode === 200) {
                        this.stateManager.save({ name: 'auth-data', value: response });
                        this.identity = response.Details;
                        this.authState = this.identity ? true : false;
                        resolve(response);
                    } else {
                        reject(response);
                    }
                },
                error => reject(error)
            );
        });
    }

    authenticate(credentials: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.http.post(this.url, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    }

    logout(): Promise<any> {
        const promise: any = new Promise((resolve: any, reject: any) => {
            this.http.post(this.url + '/logout', this.authState, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(
                (response): any => {
                    resolve(response);
                    this.stateManager.remove('auth-data');
                    this.authState = this.stateManager.get('auth-data') ? true : false;
                },
                (error): any => {
                    reject(error);
                    this.stateManager.remove('auth-data');
                    this.authState = this.stateManager.get('auth-data') ? true : false;
                }
            );
        });
        return promise;
    }

    verifyEmail(credentials: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/verify-email', credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).subscribe(
                (response: any) => {
                    if (response.ResponseCode === 200) {
                        // this.stateManager.save({ name: 'auth-data', value: data });
                        // this.identity = data.Details;
                        // this.authState = this.identity ? true : false;
                        resolve(response);
                    } else {
                        reject(response);
                    }
                },
                error => reject(error)
            );
        });
    }

}