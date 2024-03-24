import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserInfo, remult } from 'remult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: HttpClient
  ){}

  username = ''
  remult = remult
  title = 'angular-fs';

  signIn(){
    this.http.post<UserInfo>("/api/signIn", {
      username: this.username
    }).subscribe({
      next: (user) => {
        this.remult.user = user
        this.username = ''
      },
      error: (error) => alert(error.error)
    })
  }
}
