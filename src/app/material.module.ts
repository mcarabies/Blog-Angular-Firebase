import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from "@angular/material";


const MyModule = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyModule
  ],
  exports: [
    MyModule
  ]
})
export class MaterialModule { }
