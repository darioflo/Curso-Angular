import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [NgClass],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  testingBox:boolean

  constructor(){
    this.testingBox = true
  }

}
