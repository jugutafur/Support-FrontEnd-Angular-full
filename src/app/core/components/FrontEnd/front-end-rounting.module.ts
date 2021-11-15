import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainFrontEndComponent } from './main-front-end/main-front-end.component';

import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavaScriptComponent } from './java-script/java-script.component'
import { VbComponent } from './vb/vb.component';
import { CsharpComponent } from './csharp/csharp.component';
import { FsharpComponent } from './fsharp/fsharp.component';

const routes : Routes = [
    {
        path: '',
        component: MainFrontEndComponent,
    },
    {
        path:'HTML',
        component: HtmlComponent
    },
    {
        path: 'CSS',
        component: CssComponent
    },
    {
        path: 'JavaScript',
        component: JavaScriptComponent
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
    declarations:[],
    imports:[ RouterModule.forChild(routes)],
    exports:[ RouterModule ]
})

export class FrontEndRoutingModule {}
