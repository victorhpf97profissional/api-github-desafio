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

  getAllUsers() {
    this.serviceUser.getAll().subscribe(users => {
      this.listUsers = users;
      console.warn({ users: users })
    });
  }

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
