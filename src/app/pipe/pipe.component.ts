import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  name = 'Using Pipe'
  message = 'Welcom to project using pipe'
  person = {
    "firstName" : "John",
    "lastName" : "Doe"
  }
  date = new Date()

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  children(){
    this.router.navigate(['childrenroute'], { relativeTo: this.route });
  }
}
