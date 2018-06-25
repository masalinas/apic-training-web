/* tslint:disable */

declare var Object: any;
export interface ProductInterface {
  "id": number;
  "code": string;
  "description": string;
  "price": number;
  "active": boolean;
}

export class Product implements ProductInterface {
  "id": number;
  "code": string;
  "description": string;
  "price": number;
  "active": boolean;
  constructor(data?: ProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Product for dynamic purposes.
  **/
  public static factory(data: ProductInterface): Product{
    return new Product(data);
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
      name: 'Product',
      plural: 'products',
      path: 'products',
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
        "description": {
          name: 'description',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "active": {
          name: 'active',
          type: 'boolean'
        },
      },
      relations: {
      }
    }
  }
}
