import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/CustomValidators'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm : FormGroup

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName:  ['', [Validators.required, Validators.minLength(5)]],
      email:  ['', [Validators.required, emailValidator()]], //or
      // email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
