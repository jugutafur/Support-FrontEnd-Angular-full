import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTransversalesComponent } from './components/main-transversales/main-transversales.component';

import { JavaComponent } from './components/java/java.component';
import { CsharpComponent } from './components/csharp/csharp.component';
import { VbComponent } from './components/vb/vb.component';
import { FsharpComponent } from './components/fsharp/fsharp.component';

import { TransversalesRoutingModule } from './transversales-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { CursoTerminalComponent } from './components/curso-terminal/curso-terminal.component';
import { TestJavaComponent } from './components/test-java/test-java.component';
import { FundamentosProgramacionComponent } from './components/fundamentos-programacion/fundamentos-programacion.component';
import { JAVABasicoComponent } from './components/javabasico/javabasico.component';


@NgModule({
  declarations: [
    MainTransversalesComponent,
    JavaComponent,
    VbComponent,
    CsharpComponent,
    FsharpComponent,
    SettingsComponent,
    CursoTerminalComponent,
    TestJavaComponent,
    FundamentosProgramacionComponent,
    JAVABasicoComponent

  ],
  imports: [
    CommonModule,
    TransversalesRoutingModule
  ]
})
export class TransversalesModule { }
