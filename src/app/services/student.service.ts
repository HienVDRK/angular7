import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENTS } from '../mock-data/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  getListStudents(): Student[] {
    return STUDENTS;
  }
}
