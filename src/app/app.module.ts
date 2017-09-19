import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestModule} from 'ag-vdl';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {AccountModule} from './account/account.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {IllRequestModule} from './ill-request/ill-request.module';
import {LoginModule} from './login/login.module';
import {MyListModule} from './my-list/my-list.module';
import {PlaceHoldModule} from './place-hold/place-hold.module';
import {RecordModule} from './record/record.module';
import {SearchModule} from './search/search.module';
import {SignupModule} from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    TestModule,
    HomeModule,
    AccountModule,
    DashboardModule,
    IllRequestModule,
    LoginModule,
    MyListModule,
    PlaceHoldModule,
    RecordModule,
    SearchModule,
    SignupModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
