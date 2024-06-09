import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
bmi:number;
resultado:string = "resultado";
interpretacion:string = "interpretacion";

constructor(private route: ActivatedRoute){
this.bmi = +route.snapshot.paramMap.get('valor')!;
}

ngOnInit(){
  this.getResultado();
}

getResultado(){
  if(this.bmi >= 25){
    this.resultado = 'Exceso de peso';
    this.interpretacion = 'Tiene un peso corporal superior al normal, haga mas ejarcicios'
  }else if(this.bmi >= 18.5){
    this.resultado = 'Peso Normal';
    this.interpretacion = 'Tiene un peso corporal normal, Buen trabajo'
  }else{
    this.resultado = 'Bajo peso';
    this.interpretacion = 'Tiene un peso corporal bajo, Coma mas'
  }
}

}
