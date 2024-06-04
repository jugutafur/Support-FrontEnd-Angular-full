import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { MainTransversalesComponent } from './components/main-transversales/main-transversales.component';

import { SettingsComponent } from './components/settings/settings.component';
import { CursoTerminalComponent } from './components/curso-terminal/curso-terminal.component';
import { FundamentosProgramacionComponent } from './components/fundamentos-programacion/fundamentos-programacion.component';
import { RedesComponent } from './components/redes/redes.component';
import { CodewarriorComponent } from './components/codewarrior/codewarrior.component';
import { AnalisDatosComponent } from './components/analis-datos/analis-datos.component';
const routes: Routes = [

  {
    path : '',
    component: MainTransversalesComponent,
  },
  {
    path:'Fundamentos Programacion',
    component: FundamentosProgramacionComponent
  },
  {
    path: 'Settings',
    component: SettingsComponent
  },
  {
    path: 'Terminal',
    component: CursoTerminalComponent
  },
  {
    path: 'Redes',
    component: RedesComponent
  },
  {
    path: 'CodeWarrior',
    component: CodewarriorComponent
  },
  {
    path: 'Analis de Datos',
    component: AnalisDatosComponent
  }

]

@NgModule({
  declarations:[],
  imports:[ RouterModule.forChild(routes)],
  exports:[ RouterModule ]
})

export class TransversalesRoutingModule {}
