import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import Producto from '../../models/Product';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  nombre:string
  edad :number
  enCuba: boolean
  product: Producto 

  constructor(){
    this.nombre = "Rafa"
    this.edad = 24
    this.enCuba = true
    this.product = {
      nombre :"Lapto",
      precio:1000,
      enVenta: true,
    }
  }


  @Output()
  form: EventEmitter<any> = new EventEmitter<any> 
  userName : string = "Roberto"

  handleLogin(){
    this.form.emit(this.userName)
  }

  login = output<string>()

  /*Utilizando decoradores */
  @Input() msg: string = ""
  @Input() equipo : any

  /*Utilizando señales (Signals) */
  mensaje = input<string>("");
  player = input<any>("")
}