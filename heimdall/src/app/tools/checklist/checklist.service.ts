
import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
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
                .catch(this.handleError);;
    }


//   // addTask() {
//   //   return this.http.post('api/tasks')
//   //     .map(response => response.json());
//   // }
// }
}
