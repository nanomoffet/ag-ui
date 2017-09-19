import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'index', redirectTo: '/', pathMatch: 'full'},
  {path: '', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'account', loadChildren: 'app/account/account.module#AccountModule'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  {path: 'illrequest', loadChildren: 'app/ill-request/ill-request.module#IllRequestModule'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'mylist', loadChildren: 'app/my-list/my-list.module#MyListModule'},
  {path: 'hold', loadChildren: 'app/place-hold/place-hold.module#PlaceHoldModule'},
  {path: 'details', loadChildren: 'app/record/record.module#RecordModule'},
  {path: 'search', loadChildren: 'app/search/search.module#SearchModule'},
  {path: 'signup', loadChildren: 'app/signup/signup.module#SignupModule'},
  {path: 'register', redirectTo: '/signup', pathMatch: 'full'},
  {path: '**', redirectTo: '404'},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
