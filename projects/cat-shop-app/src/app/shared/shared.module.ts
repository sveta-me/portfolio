import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    //vendor
    CommonModule,
    RouterModule,

    //material
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
