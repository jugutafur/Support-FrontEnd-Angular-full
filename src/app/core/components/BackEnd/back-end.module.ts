import { NgModule } from '@angular/core';

import { CsharpComponent } from './csharp/csharp.component';
import { FsharpComponent } from './fsharp/fsharp.component';
import { GoComponent } from './go/go.component';
import { JavaComponent } from './java/java.component';
import { JavaAvanzadoComponent } from './java-avanzado/java-avanzado.component';
import { JAVABasicoComponent } from './javabasico/javabasico.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PhpComponent } from './php/php.component';
import { MainBackEndComponent } from './main-back-end/main-back-end.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';
import { VbComponent } from './vb/vb.component';

import { CommonModule } from '@angular/common';
import { BackEndRoutingModule } from './back-end-routing.module';


@NgModule({
    declarations:[
        CsharpComponent,
        FsharpComponent,
        GoComponent,
        JavaComponent,
        JavaAvanzadoComponent,
        JAVABasicoComponent,
        NodejsComponent,
        PhpComponent,
        TypecsriptComponent,
        VbComponent,
        MainBackEndComponent
    ],
    imports:[
        CommonModule,
        BackEndRoutingModule
    ],
    exports:[]
})

export class BackEndModule { }
