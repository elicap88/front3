import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/payments', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'payments', component: PaymentsComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'profile', component: ProfileComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
