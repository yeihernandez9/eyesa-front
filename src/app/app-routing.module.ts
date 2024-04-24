import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full' 
},
{
    path: 'login',
    component: LoginComponent,
},
{
    path: 'register',
    component: RegisterComponent,
},
{
    path: '',
    component: LayoutComponent,
    children:[
        {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [authGuard]
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
