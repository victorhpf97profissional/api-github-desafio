import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/github/users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  public listUsers: any = [];
  // public showDialog = true;
  public showInfoUserDialog = true;
  constructor(private serviceUser: UsersService, private router: Router,) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //Get all users of api Github
  getAllUsers() {
    this.serviceUser.getAll().subscribe(users => {
      this.listUsers = users;
    });
  }

  //Select a user for get a single user of api Github
  selectUser(userName: any) {
    this.router.navigate(['/informacoes/usuario'], userName);
  }

  closeInfoUserDialog() {
    this.showInfoUserDialog = false;
  }

  openInfoUserDialog() {
    this.showInfoUserDialog = true;

  }

}
