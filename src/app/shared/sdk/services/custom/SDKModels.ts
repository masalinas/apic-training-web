/* tslint:disable */
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderLine } from '../../models/OrderLine';
import { Product } from '../../models/Product';
import { Stock } from '../../models/Stock';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Order: Order,
    OrderLine: OrderLine,
    Product: Product,
    Stock: Stock,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
