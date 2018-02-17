import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { InfoComponent } from './info/info.component';
import { PlacesComponent } from './places/places.component';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    InfoComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }