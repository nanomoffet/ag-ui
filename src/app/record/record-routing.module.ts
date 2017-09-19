import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecordComponent} from './record.component';

const recordRoutes: Routes = [
  {path: '', component: RecordComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(recordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecordRoutingModule {
}
