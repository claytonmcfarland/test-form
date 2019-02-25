import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgxDatatableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class FormModule { }
