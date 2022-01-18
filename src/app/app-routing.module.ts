import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCardComponent } from './list-card/add-card/add-card.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'list',
    loadChildren: () => import('./list-card/list-route.module').then((m) => m.ListRouteModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
