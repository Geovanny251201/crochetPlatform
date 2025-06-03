import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LearnComponent } from './pages/learn/learn.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta raíz
  { path: 'home', component: HomeComponent }, // Página de inicio
  { path: 'gallery', component: GalleryComponent }, // Página de inicio
  { path: 'contact', component: ContactComponent }, // Página de inicio
  { path: 'learn', component: LearnComponent }, // Página de inicio
];
