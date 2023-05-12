import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Guard and 404 component
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [
    PageNotFoundComponent,
  ],
  exports: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard{ 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Use the EnsureModuleLoadedOnceGuard constructor to check that the core module was not imported outside of root
    super(parentModule);
  }
}
