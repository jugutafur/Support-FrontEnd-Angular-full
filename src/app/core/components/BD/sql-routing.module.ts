import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBdComponent } from './main-bd/main-bd.component';

import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { MysqlComponent } from './mysql/mysql.component';
import { PostgresqlComponent } from './postgresql/postgresql.component';
import { SqlserverComponent } from './sqlserver/sqlserver.component';
import { OracleComponent } from './oracle/oracle.component';
import { NoSqlFirestoreComponent } from './no-sql-firestore/no-sql-firestore.component';

const routes : Routes = [
    {
        path: '',
        component: MainBdComponent
    },
    {
        path: 'MongoDB',
        component: MongoDBComponent
    },
    {
        path: 'mySQL',
        component: MysqlComponent
    },
    {
        path: 'PostgreSQL',
        component: PostgresqlComponent
    },
    {
        path: 'SQLServer',
        component: SqlserverComponent
    },
    {
        path: 'Oracle',
        component: OracleComponent
    },
    {
        path: 'NoSql-Firestore',
        component: NoSqlFirestoreComponent
    }
]


@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(routes)],
    exports:[ RouterModule],
})

export class BdRoutingModule { }
