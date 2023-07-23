import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(userInfo: object){
    this.http.post(`${environment.apiUrl}/login`, JSON.stringify(userInfo), {headers: {'Content-type': 'application/json'}}).subscribe(token=>{
      return token
    })
  }

  register(userInfo: object){
    this.http.post(`${environment.apiUrl}/register`, JSON.stringify(userInfo), {headers: {'Content-type': 'application/json'}}).subscribe(user=>{
      return user;
    })
  }

  logout(){
    const cookie =  this.cookieService.get("auth-cookie");
    console.log(cookie)
    this.http.post(`${environment.apiUrl}/logout`, cookie, {headers: {'Content-type': 'application/json'}}).subscribe(user=>{
      return user;
    })
  }

  get isLoggetIn(){
    if(this.cookieService.get("auth-cookie") !== undefined){
      return true
    }else{
      return false
    }
  }

  get isLoggedOut(){
    return !this.isLoggetIn
  }
}
