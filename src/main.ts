import { bootstrapApplication, provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';


  bootstrapApplication(AppComponent,
    {
      providers: [
        provideProtractorTestingSupport(),
        provideClientHydration(), 
        provideRouter(routeConfig),
        provideAnimations(),
      ]
    }
  ).catch(err => console.error(err));