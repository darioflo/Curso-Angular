import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'movies',component:MovieListComponent},
    {path:'create', component:MovieFormPageComponent},
    {path:'movies/:movieName', component:MovieDetailsComponent},
    { path: '**', redirectTo: '' } 
];
