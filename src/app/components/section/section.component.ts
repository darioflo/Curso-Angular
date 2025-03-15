import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-section',
  imports: [NgClass,ReactiveFormsModule,NgIf],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  testingBox:boolean
  movieForm : FormGroup
  name:FormControl
  duration:FormControl
  director:FormControl 

  constructor(){
    this.testingBox = true
    this.name = new FormControl("",Validators.required) //FormControl representa campos del formulario
    this.duration = new FormControl("",[
      Validators.required,
      Validators.max(300)])
    this.director = new FormControl("", Validators.required)
    this.movieForm = new FormGroup({
      nombre: this.name,
      duracion: this.duration,
      director: this.director,
    })//esta variable representa todo el formulario
  }
  handleSubmit(): void{
    console.log(this.movieForm.value);
    this.movieForm.reset()
  }
  setTesing(){
    this.testingBox = !this.testingBox
  }

}
