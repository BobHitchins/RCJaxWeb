import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPage } from './pages/registration.page';
import { RegistrationComponent } from './components/registration.component';

@NgModule ({
    imports: [
        CommonModule,
        RegistrationRoutingModule
    ],
    declarations: [
        RegistrationPage,
        RegistrationComponent
    ]
})
export class RegistrationModule { }
