import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinksPage } from './pages/links.page';


const routes: Routes = [
  {
    path: '',
    component: LinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }