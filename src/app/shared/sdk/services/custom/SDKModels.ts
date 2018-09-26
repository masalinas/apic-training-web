/* tslint:disable */
import { Injectable } from '@angular/core';
import { Principal } from '../../models/Principal';
import { Order } from '../../models/Order';
import { OrderLine } from '../../models/OrderLine';
import { Product } from '../../models/Product';
import { Stock } from '../../models/Stock';
import { Track } from '../../models/Track';
import { Weather } from '../../models/Weather';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Principal: Principal,
    Order: Order,
    OrderLine: OrderLine,
    Product: Product,
    Stock: Stock,
    Track: Track,
    Weather: Weather,
    
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
