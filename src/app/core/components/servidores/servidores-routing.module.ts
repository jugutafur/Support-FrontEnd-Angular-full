import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainServidoresComponent } from './components/main-servidores/main-servidores.component';
import { WebSphereComponent} from './components/WebSphere/web-sphere/web-sphere.component';
import { WebLogicComponent} from './components/WebLogic/web-logic/web-logic.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }
