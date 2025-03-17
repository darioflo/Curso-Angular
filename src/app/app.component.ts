import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./components/child/child.component";
import { SectionComponent } from "./components/section/section.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, ChildComponent, SectionComponent,RouterModule,RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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

  slogan : string = "ten fé"

  equipo : any = {
    nombre: "Bayern Munich",
    champions: 6,
  }
  
  jugador : any = {
    nombre: "Michael Olise",
    numero: 17,
    pais: "Francia"
  }

  addOne(){
    this.number += 1
  }

  concatMsg(){
    return `${this.userName} ${this.textoPadre}`
  }

  upperCase(){
    return this.slogan.toUpperCase()
  }

  setName(e: string){
    this.userName = e
  }

  ngOnInit(): void {
    
  }
}
