import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/github/users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  public listUsers: any = null;
  public showInfoUserDialog = false;
  public dataInfoUserDialog: string = '';

  constructor(private serviceUser: UsersService, private router: Router,) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //Get all users of api Github
  getAllUsers() {
    this.serviceUser.getAll().subscribe(users => {
      this.listUsers = users;
      console.warn({ users: users })
    });
  }

  //Select a user for get a single user of api Github
  selectUser(userName: any) {
    this.router.navigate(['/informacoes/usuario'], userName);
  }

  closeInfoUserDialog() {
    this.showInfoUserDialog = false;
  }

  openInfoUserDialog(userName: string) {
    this.dataInfoUserDialog = userName;
    this.showInfoUserDialog = true;

  }

}
