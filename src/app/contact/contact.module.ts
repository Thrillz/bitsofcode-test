import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { contactRouting } from './contact.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../shared/services/user.service';

@NgModule ({
  declarations: [
    ContactComponent,
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    contactRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
  ]
})
export class ContactModule {}
