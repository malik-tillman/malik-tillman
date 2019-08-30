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

/**
 * Define application routes
 * Todo: Add NotFoundComponent and ComingSoonComponent
 */
const appRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

/**
 * Export routing module
 */
export const routing = RouterModule.forRoot(appRoutes);
