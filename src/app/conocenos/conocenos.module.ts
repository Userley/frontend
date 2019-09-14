import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConocenosComponent } from './conocenos.component';
import { ConocenosRoutingModule } from './conocenos.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConocenosComponent],
  imports: [
    CommonModule,
    ConocenosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConocenosModule { }
