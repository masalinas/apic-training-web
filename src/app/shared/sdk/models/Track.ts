/* tslint:disable */

declare var Object: any;
export interface TrackInterface {
  "model": string;
  "method": string;
  "trace": string;
  "date"?: Date;
  "id"?: number;
}

export class Track implements TrackInterface {
  "model": string;
  "method": string;
  "trace": string;
  "date": Date;
  "id": number;
  constructor(data?: TrackInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Track`.
   */
  public static getModelName() {
    return "Track";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Track for dynamic purposes.
  **/
  public static factory(data: TrackInterface): Track{
    return new Track(data);
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
      name: 'Track',
      plural: 'tracks',
      path: 'tracks',
      idName: 'id',
      properties: {
        "model": {
          name: 'model',
          type: 'string'
        },
        "method": {
          name: 'method',
          type: 'string'
        },
        "trace": {
          name: 'trace',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
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
