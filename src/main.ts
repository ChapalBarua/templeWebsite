import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
import { License_key } from "../../TempleServer/helpers/secrets/secret_keys_ui";

if (environment.production) {
  enableProdMode();
}

registerLicense(License_key);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
