import { Component, OnInit } from '@angular/core';

import { BASE_URL, API_VERSION } from '../shared/sdk/base.url';
import { LoopBackConfig, LoggerService } from '../shared/sdk/';

import { Product } from '../shared/sdk/models';
import { ProductApi } from '../shared/sdk/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // All the types you need already there
  private products : Product[];
  private displayProducts: Product[];

  private sortName = null;
  private sortValue = null;

  // Configure LoopBack Once or Individually by Component
  constructor(private productApi: ProductApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
      // recover all products
      this.productApi.find().subscribe((result: Product[]) => {
        this.products = result;    
        this.displayProducts = [ ...this.products ]
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
      this.displayProducts = this.products.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayProducts = this.products;
    }
  }
}
