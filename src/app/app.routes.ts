import { Routes } from '@angular/router';
import { TalkComponent } from './app/component/talk/talk.component';
import { LoginPrepComponent } from './app/component/login-prep/login-prep.component';
import { DashboardComponent } from './app/component/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'talk', component: TalkComponent },
  { path: 'login-prep', component: LoginPrepComponent },
  { path: 'dashboard', component: DashboardComponent },
];
