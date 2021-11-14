import { NgModule } from '@angular/core';

import { CsharpComponent } from './csharp/csharp.component';
import { GoComponent } from './go/go.component';
import { JavaComponent } from './java/java.component';
import { PhpComponent } from './php/php.component';
import { MainBackEndComponent } from './main-back-end/main-back-end.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { JavaSpringComponent } from './java-spring/java-spring.component';

import { CommonModule } from '@angular/common';
import { BackEndRoutingModule } from './back-end-routing.module';


@NgModule({
    declarations:[
        CsharpComponent,
        GoComponent,
        JavaComponent,
        PhpComponent,
        MainBackEndComponent,
        TypecsriptComponent,
        NodejsComponent,
        JavaSpringComponent
    ],
    imports:[
        CommonModule,
        BackEndRoutingModule
    ],
    exports:[]
})

export class BackEndModule { }