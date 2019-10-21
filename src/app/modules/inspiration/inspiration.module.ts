import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspirationRoutingModule } from './inspiration-routing.module';
import { InspirationPage } from './pages/inspiration.page';
import { InspirationAddComponent } from './components/inspiration-add.component';
import { InspirationNavComponent } from './components/inspiration-nav.component';
import { PhotosComponent } from './components/photos.component';
import { StoriesComponent } from './components/stories.component';
import { StoryContentComponent } from './components/story-content.component';
import { StoryListComponent } from './components/story-list.component';

@NgModule ({
    imports: [
        CommonModule,
        InspirationRoutingModule
    ],
    declarations: [
        InspirationPage,
        InspirationAddComponent,
        InspirationNavComponent,
        PhotosComponent,
        StoriesComponent,
        StoryContentComponent,
        StoryListComponent
    ]
})
export class InspirationModule { }
