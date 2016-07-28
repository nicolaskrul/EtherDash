import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
