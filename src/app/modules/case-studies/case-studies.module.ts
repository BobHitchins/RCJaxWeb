import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudiesPage } from './pages/case-studies.page';
import { CaseStudiesComponent } from './components/case-studies.component';

@NgModule ({
    imports: [
        CommonModule,
        CaseStudiesRoutingModule
    ],
    declarations: [
        CaseStudiesPage,
        CaseStudiesComponent
    ]
})
export class CaseStudiesModule { }
