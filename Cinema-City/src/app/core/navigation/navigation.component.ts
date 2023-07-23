import { Component } from '@angular/core';
import { UserService } from 'src/app/feature/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private userService: UserService){}

  hasUser = this.userService.isLoggetIn;

  logoutHandler(){
    this.userService.logout();
  }
}
