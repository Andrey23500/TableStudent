import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

const itemsMaterial = [
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatTabsModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatProgressBarModule,
  MatCardModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, itemsMaterial],
  exports: [itemsMaterial],
})
export class MaterialModule { }
