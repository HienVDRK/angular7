import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dependency-services',
  templateUrl: './dependency-services.component.html',
  styleUrls: ['./dependency-services.component.css']
})
export class DependencyServicesComponent implements OnInit {

  employees = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
