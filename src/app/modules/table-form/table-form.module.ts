import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConvertDate } from "./table/pipes";
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaptionDirective, DateDirective } from "./table/directives";
import { RouterModule } from "@angular/router";
import { StudentService } from "src/app/service/student.service";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    CaptionDirective,
    DateDirective,
    TableComponent,
    ConvertDate
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [TableComponent],

  providers: [StudentService],
})
export class TableFormModule { }
