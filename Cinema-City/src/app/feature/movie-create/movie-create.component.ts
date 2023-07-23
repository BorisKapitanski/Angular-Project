import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {

  constructor() { }

  submitHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { title, director, year, genre, imageUrl, plot } = form.value;
    
  }
}
