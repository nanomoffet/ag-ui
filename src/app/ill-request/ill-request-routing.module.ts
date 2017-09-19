import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IllRequestComponent} from './ill-request.component';

const illRequestRoutes: Routes = [
  {path: '', component: IllRequestComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(illRequestRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IllRequestRoutingModule {
}
