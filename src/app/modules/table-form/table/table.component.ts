import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "../../../models/student";
import { StudentService } from "src/app/service/student.service";
import { MatTableDataSource } from "@angular/material/table";
import { RxUnsubscribe } from "src/app/rx-unsubscribe";
import { MatDialog } from "@angular/material/dialog";
import { DeleteComponent } from "src/app/components/delete/delete.component";
import { AddEditComponent } from "src/app/components/add-edit/add-edit.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./table.component.css"],
})
export class TableComponent extends RxUnsubscribe implements OnInit {
  students!: MatTableDataSource<Student>;
  displayedColumns: string[] = ['position', 'name', 'surname', 'dateExam', 'score', 'delete'];
  constructor(
    private service: StudentService,
    public router: Router,
    private cdr: ChangeDetectorRef,
    public dialogMode: MatDialog,
  ) {
    super();
  }

  ngOnInit(): void {
    this.service.getStudents().subscribe((data) => {
      this.students = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
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
      if (res) this.service.deleteStudent(student.id);
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





  isServer: boolean = false;
  range: boolean = false;
  isAskSort: boolean = true;
  findedStudents: Array<number> = [];
  deleteStudents: Array<number> = [];



  // sort(property: keyof Student): void {
  //   if (this.isAskSort) {
  //     this.students.sort((a: Student, b: Student): number => {
  //       if (
  //         property === "surname" ||
  //         property === "name"
  //       ) {
  //         const nameA = a[property].toUpperCase();
  //         const nameB = b[property].toUpperCase();
  //         if (nameA < nameB) {
  //           return -1;
  //         }
  //         if (nameA > nameB) {
  //           return 1;
  //         }
  //         return 0;
  //       }
  //       if (property === "birthday") {
  //         const dateA = new Date(a.birthday);
  //         const dateB = new Date(b.birthday);
  //         if (dateA < dateB) {
  //           return -1;
  //         }
  //         if (dateA > dateB) {
  //           return 1;
  //         }
  //         return 0;
  //       }
  //       if (property === "score") {
  //         return a.score - b.score;
  //       }
  //       return 1;
  //     });
  //   } else {
  //     this.students.sort((a: Student, b: Student): number => {
  //       if (
  //         property === "surname" ||
  //         property === "name"
  //       ) {
  //         const nameA = a[property].toUpperCase();
  //         const nameB = b[property].toUpperCase();
  //         if (nameA < nameB) {
  //           return 1;
  //         }
  //         if (nameA > nameB) {
  //           return -1;
  //         }
  //         return 0;
  //       }
  //       if (property === "birthday") {
  //         const dateA = new Date(a.birthday);
  //         const dateB = new Date(b.birthday);
  //         if (dateA < dateB) {
  //           return 1;
  //         }
  //         if (dateA > dateB) {
  //           return -1;
  //         }
  //         return 0;
  //       }
  //       if (property === "score") {
  //         return b.score - a.score;
  //       }
  //       return 1;
  //     });
  //   }
  //   this.isAskSort = !this.isAskSort;
  // }

  // search(prop: string): void {
  //   this.clearFilter();
  //   if (prop.includes(" ")) {
  //     const arr = prop.split(" ");
  //     const name = arr[0];
  //     const surname = arr[1];
  //     for (const student of this.students) {
  //       if (
  //         student.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
  //         student.surname.toLocaleLowerCase() === surname.toLocaleLowerCase()
  //       ) {
  //         this.findedStudents.push(student.id);
  //       }
  //     }
  //   } else {
  //     for (const student of this.students) {
  //       if (
  //         student.surname.toLocaleLowerCase() === prop.toLocaleLowerCase() ||
  //         student.name.toLocaleLowerCase() === prop.toLocaleLowerCase()
  //       ) {
  //         this.findedStudents.push(student.id);
  //       }
  //     }
  //   }
  // }

  // filterScore(minScore: string, maxScore: string): void {
  //   this.clearFilter();
  //   const correctMinScore = +minScore;
  //   const correctMaxScore = +maxScore;

  //   if (correctMaxScore > correctMinScore && minScore && maxScore) {
  //     for (const student of this.students) {
  //       if (
  //         student.score > correctMaxScore ||
  //         student.score < correctMinScore
  //       ) {
  //         this.deleteStudents.push(student.id);
  //       }
  //     }
  //   }
  // }

  // filterDate(dataMin: string, dataMax: string): void {
  //   this.clearFilter();
  //   const correctMinDate = +new Date(dataMin);
  //   const correctMaxDate = +new Date(dataMax);

  //   if (correctMaxDate > correctMinDate && dataMin && dataMax) {
  //     for (const student of this.students) {
  //       const birthDate = +new Date(student.birthday);
  //       if (birthDate > correctMaxDate || birthDate < correctMinDate) {
  //         this.deleteStudents.push(student.id);
  //       }
  //     }
  //   }
  // }

  // clearFilter(): void {
  //   this.findedStudents.length = 0;
  //   this.deleteStudents.length = 0;
  // }
}
