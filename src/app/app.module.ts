import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ResultRowComponent} from './components/result-row/result-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultRowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
