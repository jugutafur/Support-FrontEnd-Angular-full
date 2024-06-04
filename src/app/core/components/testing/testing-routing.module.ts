import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTestingComponent } from './components/main-testing/main-testing.component';
import { TestJavaComponent } from './components/test-java/test-java.component';
import { TestJavascriptComponent } from './components/test-javascript/test-javascript.component';

const routes: Routes = [
  {
    path: "",
    component: MainTestingComponent,
  },
  {
    path: 'test-java',
    component: TestJavaComponent
  },
  {
    path: 'test-JavaScript',
    component: TestJavascriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
