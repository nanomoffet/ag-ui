import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {PlaceHoldRoutingModule} from './place-hold-routing.module';
import { PlaceHoldComponent } from './place-hold.component';

@NgModule({
  imports: [
    SharedModule,
    PlaceHoldRoutingModule
  ],
  declarations: [PlaceHoldComponent]
})
export class PlaceHoldModule { }
