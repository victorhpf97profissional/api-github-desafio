import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    NavBarComponent,
  ]
})
export class SharedModule { }
