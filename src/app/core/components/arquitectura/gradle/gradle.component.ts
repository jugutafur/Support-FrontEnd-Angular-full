import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradle',
  templateUrl: './gradle.component.html',
  styleUrls: ['./gradle.component.scss']
})
export class GradleComponent implements OnInit {

  public abrellave: string;
  public cierrallave: string;
  public abreDiamante: string;
  public cierraDiamante: string;
  public abreParentesis: string;
  public cierraParentesis: string;
  public abreCuadro: string;
  public cierraCuadro: string;

  constructor() {
    this.abrellave= "{";
    this.cierrallave="}";
    this.abreDiamante= "<";
    this.cierraDiamante= ">";
    this.abreParentesis= "(";
    this.cierraParentesis= ")";
    this.abreCuadro= "[";
    this.cierraCuadro= "]";
  }

  ngOnInit():void{
    console.log("");
  }
}
