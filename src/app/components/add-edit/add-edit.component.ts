import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { RxUnsubscribe } from 'src/app/rx-unsubscribe';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent extends RxUnsubscribe implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Student,
    public dialogRef: MatDialogRef<AddEditComponent>,
  ) {
    super();
  }
  ngOnInit(): void {
    if (this.data) {
      this.showInputs(this.data);
    }
  }
  formStudent = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    score: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    registrDate: new FormControl(new Date().toISOString()),
  });

  showInputs(data: Student): void {
    console.log(data)
    this.formStudent.get("name")?.setValue(data.name);
    this.formStudent.get("surname")?.setValue(data.surname);
    this.formStudent.get("birthday")?.setValue(data.birthday);
    this.formStudent.get("score")?.setValue(data.score);
  }

  submit(): void {
    this.dialogRef.close(this.formStudent.value);
  }
}
