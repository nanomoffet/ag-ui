import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MyListRoutingModule} from './my-list-routing.module';
import { MyListComponent } from './my-list.component';

@NgModule({
  imports: [
    SharedModule,
    MyListRoutingModule
  ],
  declarations: [MyListComponent]
})
export class MyListModule { }
