import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../../services/movie.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [HeaderComponent, NgFor,RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent {
  // variable movieServices de tipo MovieService aqui se podra acceder a los metodos de la clase y a los demas elementos
  constructor(public movieService : MovieService){}

}
