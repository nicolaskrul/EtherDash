import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Anonymous, User} from './UserTypes.class';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import hGlobals = require('..//globals');

// const  users = [
//   new Anonymous('a','a'),
//   new Anonymous('s','s')
// ];



@Injectable()
export class AuthService {

    Users: User[] =  [];

    constructor(
        private _router: Router, private http: Http){

        }

    logout() {
        console.log("Logout Succesful!");
        this._router.navigate(['login']);
    }

    login(_user:User): Observable<User[]>  {
        let userUrl = hGlobals.DOMAIN_URL + 'login/'
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(_user);
        return this.http
            .post(userUrl, body, options)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }



    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    // get all objects from collection
    public getUsers(): Observable<User[]> {
        let userUrl = hGlobals.DOMAIN_URL + 'users/all'
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
            return this.http
                .get(userUrl)
                .map(res => {
                    // console.log("res json", res.json());
                    return res.json();
                })
                .catch(this.handleError);
    }

    // Add single objects from collection
    public postUser(_user:User): Observable<User[]>  {
        let userUrl = hGlobals.DOMAIN_URL + 'users/'
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(_user);
        return this.http
            .post(userUrl, body, options)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }

    updateUser(_user:User): Observable<User>  {
        let userUrl = hGlobals.DOMAIN_URL + 'users/'
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(_user);
        return this.http
            .put(userUrl, body, options)
            .map(res => {
                console.log(res);
                return res.json()
            })
            .catch(this.handleError);
    }

    deleteUser(_user: User): Observable<User> {
        console.log("Service user: ", _user)
        let userUrl = hGlobals.DOMAIN_URL + 'users/' + _user._id;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http
            .delete(userUrl, options)
            .map(res => {
                console.log("res:", res);
                return res.json()
            })
            .catch(this.handleError);
    }
}
