import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaceHoldComponent} from './place-hold.component';

const placeHoldRoutes: Routes = [
  {path: '', component: PlaceHoldComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(placeHoldRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlaceHoldRoutingModule {
}
