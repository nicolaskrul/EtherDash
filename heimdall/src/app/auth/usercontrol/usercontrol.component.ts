import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Anonymous, User} from '../UserTypes.class';
import {CardUnitComponent} from '../../tools/card-tools/card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'app-usercontrol',
  templateUrl: 'usercontrol.component.html',
  styleUrls: ['usercontrol.component.css'],
  directives: [CardUnitComponent],
  providers: [AuthService]
})
export class UsercontrolComponent{

    public Users: User[] = [];

    public user = new Anonymous('','');
    public errorMsg = '';

    constructor(private _service:AuthService) { }



    getAllUsers(){
      this._service.getUsers()
          .subscribe(
              data => {
                  console.log("returned data: ", data);
                  this.Users = data;
                  console.log('this.checklistUsers: ' + JSON.stringify(this.Users));
                  console.log(this.Users[0].username);
              },
              error => {
                  console.error('Error: ' + error);
              });

    }

    sendUser(_user:User) {
      this._service.registerUser(_user)
          .subscribe(
              data => {
                  console.log("returned data: ", data);
              },
              error => {
                  console.error('Error: ' + error);
              });
    }

    addUser(_user: User) {
      this.Users.push(_user);
      this.sendUser(_user);
     // this._user = new User;
    }

    updateUser(updatedUser: User) {
      this._service.updateUser(updatedUser)
      .subscribe(
          data => {
              console.log("returned data: ", data);
          },
          error => {
              console.error('Error: ' + error);
          });
      }


    deleteUser(index: number){
        console.log(index);
        this._service.deleteUser(this.Users[index])
            .subscribe(
                data => {
                    console.log("returned data: ", data);
                    this.getAllUsers();
                },
                error => {
                    console.error('Error: ' + error);
                });
           }

}
