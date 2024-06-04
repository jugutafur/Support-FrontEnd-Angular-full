import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBackEndComponent } from './main-back-end/main-back-end.component';
import { GoComponent } from './go/go.component';
import { CsharpComponent } from './csharp/csharp.component';
import { PhpComponent } from './php/php.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';
import { JavaAvanzadoComponent } from './java-avanzado/java-avanzado.component';
import { JavaComponent } from './java/java.component';
import { VbComponent } from './vb/vb.component';
import { FsharpComponent } from './fsharp/fsharp.component';

const routes: Routes = [
    {
        path: '',
        component: MainBackEndComponent
    },
    {
        path: 'Go',
        component: GoComponent
    },
    {
        path: 'Csharp',
        component: CsharpComponent
    },
    {
        path: 'Php',
        component: PhpComponent
    },
    {
        path: 'Nodejs',
        component: NodejsComponent
    },
    {
        path: 'TypeScript',
        component: TypecsriptComponent
    },
    {
      path: 'JAVABasico',
      component: JavaAvanzadoComponent
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
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[ RouterModule ]
})

export class BackEndRoutingModule {}
