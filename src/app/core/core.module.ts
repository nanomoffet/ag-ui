import {NgModule, Optional, SkipSelf} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [
    AuthGuard,
    AuthService
  ],
  exports: [
    BrowserModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
