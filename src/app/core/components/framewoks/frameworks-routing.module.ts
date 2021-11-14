import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainFrameworksComponent } from './main-frameworks/main-frameworks.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueJsComponent } from './vue-js/vue-js.component';

const routes : Routes =[
    {
        path: '',
        component: MainFrameworksComponent
    },
    {
        path: 'angular',
        component: AngularComponent
    },
    {
        path: 'react',
        component: ReactComponent
    },
    {
        path: 'vue-js',
        component: VueJsComponent
    },
]

@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class FrameworksRoutingModule { }