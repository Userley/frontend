import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SostenibilidadComponent } from './sostenibilidad.component';
import { SostenibilidadRoutingModule } from './sostenibilidad.routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SostenibilidadComponent],
  imports: [
    CommonModule,
    SostenibilidadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SostenibilidadModule { }
