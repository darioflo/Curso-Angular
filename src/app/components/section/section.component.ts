import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Producto from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-section',
  imports: [NgClass,ReactiveFormsModule,],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  testingBox:boolean
 
  constructor(public productService : ProductService){
    this.testingBox = true
    //esta variable representa todo el formulario
  }
  setTesing(){
    this.testingBox = !this.testingBox
  }
}
