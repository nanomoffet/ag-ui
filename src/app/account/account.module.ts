import { NgModule } from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AccountComponent} from './account.component';
import { TestAccountComponent } from './test-account/test-account.component';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, TestAccountComponent]
})
export class AccountModule { }
