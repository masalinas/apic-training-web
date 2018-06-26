import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, OrderComponent],
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }