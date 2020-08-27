import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './page/login/login.component';
import { IndexComponent } from './page/index/index.component';
import { SystemComponent } from './page/index/system/system.component';
import { HomeComponent } from './page/index/home/home.component';
import { HomeTextComponent } from './page/index/home/home-text/home-text.component';
import { SystemUserComponent } from './page/index/system/system-user/system-user.component';
import { SystemGroupComponent } from './page/index/system/system-group/system-group.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'home-text',
            component: HomeTextComponent,
          },
          { path: '**', redirectTo: 'home-text', pathMatch: 'full' },
        ],
      },
      {
        path: 'system',
        component: SystemComponent,
        children: [
          {
            path: 'system-user',
            component: SystemUserComponent,
          },
          { path: 'system-group', component: SystemGroupComponent },
        ],
      },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
