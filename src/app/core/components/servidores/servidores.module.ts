import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidoresRoutingModule } from './servidores-routing.module';
import { MainServidoresComponent } from './components/main-servidores/main-servidores.component';
import { WebSphereComponent } from './components/WebSphere/web-sphere.component';
import { WebLogicComponent } from './components/WebLogic/web-logic.component';
import { TomcatComponent } from './components/tomcat/tomcat.component';
import { WildflyComponent } from './components/wildfly/wildfly.component';
import { Db2Component } from './components/db2/db2.component';
import { IisComponent } from './components/iis/iis.component';

@NgModule({
  declarations: [
    MainServidoresComponent,
    WebSphereComponent,
    WebLogicComponent,
    TomcatComponent,
    WildflyComponent,
    Db2Component,
    IisComponent
  ],
  imports: [
    CommonModule,
    ServidoresRoutingModule
  ]
})
export class ServidoresModule { }
