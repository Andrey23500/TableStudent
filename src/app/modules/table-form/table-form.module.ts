import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalizePipe, RoundPipe } from "./table/pipes";
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaptionDirective, DateDirective } from "./table/directives";
import { RouterModule } from "@angular/router";
import { StudentService } from "src/app/service/student.service";
import { AddEditComponent } from "src/app/components/add-edit/add-edit.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    CapitalizePipe,
    CaptionDirective,
    DateDirective,
    RoundPipe,
    TableComponent,

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
