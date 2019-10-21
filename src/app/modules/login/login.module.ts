import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '././login-routing.module';
import { LoginPage } from './pages/login.page';
import { LoginComponent } from './components/login.component';

@NgModule ({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginPage,
        LoginComponent
    ]
})
export class LoginModule { }
