import { Component } from '@angular/core';

@Component({
  selector: 'app-main-servidores',
  templateUrl: './main-servidores.component.html',
  styleUrls: ['./main-servidores.component.scss']
})
export class MainServidoresComponent {
    lista=["WAS","WebLogic","tomcat","wildfly","DB2","IIS"];
    fabricantes=["IBM","Oracle","XX","XX","XX","XX"]
}
