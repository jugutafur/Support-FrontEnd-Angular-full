import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavaScriptComponent } from './java-script/java-script.component';

import { FrontEndRoutingModule } from './front-end-rounting.module';
import { MainFrontEndComponent } from './main-front-end/main-front-end.component';
import { VbComponent } from './vb/vb.component';
import { CsharpComponent } from './csharp/csharp.component';
import { FsharpComponent } from './fsharp/fsharp.component';

@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    JavaScriptComponent,
    MainFrontEndComponent,
    VbComponent,
    CsharpComponent,
    FsharpComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
