import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/learn/learn.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { providePrimeNG } from 'primeng/config'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
];

export const appConfig : ApplicationConfig= {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(), // Agregando animaciones
    providePrimeNG({ 
     theme: {
        preset: Aura,
       options: {
            darkModeSelector: false || 'none'}},
    })
  ],
  
};
 bootstrapApplication(LearnComponent, appConfig).catch((err) =>
    console.error(err)
);


