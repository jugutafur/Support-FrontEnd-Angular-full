import { NgModule } from '@angular/core';

import { GormComponent } from './gorm/gorm.component';
import { MainLibreriasComponent } from './main-librerias/main-librerias.component';

import { CommonModule } from '@angular/common';
import { LibreriasRoutingModule } from './librerias-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { SwaggerComponent } from './swagger/swagger.component';
import { GitComponent } from './git/git.component';

@NgModule({
    declarations:[
        GormComponent,
        MainLibreriasComponent,
        BootstrapComponent,
        SwaggerComponent,
        GitComponent
    ],
    imports:[
        CommonModule,
        LibreriasRoutingModule
    ],
    exports:[]
})

export class LibreriasModule { }
