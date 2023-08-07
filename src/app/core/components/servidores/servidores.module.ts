import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidoresRoutingModule } from './servidores-routing.module';
import { MainServidoresComponent } from './components/main-servidores/main-servidores.component';
import { WebSphereComponent } from './components/WebSphere/web-sphere/web-sphere.component';
import { WebLogicComponent } from './components/WebLogic/web-logic/web-logic.component';

@NgModule({
  declarations: [
    MainServidoresComponent,
    WebSphereComponent,
    WebLogicComponent
  ],
  imports: [
    CommonModule,
    ServidoresRoutingModule
  ]
})
export class ServidoresModule { }
