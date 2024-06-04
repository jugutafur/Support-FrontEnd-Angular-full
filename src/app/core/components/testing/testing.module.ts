import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTestingComponent } from './components/main-testing/main-testing.component';
import { TestingRoutingModule } from './testing-routing.module'
import { TestJavaComponent } from './components/test-java/test-java.component';
import { TestJavascriptComponent } from './components/test-javascript/test-javascript.component';

@NgModule({
  declarations: [
    MainTestingComponent,
    TestJavaComponent,
    TestJavascriptComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
