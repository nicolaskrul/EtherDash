
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import hGlobals = require('../../globals');
import TodoItem from './TodoItemModel';

@Injectable()
export class ChecklistService {
    tasks: TodoItem[] =  [];

    constructor(private http: Http) {
    //   this.tasks = this.getTasks();
    }
    //
    // private extractData(res: Response) {
    //     let body = res.json();
    //     console.log("Received body: ", body);
    //     return body || [];
    // }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    // get all objects from collection
    getTasks(): Observable<TodoItem[]> {
        let taskUrl = hGlobals.DOMAIN_URL + 'tasks/all'
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
            return this.http
                .get(taskUrl)
                .map(res => {
                    // console.log("res json", res.json());
                    return res.json();
                })
                .catch(this.handleError);
    }

    // Add single objects from collection
    postTask(_task:TodoItem): Observable<TodoItem[]>  {
        let taskUrl = hGlobals.DOMAIN_URL + 'tasks/'
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(_task);
        return this.http
            .post(taskUrl, body, options)
            .map(res => {
                return res.json()
            })
            .catch(this.handleError);
    }

    updateTask(_task:TodoItem): Observable<TodoItem>  {
        let taskUrl = hGlobals.DOMAIN_URL + 'tasks/'
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // 'Access-Control-Request-Method': 'PUT',
        // headers.append('Access-Control-Request-Method', 'PUT');
        // headers.append('Access-Control-Allow-Origin','*');

        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(_task);
        console.log("body: ", body);
        return this.http
            .put(taskUrl, body, {
                headers: headers
            })
            // .put(taskUrl, body, options)
            // .put(taskUrl, body)
            // .put(taskUrl, _task)
            .map(res => {
                console.log(res);
                return res.json()
            })
            .catch(this.handleError);
    }

    deleteTask(_task: TodoItem): Observable<TodoItem> {
        console.log("Service task: ", _task)
        let taskUrl = hGlobals.DOMAIN_URL + 'tasks/' + _task._id;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http
            .delete(taskUrl, options)
            .map(res => {
                console.log("res:", res);
                return res.json()
            })
            .catch(this.handleError);
    }
}
