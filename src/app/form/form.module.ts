import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgxDatatableModule
  ]
})
export class FormModule { }
