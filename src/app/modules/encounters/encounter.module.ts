import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterRoutingModule } from './encounter-routing.module';
import { EncounterPage } from './pages/encounter.page';
import { Calendar } from './components/calendar.component';
import { EncounterNav } from './components/encounter-nav.component';
import { Materials } from './components/materials.component';
import { Resolutions } from './components/resolutions.component';
import { Structure } from './components/structure.component';

@NgModule ({
    imports: [
        CommonModule,
        EncounterRoutingModule
    ],
    declarations: [EncounterPage, Calendar, EncounterNav, Materials, Resolutions, Structure]
})
export class EncounterModule { }
