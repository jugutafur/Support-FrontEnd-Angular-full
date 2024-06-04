import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FrontEndModule } from './components/FrontEnd/front-end.module';
import { BackEndModule } from './components/BackEnd/back-end.module';
import { BdModule } from './components/BD/bd.module';
import { LibreriasModule } from './components/librerias/librerias.module';
import { FrameworksModule } from './components/framewoks/frameworks.module';
import { ArquitecturaModule } from './components/arquitectura/arquitectura.module';
import { TransversalesModule } from './components/transversales/transversales.module';
import { ServidoresModule } from './components/servidores/servidores.module';
import { TestingModule } from './components/testing/testing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FrontEndModule,
    BackEndModule,
    TestingModule,
    BdModule,
    LibreriasModule,
    FrameworksModule,
    ArquitecturaModule,
    TransversalesModule,
    ServidoresModule
  ]
})
export class CoreModule { }
