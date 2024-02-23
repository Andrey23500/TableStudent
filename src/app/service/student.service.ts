import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }

  getStudents(): Observable<Student[]> {
    const collection = this.firestore.collection<Student>("Students");
    const students$ = collection.valueChanges();
    return students$;
  }
  addStudent(student: Student): void {
    this.firestore
      .collection("Students")
      .add(student)
      .then((docRef) => {
        const upStudent = Object.assign({}, student);
        upStudent["id"] = docRef.id;
        this.firestore
          .collection("Students")
          .doc(upStudent.id)
          .update(upStudent);
      });
  }
  deleteStudent(id: string): void {
    this.firestore.collection("Students").doc(id).delete();
  }
  editStudent(student: Student): void {
    this.firestore.collection("Students").doc(student.id).update(student);
  }
}
