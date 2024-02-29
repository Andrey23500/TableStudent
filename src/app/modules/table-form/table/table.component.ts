import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";
import { Student } from "../../../models/student";
import { StudentService } from "src/app/service/student.service";
import { MatTableDataSource } from "@angular/material/table";
import { RxUnsubscribe } from "src/app/rx-unsubscribe";
import { MatDialog } from "@angular/material/dialog";
import { DeleteComponent } from "src/app/components/delete/delete.component";
import { AddEditComponent } from "src/app/components/add-edit/add-edit.component";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./table.component.css"],
})
export class TableComponent extends RxUnsubscribe implements OnInit {
  studentsTable!: MatTableDataSource<Student>;
  clearStudentsTable!: MatTableDataSource<Student>;
  validScore: boolean = false;
  filterForm = new FormGroup({
    name: new FormControl(''),
    dateMin: new FormControl(''),
    dateMax: new FormControl(''),
    minScore: new FormControl(''),
    maxScore: new FormControl(''),
  })
  displayedColumns: string[] = ['position', 'name', 'surname', 'dateExam', 'score', 'delete'];
  constructor(
    private service: StudentService,
    private cdr: ChangeDetectorRef,
    private dialogMode: MatDialog,
  ) {
    super();
  }

  ngOnInit(): void {
    this.service.getStudents().subscribe((data) => {
      this.studentsTable = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
      this.clearStudentsTable = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
      this.cdr.detectChanges();
    });
  }

  addStudent(): void {
    let dialogRef = this.dialogMode.open(AddEditComponent, {});
    dialogRef.afterClosed().subscribe((student) => {
      if (student) this.service.addStudent(student);
    });
  }

  deleteStudent(student: Student): void {
    let dialogRef = this.dialogMode.open(DeleteComponent, {});
    dialogRef.afterClosed().subscribe((res) => {
      if (res == 'true') this.service.deleteStudent(student.id);
    });
  }

  editStudent(student: Student): void {
    let dialogRef = this.dialogMode.open(AddEditComponent, {
      data: student,
    });
    dialogRef.afterClosed().subscribe((student) => {
      if (student) this.service.editStudent(student);
    });
  }

  nameFilter(value: string): void {
    this.studentsTable.filter = value.trim().toLocaleLowerCase();
  }

  scoreFilter(minScore: string, maxScore: string): void {
    if (maxScore && maxScore) {
      this.studentsTable.data = this.clearStudentsTable.data;
      this.studentsTable.data = this.studentsTable.data.filter((el) => el.score >= +minScore && el.score <= +maxScore);
    }
  }

  dateFilter(dataMin: string, dataMax: string): void {
    if (dataMin && dataMax) {
      this.studentsTable.data = this.clearStudentsTable.data;
      const correctMinDate = new Date(dataMin);
      const correctMaxDate = new Date(dataMax);
      this.studentsTable.data = this.studentsTable.data.filter((el) => {
        const currentDate = new Date(Number(JSON.stringify(el.dateExam).split(",")[0].split(":")[1]) * 1000);
        return currentDate.getTime() >= correctMinDate.getTime() && currentDate.getTime() <= correctMaxDate.getTime();
      });
    }
  }

  clearFilters(): void {
    this.studentsTable.data = this.clearStudentsTable.data;
    this.filterForm.reset();
    this.validScore = false;
  }

  isvalidScore(): void {
    this.validScore = !this.validScore;
  }
}

