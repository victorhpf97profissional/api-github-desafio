import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {

  @Output() showChange = new EventEmitter();


  constructor(private router: Router,) { }


  searchUser(userName: string) {
    this.router.navigate(['/informacoes/usuario', userName]);
  }


}
