/* tslint:disable */
import {
  OrderLine
} from '../index';

declare var Object: any;
export interface OrderInterface {
  "code": string;
  "client": string;
  "note"?: string;
  "shippingDate"?: Date;
  "status": number;
  "id"?: number;
  orderLines?: OrderLine[];
}

export class Order implements OrderInterface {
  "code": string;
  "client": string;
  "note": string;
  "shippingDate": Date;
  "status": number;
  "id": number;
  orderLines: OrderLine[];
  constructor(data?: OrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Order`.
   */
  public static getModelName() {
    return "Order";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Order for dynamic purposes.
  **/
  public static factory(data: OrderInterface): Order{
    return new Order(data);
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
      name: 'Order',
      plural: 'orders',
      path: 'orders',
      idName: 'id',
      properties: {
        "code": {
          name: 'code',
          type: 'string'
        },
        "client": {
          name: 'client',
          type: 'string'
        },
        "note": {
          name: 'note',
          type: 'string'
        },
        "shippingDate": {
          name: 'shippingDate',
          type: 'Date'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        orderLines: {
          name: 'orderLines',
          type: 'OrderLine[]',
          model: 'OrderLine',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'orderId'
        },
      }
    }
  }
}
