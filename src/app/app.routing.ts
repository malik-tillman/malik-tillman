/*********************
 * Component Routing
 * Malik Tillman 2019
 *********************/

/**
 * Import routing helpers
 */
import { Routes, RouterModule } from '@angular/router';

/**
 * Import application components
 */
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

/**
 * Define application routes
 * Todo: Add NotFoundComponent and ComingSoonComponent
 */
const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home' }
];

/**
 * Export routing module
 */
export const routing = RouterModule.forRoot(appRoutes);
