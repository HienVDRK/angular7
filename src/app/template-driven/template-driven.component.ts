import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Employee(10, 'HienVu','hien@gmail.com', this.powers[0], 'DemoBT');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newEmployee() {
    this.model = new Employee(100, '', '', '');
  }

}
