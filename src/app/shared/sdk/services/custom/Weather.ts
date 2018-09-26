/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../../models/Weather';
import { SocketConnection } from '../../sockets/socket.connections';


/**
 * Api services for the `Weather` model.
 *
 * **Details**
 *
 * Weather Service
 */
@Injectable()
export class WeatherApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  /**
   * Returns National Weather Service digital weather forecast data
   *
   * @param {number} latitude Latitude
   *
   * @param {number} longitude Longitude
   *
   * @param {string} product Product
   *
   * @param {date} startTime Start time
   *
   * @param {date} endTime End time
   *
   * @param {string} unit Unit
   *
   * @param {any} weatherParameters Weather Parameters
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Weather` object.)
   * </em>
   */
  public getWeatherForecastData(latitude: any = {}, longitude: any = {}, product: any = {}, startTime: any = {}, endTime: any = {}, unit: any = {}, weatherParameters: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/weathers/get-weather-forecast-data";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof latitude !== 'undefined' && latitude !== null) _urlParams.latitude = latitude;
    if (typeof longitude !== 'undefined' && longitude !== null) _urlParams.longitude = longitude;
    if (typeof product !== 'undefined' && product !== null) _urlParams.product = product;
    if (typeof startTime !== 'undefined' && startTime !== null) _urlParams.startTime = startTime;
    if (typeof endTime !== 'undefined' && endTime !== null) _urlParams.endTime = endTime;
    if (typeof unit !== 'undefined' && unit !== null) _urlParams.unit = unit;
    if (typeof weatherParameters !== 'undefined' && weatherParameters !== null) _urlParams.weatherParameters = weatherParameters;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Weather`.
   */
  public getModelName() {
    return "Weather";
  }
}
