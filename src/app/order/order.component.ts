import { Component, OnInit } from '@angular/core';

import { BASE_URL, API_VERSION } from '../shared/sdk/base.url';
import { LoopBackConfig, LoggerService } from '../shared/sdk/';

import { Order } from '../shared/sdk/models';
import { OrderApi } from '../shared/sdk/services';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // All the types you need already there
  orders : Order[];
  displayOrders: Order[];

  sortName = null;
  sortValue = null;

  constructor(private orderApi: OrderApi) {
    // Configure LoopBack Once or Individually by Component
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
    // recover all orders
    this.orderApi.find().subscribe((result: Order[]) => {
      this.orders = result;    
      this.displayOrders = [ ...this.orders ]
    });
  }

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;

    this.search();
  }

  search(): void {
    /** filter data **/
    /*const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));*/

    /** sort data **/
    if (this.sortName) {
      this.displayOrders = this.orders.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayOrders = this.orders;
    }
  }
}
