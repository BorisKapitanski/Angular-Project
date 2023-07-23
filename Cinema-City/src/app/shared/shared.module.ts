import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NoMoviesComponent } from './no-movies/no-movies.component';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NoMoviesComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    NoMoviesComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
