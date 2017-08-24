import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', loadChildren:'./contact/contact.module#ContactModule'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
