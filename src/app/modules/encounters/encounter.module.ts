import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterRoutingModule } from './encounter-routing.module';
import { EncounterPage } from './pages/encounter.page';

@NgModule ({
    imports: [
        CommonModule,
        EncounterRoutingModule
    ],
    declarations: [EncounterPage]
})
export class EncounterModule { }
