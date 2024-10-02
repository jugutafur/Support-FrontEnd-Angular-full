import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTransversalesComponent } from './components/main-transversales/main-transversales.component';

import { TransversalesRoutingModule } from './transversales-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { CursoTerminalComponent } from './components/curso-terminal/curso-terminal.component';
import { FundamentosProgramacionComponent } from './components/fundamentos-programacion/fundamentos-programacion.component';
import { RedesComponent } from './components/redes/redes.component';
import { CodewarriorComponent } from './components/codewarrior/codewarrior.component';
import { AnalisDatosComponent } from './components/analis-datos/analis-datos.component';
import { DockerComponent } from './components/docker/docker.component';
import { WordpressComponent } from './components/wordpress/wordpress.component';

@NgModule({
  declarations: [
    MainTransversalesComponent,
    SettingsComponent,
    CursoTerminalComponent,
    FundamentosProgramacionComponent,
    RedesComponent,
    CodewarriorComponent,
    AnalisDatosComponent,
    DockerComponent,
    WordpressComponent
  ],
  imports: [
    CommonModule,
    TransversalesRoutingModule
  ]
})
export class TransversalesModule { }
