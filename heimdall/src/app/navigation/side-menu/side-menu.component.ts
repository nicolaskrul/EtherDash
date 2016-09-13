import { Component, OnInit, Input} from '@angular/core';
import { AuthService} from '../../auth/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[AuthService]
})
export class SideMenuComponent implements OnInit {

    constructor(private _service:AuthService){

    }

    logout(){
      this._service.logout();
    }

    ngOnInit() {
    }

}
