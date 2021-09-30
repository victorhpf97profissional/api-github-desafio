import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/github/users.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  public userInfo: any = { user: null, repository: null, followers: null };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceUser: UsersService,
  ) { }

  ngOnInit(): void {
    const userName = this.route.snapshot.params.username;
    this.validParameters(userName);
  }

  validParameters(userName: string) {
    if (userName) {
      this.loadUserByName(userName);
      this.loadUserRepository(userName);
      this.loadUserFollowers(userName);
    }
    else {
      this.router.navigate(['/pesquisa']);
    }
  }

  loadUserByName(userName: string) {
    this.serviceUser.getByName(userName).subscribe((user: any) => {
      this.userInfo.user = user;
    }, err => {
      this.router.navigate(['error/', err.status]);
    });
  }

  loadUserRepository(userName: string) {
    this.serviceUser.getRepository(userName).subscribe(repository => {
      this.userInfo.repository = repository;
      console.warn({ repository: repository })
    });
  }

  loadUserFollowers(userName: string) {
    this.serviceUser.getFollowers(userName).subscribe(followers => {
      this.userInfo.followers = followers;
    });
  }


}
