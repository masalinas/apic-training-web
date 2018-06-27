import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';

import { AppComponent } from './app.component';

/** config App Loopback services **/
import { SDKBrowserModule } from './shared/sdk/index';

/** config App Components **/
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

/** config angular i18n **/
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
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
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }