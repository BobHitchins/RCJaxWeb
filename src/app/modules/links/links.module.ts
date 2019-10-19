import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksRoutingModule } from './links-routing.module';
import { LinksPage } from './pages/links.page';

@NgModule ({
    imports: [
        CommonModule,
        LinksRoutingModule
    ],
    declarations: [LinksPage]
})
export class LinksModule { }