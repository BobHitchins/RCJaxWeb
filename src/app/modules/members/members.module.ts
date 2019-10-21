import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.module';
import { MembersPage } from './pages/members.page';
import { MembersComponent } from './components/members.component';

@NgModule ({
    imports: [
        CommonModule,
        MembersRoutingModule
    ],
    declarations: [
        MembersPage,
        MembersComponent
    ]
})
export class MembersModule { }
