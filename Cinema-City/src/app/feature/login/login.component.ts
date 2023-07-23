import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private errorFromServer: string = '';

  constructor(private userService: UserService) { }


  submitHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    const { username, password } = form.value;
    console.log(form.value)
    const token = this.userService.login({username, password});
    console.log(token)
  }

} 
