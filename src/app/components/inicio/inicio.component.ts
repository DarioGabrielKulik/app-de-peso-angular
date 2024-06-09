import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
peso:number = 60;
edad:number = 30;
altura:number = 170;
sexo:string = "";

constructor(private router:Router ){}

masculino(): void{
  this.sexo = "M"
}
femenino():void{
  this.sexo="F"
}

cambiarAltura(event: any){
  this.altura = event.target.value;
}

aumentarPeso(){
  this.peso = this.peso + 1;
}
restarPeso(){
  this.peso = this.peso - 1;
}
aumentarEdad(){
  this.edad = this.edad + 1;
}
restarEdad(){
  this.edad = this.edad - 1;
}

calcularBmi(){
const bmi = this.peso / Math.pow(this.altura/100,2);
this.router.navigate(['/resultado', bmi.toFixed(2)])
}

}
