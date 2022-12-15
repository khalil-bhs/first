import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { UserComponent } from '../user/user.component';
import { DasbordComponent } from './dasbord.component';

const routes: Routes = [
  {path : '' , component : DasbordComponent , children:[
    {path :'header' , component :HeaderComponent},
    {path : 'navbar' , component:NabvarComponent},
    {path : 'todolist' , component:TodolistComponent},
    {path : 'user' , component:UserComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasbordRoutingModule { }
