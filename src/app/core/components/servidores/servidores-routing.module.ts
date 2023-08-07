import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainServidoresComponent } from './components/main-servidores/main-servidores.component';
import { WebSphereComponent} from './components/WebSphere/web-sphere.component';
import { WebLogicComponent} from './components/WebLogic/web-logic.component';
import { TomcatComponent } from './components/tomcat/tomcat.component';
import { WildflyComponent } from './components/wildfly/wildfly.component';
import { Db2Component } from './components/db2/db2.component';
import { IisComponent } from './components/iis/iis.component';

const routes: Routes = [
  {
    path: "",
    component: MainServidoresComponent,
  },
  {
    path: "WAS",
    component: WebSphereComponent,
  },
  {
    path: "WebLogic",
    component: WebLogicComponent,
  },
  {
    path: "tomcat",
    component: TomcatComponent,
  },
  {
    path: "wildfly",
    component: WildflyComponent,
  },
  {
    path: "DB2",
    component: Db2Component,
  },
  {
    path: "IIS",
    component: IisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }
