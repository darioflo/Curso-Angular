import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-form-page',
  imports: [HeaderComponent,ReactiveFormsModule,NgIf],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.css'
})
export class MovieFormPageComponent {
  movieForm : FormGroup
  name:FormControl
  duration:FormControl
  director:FormControl 

  constructor(public movieServices : MovieService){
    this.name = new FormControl("",Validators.required) //FormControl representa campos del formulario
    this.duration = new FormControl("",[
      Validators.required,
      Validators.max(300)])
    this.director = new FormControl("", Validators.required)
    
    this.movieForm = new FormGroup({
      nombre: this.name,
      duracion: this.duration,
      director: this.director,
    })
  }

  handleSubmit(): void{
    console.log(this.movieForm.value);
    this.movieServices.addMovie(this.movieForm.value)
    this.movieForm.reset()
  }

}
