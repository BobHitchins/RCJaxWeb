import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterRoutingModule } from './encounter-routing.module';
import { EncounterPage } from './pages/encounter.page';
import { CalendarComponent } from './components/calendar.component';
import { EncounterNavComponent } from './components/encounter-nav.component';
import { MaterialsComponent } from './components/materials.component';
import { ResolutionsComponent } from './components/resolutions.component';
import { StructureComponent } from './components/structure.component';

@NgModule ({
    imports: [
        CommonModule,
        EncounterRoutingModule
    ],
    declarations: [EncounterPage, CalendarComponent, EncounterNavComponent, MaterialsComponent, ResolutionsComponent, StructureComponent]
})
export class EncounterModule { }
