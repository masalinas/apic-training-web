/* tslint:disable */
import {
  OrderLine
} from '../index';

declare var Object: any;
export interface OrderInterface {
  "id": number;
  "code": string;
  "client": string;
  "shippingDate"?: Date;
  "note"?: string;
  "status": number;
  orderLines?: OrderLine[];
}

export class Order implements OrderInterface {
  "id": number;
  "code": string;
  "client": string;
  "shippingDate": Date;
  "note": string;
  "status": number;
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "client": {
          name: 'client',
          type: 'string'
        },
        "shippingDate": {
          name: 'shippingDate',
          type: 'Date'
        },
        "note": {
          name: 'note',
          type: 'string'
        },
        "status": {
          name: 'status',
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
