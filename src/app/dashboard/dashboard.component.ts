import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardDetails: any = {};

  constructor(
    private appService: AppService,
    private ngxService: NgxUiLoaderService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadDashboardData()
  }

  loadDashboardData() {
    this.ngxService.start();
    this.appService.loadDashboardData().subscribe(res => {
       let data = res.body;
       this.dashboardDetails = {
         userId: data.userId,
         id: data.id,
         title: data.title,
         body: data.body
       }
    }, err => {
      this.toastrService.error("Oops something went wrong, please try again..")
      this.ngxService.stop();
  }, () => {
      this.ngxService.stop();
  })
  }

}
