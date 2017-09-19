import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {IllRequestRoutingModule} from './ill-request-routing.module';
import { IllRequestComponent } from './ill-request.component';

@NgModule({
  imports: [
    SharedModule,
    IllRequestRoutingModule
  ],
  declarations: [IllRequestComponent]
})
export class IllRequestModule { }
