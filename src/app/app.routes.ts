import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { IssuesComponent } from "./components/issue/issues.component";
import { NotificationsComponent } from './Components/notifications/notifications.component';

export const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'issues', component: IssuesComponent},
  {path: 'notification', component: NotificationsComponent},
  {path: '**', redirectTo: 'login', pathMatch:'full'},
];
