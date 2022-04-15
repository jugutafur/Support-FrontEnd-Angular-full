import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { MainTransversalesComponent } from './components/main-transversales/main-transversales.component';

import { JavaComponent } from './components/java/java.component';
import { VbComponent } from './components/vb/vb.component';
import { CsharpComponent } from './components/csharp/csharp.component';
import { FsharpComponent } from './components/fsharp/fsharp.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CursoTerminalComponent } from './components/curso-terminal/curso-terminal.component';

const routes: Routes = [

  {
    path : '',
    component: MainTransversalesComponent,
  },
  {
    path: 'JAVA',
    component: JavaComponent
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
  }
]

@NgModule({
  declarations:[],
  imports:[ RouterModule.forChild(routes)],
  exports:[ RouterModule ]
})

export class TransversalesRoutingModule {}
