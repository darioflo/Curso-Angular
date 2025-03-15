import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormsModule, CommonModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso-Angular';
  userName : string = "Darío"
  number : number = 0
  movies: string[] = ["Harry Potter","Fury","Titanic","Pirates of Caribean","Contratiempo"]
  personas: any[] = [
    {
      id:1,
      nombre:"Dario",
      edad:25
    },
    {
      id:2,
      nombre:"Roberto",
      edad:26
    },
    {
      id:2,
      nombre:"Jesus",
      edad:28
    }
  ]
  textoPadre: string = "sigue adelante!!!"

  equipo : any = {
    nombre: "Bayern Munich",
    champions: 6,
  } 

  addOne(){
    this.number += 1
  }

  concatMsg(){
    return `${this.userName} ${this.textoPadre}`
  }
}
