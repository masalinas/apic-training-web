/* tslint:disable */
import {
  Product
} from '../index';

declare var Object: any;
export interface StockInterface {
  "id": number;
  "quantity": number;
  "status": number;
  "productId"?: number;
  "orderLineId"?: number;
  product?: Product;
}

export class Stock implements StockInterface {
  "id": number;
  "quantity": number;
  "status": number;
  "productId": number;
  "orderLineId": number;
  product: Product;
  constructor(data?: StockInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Stock`.
   */
  public static getModelName() {
    return "Stock";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Stock for dynamic purposes.
  **/
  public static factory(data: StockInterface): Stock{
    return new Stock(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Stock',
      plural: 'stocks',
      path: 'stocks',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "quantity": {
          name: 'quantity',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "productId": {
          name: 'productId',
          type: 'number'
        },
        "orderLineId": {
          name: 'orderLineId',
          type: 'number'
        },
      },
      relations: {
        product: {
          name: 'product',
          type: 'Product',
          model: 'Product',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
      }
    }
  }
}
