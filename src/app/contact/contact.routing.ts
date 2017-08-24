import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const contactRoutes: Routes = [
  {path: '', component: ContactComponent, children: [
    { path: '', component: ContactSectionComponent}
  ]}
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);
