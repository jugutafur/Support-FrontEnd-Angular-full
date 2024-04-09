import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { MainTransversalesComponent } from './components/main-transversales/main-transversales.component';

import { JavaComponent } from './components/java/java.component';
import { VbComponent } from './components/vb/vb.component';
import { CsharpComponent } from './components/csharp/csharp.component';
import { FsharpComponent } from './components/fsharp/fsharp.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CursoTerminalComponent } from './components/curso-terminal/curso-terminal.component';
import { TestJavaComponent } from './components/test-java/test-java.component';
import { FundamentosProgramacionComponent } from './components/fundamentos-programacion/fundamentos-programacion.component';
import { JAVABasicoComponent } from './components/javabasico/javabasico.component';
import { RedesComponent } from './components/redes/redes.component';
import { CodewarriorComponent } from './components/codewarrior/codewarrior.component';
import { JavaAvanzadoComponent } from './components/java-avanzado/java-avanzado.component';
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
    path: 'JAVABasico',
    component:  JAVABasicoComponent
  },
  {
    path: 'JAVAIntermedio',
    component: JavaComponent
  },
  {
    path: 'JAVAAvanzado',
    component: JavaAvanzadoComponent
  },
  {
    path: 'VB',
    component: VbComponent
  },
  {
    path: 'C#',
    component: CsharpComponent
  },
  {
    path: 'F#',
    component: FsharpComponent
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
    path: 'test-java',
    component: TestJavaComponent
  },
  {
    path: 'Redes',
    component: RedesComponent
  },
  {
    path: 'CodeWarrior',
    component: CodewarriorComponent
  }

]

@NgModule({
  declarations:[],
  imports:[ RouterModule.forChild(routes)],
  exports:[ RouterModule ]
})

export class TransversalesRoutingModule {}
