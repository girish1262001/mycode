import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapllication';
  // proptyname : data type = value
  a= 20;
  b : number = 30;
  c!: number
  city: string = "Pune";
  //1. one way db 2. two way db
  //1. one way db
  //1.string interpolation>>{{}} >>syntax {{propertyName}}
  //2.property binding >>[]>> [attribute]="proprtyName"
  //3. event binding>>()>>on event will bind data to the property
  //Two way data bind >> [()]>> [(ngModel)]="propertyName"
  myName = "Poonam";
  isDisable = false;
  fruit!:string;

  constructor() { }

  submit() {
    this.fruit = "Mango";
  }
  inputBoxValue(data:any){
    console.log(data.target.value);
    this.myName = data.target.value
   } 
}
