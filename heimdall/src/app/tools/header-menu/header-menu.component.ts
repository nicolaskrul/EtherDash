import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth/auth.service';
@Component({
    moduleId: module.id,
    selector: 'app-header-menu',
    templateUrl: 'header-menu.component.html',
    styleUrls: ['header-menu.component.css'],
})
export class HeaderMenuComponent implements OnInit {

    constructor(private _service:AuthService){

    }

    logout(){
        this._service.logout();
    }

    ngOnInit() {
    }

}
