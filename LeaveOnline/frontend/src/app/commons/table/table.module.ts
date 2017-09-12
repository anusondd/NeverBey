import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, SharedModule } from "primeng/primeng";
import { TableComponent } from "app/commons/table/table.component";

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
  ],
  declarations: [TableComponent],
  exports:[TableComponent]
})
export class TableModule { }
