import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router : Router,
    private http: HttpClient
  ) { }

  backDevHost = "http://localhost:8080/api/v1/auth/";

  login(user : User) : void{
    this.http.post(this.backDevHost+"authenticate", user,{ observe: 'response'})
      .subscribe( (response : HttpResponse<any>) => {
        if(response.status === 200){
          sessionStorage.setItem('token', <string>response.headers.get('Authorization'));
          this.router.navigate(['/home']);
        }
      });
  }
}
