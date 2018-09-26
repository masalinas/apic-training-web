/* tslint:disable */
import {
  Order,
  Product,
  Stock
} from '../index';

declare var Object: any;
export interface OrderLineInterface {
  "line": number;
  "quantity": number;
  "id"?: number;
  "orderId"?: number;
  "productId"?: number;
  order?: Order;
  product?: Product;
  stocks?: Stock[];
}

export class OrderLine implements OrderLineInterface {
  "line": number;
  "quantity": number;
  "id": number;
  "orderId": number;
  "productId": number;
  order: Order;
  product: Product;
  stocks: Stock[];
  constructor(data?: OrderLineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrderLine`.
   */
  public static getModelName() {
    return "OrderLine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrderLine for dynamic purposes.
  **/
  public static factory(data: OrderLineInterface): OrderLine{
    return new OrderLine(data);
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
      name: 'OrderLine',
      plural: 'orderLines',
      path: 'orderLines',
      idName: 'id',
      properties: {
        "line": {
          name: 'line',
          type: 'number'
        },
        "quantity": {
          name: 'quantity',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "orderId": {
          name: 'orderId',
          type: 'number'
        },
        "productId": {
          name: 'productId',
          type: 'number'
        },
      },
      relations: {
        order: {
          name: 'order',
          type: 'Order',
          model: 'Order',
          relationType: 'belongsTo',
                  keyFrom: 'id',
          keyTo: 'id'
        },
        product: {
          name: 'product',
          type: 'Product',
          model: 'Product',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
        stocks: {
          name: 'stocks',
          type: 'Stock[]',
          model: 'Stock',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'orderLineId'
        },
      }
    }
  }
}
