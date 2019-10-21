import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfireRoutingModule } from './afire-routing.module';
import { AfirePage } from './pages/afire.page';
import { AfireNavComponent } from './components/afire-nav.component';
import { AfireTeamComponent } from './components/afire-team.component';
import { ApostolateComponent } from './components/apostolate.component';
import { EconomyComponent } from './components/economy.component';
import { FormationComponent } from './components/formation.component';
import { IntegrationComponent } from './components/integration.component';
import { RecruitmentComponent } from './components/recruitment.component';

@NgModule ({
    imports: [
        CommonModule,
        AfireRoutingModule
    ],
    declarations: [
        AfirePage,
        AfireNavComponent,
        AfireTeamComponent,
        ApostolateComponent,
        EconomyComponent,
        FormationComponent,
        IntegrationComponent,
        RecruitmentComponent
    ]
})
export class AfireModule { }
