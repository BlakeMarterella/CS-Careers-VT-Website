// Angular Modules
import { NgModule } from '@angular/core';

// App Component and Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core Module
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
