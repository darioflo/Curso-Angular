import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent{
  userForm : FormGroup
  id: FormControl
  name: FormControl
  email:FormControl
  address:FormGroup



  constructor(public userService : UserService){
    this.id = new FormControl('')
    this.name =  new FormControl('')
    this.email = new FormControl('')
    this.address = new FormGroup({
      street : new FormControl(''),
      city: new FormControl('')
    })
    this.userForm =new FormGroup({
      id : this.id,
      name: this.name,
      email: this.email,
      address: this.address
    })
  }


  createUser(){
    this.userService.postUser(this.userForm.value).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (e)=>{
        console.log(e.status);
      }
    })
    this.userForm.reset()
  }
}
