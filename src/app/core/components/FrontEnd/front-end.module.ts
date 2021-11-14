import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavaScriptComponent } from './java-script/java-script.component';

import { FrontEndRoutingModule } from './front-end-rounting.module';
import { MainFrontEndComponent } from './main-front-end/main-front-end.component';

@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    JavaScriptComponent,
    MainFrontEndComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
