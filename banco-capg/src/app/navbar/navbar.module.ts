import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
