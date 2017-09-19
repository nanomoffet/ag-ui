import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RecordRoutingModule} from './record-routing.module';
import { RecordComponent } from './record.component';

@NgModule({
  imports: [
    SharedModule,
    RecordRoutingModule
  ],
  declarations: [RecordComponent]
})
export class RecordModule { }
