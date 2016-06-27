import { Component, Injectable } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HTTP_PROVIDERS } from '@angular/http';


import {  TRANSLATE_PROVIDERS,
          TranslateService,
          TranslatePipe,
          TranslateLoader,
          TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})

export class AppComponent {

  constructor(translate: TranslateService) {

    console.log('Environment config', Config);

    let userLang = navigator.language.split('-')[0];

    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);

  }
}
