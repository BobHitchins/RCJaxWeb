import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfirePage } from './pages/afire.page';


const routes: Routes = [
  {
    path: '',
    component: AfirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfireRoutingModule { }
