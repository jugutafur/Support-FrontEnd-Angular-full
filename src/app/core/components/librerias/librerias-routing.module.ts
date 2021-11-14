import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLibreriasComponent } from './main-librerias/main-librerias.component';
import { GormComponent } from './gorm/gorm.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { SwaggerComponent } from './swagger/swagger.component';

const routes : Routes = [
    {
        path: '',
        component: MainLibreriasComponent
    },
    {
        path: 'gorm',
        component: GormComponent
    },
        {
        path: 'bootstrap',
        component: BootstrapComponent
    },
        {
        path: 'swagger',
        component: SwaggerComponent
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class LibreriasRoutingModule { }