import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { STUDENTS } from '../mock-data/mock-students';
import { StudentService } from '../services/student.service';
@Component({

  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = STUDENTS;
  selectedStudent: Student;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(): void {
    this.students = this.studentService.getListStudents();
  }

  onClick(student: Student): void {
    this.selectedStudent = student;
  }
}
