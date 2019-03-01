import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { InformationComponent } from '../contact/information/information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [TableComponent, FormDialogComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgxDatatableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    ContactModule
  ],
  entryComponents:[
    FormDialogComponent
  ]
})
export class FormModule { }
