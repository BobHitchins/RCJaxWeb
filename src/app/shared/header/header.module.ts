import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderPage } from './pages/header.page';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { TopMenuComponent } from './components/top-menu.component';
import { WelcomeComponent } from './components/welcome.component';

@NgModule ({
    imports: [
        CommonModule,
        HeaderRoutingModule
    ],
    declarations: [
        HeaderPage,
        BreadcrumbComponent,
        TopMenuComponent,
        WelcomeComponent
    ]
})
export class HeaderModule { }
