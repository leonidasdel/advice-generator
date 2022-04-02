import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdviceSlipComponent } from './advice-slip/advice-slip.component';

@NgModule({
  declarations: [
    AppComponent,
    AdviceSlipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
