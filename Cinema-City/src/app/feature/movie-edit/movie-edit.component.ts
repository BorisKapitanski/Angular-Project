import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    // get data for the form
  }
  
  submitHandler(form: NgForm){
    if (form.invalid) {
      return;
    }
    const {} = form.value;
    console.log(form.value)
  }
}
