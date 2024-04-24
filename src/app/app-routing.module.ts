import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { logoutGuard } from './guards/logout.guard';
import { LayoutPublicComponent } from './pages/layout-public/layout-public.component';
import { LayoutPrivateComponent } from './pages/layout-private/layout-private.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full' 
},
{
    path: '',
    component: LayoutPublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
{
    path: '',
    component: LayoutPrivateComponent,
    canActivate: [authGuard],
    children:[
        {
            path: 'dashboard',
            component: DashboardComponent,
            
        },
        {
          path: 'users',
          component: UsersComponent,
          
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
