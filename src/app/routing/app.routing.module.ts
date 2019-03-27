import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RegisterComponent } from '../register/register.component';
import { ApplicationComponent } from '../application/application.component';
// import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { CategoryArgumentsComponent } from '../category-arguments/category-arguments.component';
import { MsfTestComponent } from '../msf-test/msf-test.component';

export const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'application', component: ApplicationComponent },
  // { path: 'admin-menu', component: AdminMenuComponent },
  { path: 'category-arguments', component: CategoryArgumentsComponent },
  { path: 'app-msf-test', component: MsfTestComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}