import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPage } from './pages/admin.page';
import { AdminNavComponent } from './components/admin-nav.component';
import { AfireMgmtComponent } from './components/afire-mgmt.component';
import { CaseStudyMgmtComponent } from './components/case-study-mgmt.component';
import { EncounterMgmtComponent } from './components/encounter-mgmt.component';
import { LinkMgmtComponent } from './components/link-mgmt.component';
import { UserMgmtComponent } from './components/user-mgmt.component';

@NgModule ({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminPage,
        AdminNavComponent,
        AfireMgmtComponent,
        CaseStudyMgmtComponent,
        EncounterMgmtComponent,
        LinkMgmtComponent,
        UserMgmtComponent
    ]
})
export class AdminModule { }
