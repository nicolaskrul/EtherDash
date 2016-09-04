
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(_task);
        return this.http
            .put(taskUrl, body, options)
            .map(res => {
                console.log(res);
                return res.json()
            })
            .catch(this.handleError);
    }
}
