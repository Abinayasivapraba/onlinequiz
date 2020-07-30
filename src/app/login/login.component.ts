import { Component, OnInit } from '@angular/core';
import { Login } from '../app.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo: Login = {};

  constructor(
    private appService: AppService,
    private ngxService: NgxUiLoaderService,
    private toastrService: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  login() {
    this.ngxService.start();
    this.appService.login(this.loginInfo).subscribe(res => {
      this.appService.setUserName(this.loginInfo.username);
      this.appService.refreshUser();
      this.router.navigate(['/dashboard']);
      this.toastrService.success("Logged in Successfully");
      this.ngxService.stop();
    })



  }

}
