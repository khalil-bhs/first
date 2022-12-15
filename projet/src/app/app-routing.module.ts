import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasbordComponent } from './core/dasbord/dasbord.component';


const routes: Routes = [
    {path : '' , loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
    {path : 'dash' , loadChildren:()=>import('./core/dasbord/dasbord.module').then((m)=>m.DasbordModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
