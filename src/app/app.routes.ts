import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { ParticipantsComponent } from './participants/participants.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';
import { PlanningComponent } from './planning/planning.component';
import { ForumComponent } from './forum/forum.component';
import { DjerbaInfoComponent } from './djerba-info/djerba-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      { path: 'participants', component: ParticipantsComponent },
      { path: 'sponsoring', component: SponsoringComponent },
      { path: 'planning', component: PlanningComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'djerba-info', component: DjerbaInfoComponent }
    ]
  },
  // Add more routes here
];
