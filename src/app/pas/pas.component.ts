import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './pas-menu';

@Component({
  selector: 'ngx-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.scss'],
})
export class PASComponent {

  router : Router;
  constructor(private _router: Router){

    this.router = _router; 
    console.log(this.router);
}
}

