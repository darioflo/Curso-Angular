import { Injectable } from '@angular/core';
import Producto from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    product : Producto
  
    constructor() {
    this.product = {
      nombre:"Computer",
      precio:1000,
      enVenta: true,

    }
  }


  setProductName(nombreNuevo : string):void {
    this.product.nombre = nombreNuevo 
  }
}
