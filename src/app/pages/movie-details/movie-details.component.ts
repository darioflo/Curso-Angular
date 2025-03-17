import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/Movies';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [HeaderComponent, NgIf],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{

  selectedMovie?: Movie // selected movie sera el valor que le trajo getMovie
  //en el constructor se crea la variable privada route del tipo activatedRoute pq es la que va a permitit la navegacion
  // y obtencion de los datos 
  //la variable privada movieService es para que dado el nombre de la pelicula sacado con la variable route
  //pasarlo al metodo que getMovie que esta en el Servivio MovieService
  constructor(private route : ActivatedRoute, private movieService : MovieService){
    
  }

  ngOnInit(): void {
    const movieName = this.route.snapshot.params['movieName']
    //selectedmovie debe ser incializado con lo que devuelve getMovie
    this.selectedMovie = this.movieService.getMovie(movieName)
    console.log(movieName);
  }

}
