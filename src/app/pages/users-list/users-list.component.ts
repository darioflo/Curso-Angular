import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {  ActivatedRoute, Route, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { log } from 'console';

@Component({
  selector: 'app-users-list',
  imports: [NgFor,RouterLink,HeaderComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit{
  constructor(public userServices : UserService, private route : ActivatedRoute){
  }

  ngOnInit(): void {
    this.getUsersList()
  }

  getUsersList(){
    console.log(this.route.snapshot.params);
    this.userServices.getUsers().subscribe({
      next: (data) =>{
        console.log(data);
        this.userServices.users = data
      },
      error: (e)=>{
        console.log(e);
      }
    })
  }
  deleteUser(id: number){
    this.userServices.deleteUser(id).subscribe({
      next:(data)=>{
        console.log(data);
        this.getUsersList()
      },
      error:(e)=>{
        console.log(e);
        
      }
    })
  }

}
