import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userName: string = "";
  private userData = new ReplaySubject<any>(1);


  constructor(
    private http: HttpClient
  ) { }

  login(loginInfo): Observable<any> {
    const postObj = {
      title: loginInfo.username,
      body: loginInfo.username,
      userId: 1,
    }
    return this.http.post(environment.apiUrl,
      postObj, {
        observe: 'response'
      });
  }

  loadDashboardData(): Observable<any> {
    return this.http.get(environment.apiUrl + "/1", {
        observe: "response"
    });
}

  setUserName(userName) {
    this.userName = userName;
    this.refreshUser();
  }

  refreshUser() {
    if (this.userName) {
      this.userData.next(this.userName);
    }
    else {
      this.userData.next(null);
    }
    return this.userData.asObservable();
  }

}
