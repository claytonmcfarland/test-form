import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { InformationComponent } from './information/information.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    InformationComponent
  ]
})
export class ContactModule { }
