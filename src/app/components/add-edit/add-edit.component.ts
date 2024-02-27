import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { RxUnsubscribe } from 'src/app/rx-unsubscribe';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
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
    name: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
    surname: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
    dateExam: new FormControl(null, [Validators.required]),
    score: new FormControl(null, [Validators.required, Validators.pattern("[1-9]{1}$|^[1-9]{1}[0-9]{1}$|^100")]),
    id: new FormControl(null),
  });

  showInputs(data: Student): void {
    this.formStudent.get("name")?.setValue(data.name);
    this.formStudent.get("surname")?.setValue(data.surname);
    this.formStudent.get("dateExam")?.setValue(new Date(Number(JSON.stringify(data.dateExam).split(",")[0].split(":")[1]) * 1000));
    this.formStudent.get("score")?.setValue(data.score);
    this.formStudent.get("id")?.setValue(data.id);
  }

  submit(): void {
    this.dialogRef.close(this.formStudent.value);
  }
}
