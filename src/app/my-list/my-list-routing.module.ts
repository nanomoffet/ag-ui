import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyListComponent} from './my-list.component';

const myListRoutes: Routes = [
  {path: '', component: MyListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(myListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyListRoutingModule {
}
