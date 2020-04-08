import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { STUDENTS } from '../mock-data/mock-students';
@Component({

  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = STUDENTS;
  selectedStudent: Student;

  constructor() { }

  ngOnInit() {
  }

  onClick(student: Student): void {
    this.selectedStudent = student;
  }
}
