import { NgModule } from '@angular/core';

import { MainFrameworksComponent } from './main-frameworks/main-frameworks.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueJsComponent } from './vue-js/vue-js.component';

import { CommonModule } from '@angular/common';
import { FrameworksRoutingModule } from './frameworks-routing.module';

@NgModule({
    declarations:[
        MainFrameworksComponent,
        AngularComponent,
        ReactComponent,
        VueJsComponent
    ],
    imports:[
        CommonModule,
        FrameworksRoutingModule
    ],
    exports:[]
})

export class FrameworksModule { }