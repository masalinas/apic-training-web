import { Component, OnInit } from '@angular/core';

import { BASE_URL, API_VERSION, CLIENT_ID, CLIENT_SECRET} from './shared/sdk/base.url';
import { LoopBackConfig, LoggerService } from './shared/sdk/';

import { Principal, AccessToken } from './shared/sdk/models';
import { PrincipalApi } from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  accessToken : AccessToken;

  constructor(private log: LoggerService, private principalApi: PrincipalApi) {
    // configure the loggin service
    LoopBackConfig.setDebugMode(false); // defaults true
    this.log.info('Component is Loaded');

    // configure the api back-end
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
    // auto-login with admin user
    /*this.principalApi.login({"email": "admin@thingtrack.com", 
                             "password": "thingtrack"}).subscribe((result: AccessToken) => {*/
    this.principalApi.login({"email": "admin@thingtrack.com", 
                             "password": "thingtrack"}, "user", true, 
                             function(headers) {
                                  headers = headers.append('x-ibm-client-id', CLIENT_ID);
                                  headers = headers.append('x-ibm-client-secret', CLIENT_SECRET);
                                  return headers}).subscribe((result: AccessToken) => {                               
      this.accessToken = result;
    });
  } 
}