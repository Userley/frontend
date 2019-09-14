import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SostenibilidadComponent } from './sostenibilidad.component';

const routes:Routes=[
    {path:'',component:SostenibilidadComponent}
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
      ],
    exports: [
      CommonModule
    ]
  })
  export class SostenibilidadRoutingModule { }