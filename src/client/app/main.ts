import { APP_BASE_HREF } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS, Http } from '@angular/http';

import {  TRANSLATE_PROVIDERS,
          TranslateService,
          TranslateLoader,
          TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';


if ('<%= ENV %>' === 'prod') { enableProdMode(); }


bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  {
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, '../assets/i18n', '.json'),
    deps: [Http]
  },
  TranslateService,
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }
]);
