import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser;

  constructor(
    private authenticationService: AuthServiceService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    if (this.authenticationService.demoCurrentUserValue) {

      this.currentUser = this.authenticationService.demoCurrentUserValue
    } else this.logout()
  }

  logout() {

    this.authenticationService.logout(this.authenticationService.demoCurrentUserValue)
    this.router.navigate(['/auth/login']);

  }
}
