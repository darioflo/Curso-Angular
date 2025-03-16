import { Injectable } from '@angular/core';
import Movie from '../models/Movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //cualquier componente va a poder acceder al objeto movies
  movies : Movie[]


  constructor() { 
    this.movies = [
      {
        nombre : "Star Wars",
        duracion : 120,
        director : "George Lucas"
      },
      {
        nombre : "Titanic",
        duracion : 120,
        director : "James Cameron"
      },
      {
        nombre : "Jurassic Park",
        duracion : 140,
        director : "Steven Spielberg"
      },
    ]
  }
//metodo para agregar una pelicula nueva este metodo se le asigno al formulario
  addMovie(newMovie : Movie){
      this.movies.push(newMovie)
  }

//metodo para obtener si la pelicula existe o no, y en caso d q exista la retorna
  getMovie(name: string) : Movie | undefined {
    console.log(name);
    return this.movies.find((element) => element.nombre === name )
  }
}
