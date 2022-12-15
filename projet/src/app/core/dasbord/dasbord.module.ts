import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasbordRoutingModule } from './dasbord-routing.module';
import { DasbordComponent } from './dasbord.component';
import { HeaderComponent } from '../header/header.component';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { UserComponent } from '../user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
@NgModule({
  declarations: [
    DasbordComponent,
    HeaderComponent,
    HeaderComponent,
    NabvarComponent,
    TodolistComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    DasbordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers:[UserService]
})
export class DasbordModule { }
