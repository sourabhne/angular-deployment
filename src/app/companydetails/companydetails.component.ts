import { UserService } from './../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css'],
  providers:[UserService]
})
export class CompanydetailsComponent implements OnInit {

  user; // property to hold our user when we eventually grab them from github api

  // inject the things we need
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  // watch the route parameters for changes
  // every time it changes (or on first load), go get a user from userservice
  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    });
  }
}

