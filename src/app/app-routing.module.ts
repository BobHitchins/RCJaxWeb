import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'encounters',
    loadChildren: () => import('./modules/encounters/encounter.module').then(mod => mod.EncounterModule)
  },
  {
    path: 'links', 
    loadChildren: () => import('./modules/links/links.module').then(mod => mod.LinksModule)
  },
  {
    path: 'afire',
    loadChildren: () => import('./modules/afire/afire.module').then(mod => mod.AfireModule)
  },
  {
    path: 'case-studies',
    loadChildren: () => import('./modules/case-studies/case-studies.module').then(mod => mod.CaseStudiesModule)
  },
  {
    path: 'inspiration',
    loadChildren: () => import('./modules/inspiration/inspiration.module').then(mod => mod.InspirationModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./modules/members/members.module').then(mod => mod.MembersModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/registration/registration.module').then(mod => mod.RegistrationModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
