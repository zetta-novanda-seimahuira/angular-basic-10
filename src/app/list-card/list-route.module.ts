import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { ListCardComponent } from './list-card.component';


const routes: Routes = [{
  path: '',
  component: ListCardComponent
},
{
    path: 'addcard',
    component: AddCardComponent
  },
  {
      path: 'edit/:id',
      component: AddCardComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule]
})
export class ListRouteModule { }
