import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'movies',component:MovieListComponent},
    {path:'create', component:MovieFormPageComponent},
    {path:'movies/:movieName', component:MovieDetailsComponent},
    {path:'users',component:UsersListComponent},
    {path:'users/:userID', component:UserDetailsComponent},
    {path:'user-form', component:UserFormComponent},
    { path: '**', redirectTo: '' } 
];
