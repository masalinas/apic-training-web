/* tslint:disable */

declare var Object: any;
export interface WeatherInterface {
  "name": string;
  "value": string;
  "id"?: number;
}

export class Weather implements WeatherInterface {
  "name": string;
  "value": string;
  "id": number;
  constructor(data?: WeatherInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Weather`.
   */
  public static getModelName() {
    return "Weather";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Weather for dynamic purposes.
  **/
  public static factory(data: WeatherInterface): Weather{
    return new Weather(data);
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
      name: 'Weather',
      plural: 'weathers',
      path: 'weathers',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "value": {
          name: 'value',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
