import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  listData: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let params = new HttpParams().set('id', '1')
    let headers = new HttpHeaders().set('Authorization', 'auth-token')
    this.http.get<any>(`https://jsonplaceholder.typicode.com/users`, { params, headers }).subscribe(results => {
      this.listData = results
    }, errs => console.log('errs', errs))
  }

  GetTenItem(){
    let headers = new HttpHeaders().set('Authorization', 'auth-token')
    this.http.get<any>(`https://jsonplaceholder.typicode.com/users`, { headers }).subscribe(results => {
      this.listData = results
    }, errs => console.log('errs', errs))
  }
}
