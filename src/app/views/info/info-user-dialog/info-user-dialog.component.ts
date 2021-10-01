import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/github/users.service';


@Component({
  selector: 'app-info-user-dialog',
  templateUrl: './info-user-dialog.component.html',
  styleUrls: ['./info-user-dialog.component.scss']
})
export class InfoUserDialogComponent implements OnInit {
  public userInfo: any = { user: null, repository: [], followers: [] };

  @Input() show = false;
  @Input() data: any;
  @Output() showChange = new EventEmitter();

  constructor(
    private serviceUser: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userName = this.data
    this.validParameters(userName);
  }

  validParameters(userName: string) {
    if (userName) {
      this.loadUserByName(userName);
      this.loadUserFollowers(userName);
      this.loadUserRepository(userName);
    }
    else {
      this.router.navigate(['**']);
    }
  }

  loadUserByName(userName: string) {
    this.serviceUser.getByName(userName).subscribe((user: any) => {
      this.userInfo.user = user;
    }, err => {
      this.router.navigate(['**']);
    });
  }

  loadUserRepository(userName: string) {
    this.serviceUser.getRepository(userName).subscribe(repository => {
      this.userInfo.repository = this.orderRepositoryByStars(repository);;
      console.log(this.userInfo.repository)
    });
  }

  loadUserFollowers(userName: string) {
    this.serviceUser.getFollowers(userName).subscribe(followers => {
      this.userInfo.followers = followers;
    });
  }

  orderRepositoryByStars(repository: any) {
    return repository.sort((a: any, b: any) => { return b.stargazers_count - a.stargazers_count });
  }

  back() {
    this.showChange.emit(true);
  }

}
