import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Anonymous} from './UserTypes.class';

const  users = [
  new Anonymous('a','a'),
  new Anonymous('s','s')
];

@Injectable()
export class AuthService {

    constructor(
        private _router: Router){

        }

    logout() {
        console.log("Logout Succesful!");
        this._router.navigate(['login']);
    }

    login(user){
        var authenticatedUser = users.find(u => u.username === user.username);
        if (authenticatedUser && authenticatedUser.password === user.password){
            console.log(authenticatedUser);
            this._router.navigate(['global']);
        }
    }
}
