import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './app.constants';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderRouterModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
