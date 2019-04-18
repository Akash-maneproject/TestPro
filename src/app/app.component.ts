import { Component } from '@angular/core';
import { Dunebook } from './Dunebook';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dunebookList: any;
  constructor(private httpClient: HttpClient) { }
  getDunebookData() {
    this.httpClient.post('http://localhost:3004/posts',{
      "title": "test",
      "author": "test1"
    })
      .subscribe((res) => {
        // this.dunebookList = res;
        console.log(res);
      });


  }
}
