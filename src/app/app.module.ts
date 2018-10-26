import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { IssuesComponent } from './components/issue/issues.component';
import { ResponseComponent } from './Components/response/response.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { MessagingService } from './services/messaging.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    IssuesComponent,
    ResponseComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
