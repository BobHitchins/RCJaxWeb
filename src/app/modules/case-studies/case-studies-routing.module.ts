import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseStudiesPage } from './pages/case-studies.page';


const routes: Routes = [
  {
    path: '',
    component: CaseStudiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesRoutingModule { }
