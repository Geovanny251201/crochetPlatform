import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, appConfig);