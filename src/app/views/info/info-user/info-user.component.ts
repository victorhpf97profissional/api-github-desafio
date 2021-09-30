import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/github/users.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

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
    }
    else {
      this.router.navigate(['/pesquisa']);
    }
  }

  loadUserByName(userName: string) {
    this.serviceUser.getByName(userName).subscribe((user: any) => {
      console.log(user)
    }, err => {
      this.router.navigate(['error/', err.status]);
    });
  }

}
