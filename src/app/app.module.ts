import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreenBoxComponent } from './green-box/green-box.component';
import { RedBoxComponent } from './red-box/red-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenBoxComponent,
    RedBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
