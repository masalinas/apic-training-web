import { Component } from '@angular/core';

import { BASE_URL, API_VERSION } from './shared/sdk/base.url';
import { LoopBackConfig, LoggerService } from './shared/sdk/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css',
              './app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private log: LoggerService) {
    // configure the loggin service
    LoopBackConfig.setDebugMode(false); // defaults true
    this.log.info('Component is Loaded');

    // configure the api back-end
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }
}