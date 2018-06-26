import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import es from '@angular/common/locales/es';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from './shared/sdk/index';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent, 
    ProductComponent, 
    OrderComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }