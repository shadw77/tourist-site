import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {  RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    // UsersComponent
  ],
  imports: [
    CommonModule    ,
    RouterModule
  ],
  exports : [
    // UsersComponent,
    RouterModule
  ]
})
export class DatabaseModule { }
