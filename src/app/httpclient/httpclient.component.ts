import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/users'
  listData: Observable<any>
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const params = new HttpParams().set('id', '1')
    // const headers = new HttpHeaders().set('Authorization', 'auth-token')
    this.http.get<any>(this.ROOT_URL).subscribe(results => {
      this.listData = results
    }, errs => console.log('errs', errs))
  }

  // GetTenItem(){
  //   const headers = new HttpHeaders().set('Authorization', 'auth-token')
  //   this.http.get<any>(this.ROOT_URL, { headers }).subscribe(results => {
  //     this.listData = results
  //   }, errs => console.log('errs', errs))
  // }
}
