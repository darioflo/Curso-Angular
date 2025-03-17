import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../../models/User';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-details',
  imports: [HeaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  idUser : number
  newUser : User

  constructor(public userDetails : UserService, private route : ActivatedRoute, private router : Router){
    this.idUser = this.route.snapshot.params['userID']
    this.newUser = {
      id:0,
      name:"",
      username:"",
      email:"",
      address:{
        street :"",
        city:""
      }
    }
}

  getUserDetails(){
    this.userDetails.getUser(this.idUser).subscribe({
      next: (data)=> {
        this.newUser = data
      },
      error: (e)=>{
        console.log(e);
        this.router.navigate(['/'])
      }
    })
  }

  ngOnInit(): void {
    this.getUserDetails()
  }

}
