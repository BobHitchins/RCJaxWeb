import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksRoutingModule } from './links-routing.module';
import { LinksPage } from './pages/links.page';
import { LinksComponent } from './components/links.component';

@NgModule ({
    imports: [
        CommonModule,
        LinksRoutingModule
    ],
    declarations: [
        LinksPage,
        LinksComponent
    ]
})
export class LinksModule { }
