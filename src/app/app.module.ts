import { HttpClientModule } from '@angular/common/http';
import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { remult } from 'remult';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(zone: NgZone){
    remult.apiClient.wrapMessageHandling = (handler) => 
    zone.run(() => handler())
  }
}
