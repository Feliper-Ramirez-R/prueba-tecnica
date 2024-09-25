import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    // redirectTo: 'sidebar',
    pathMatch: 'full'
  },
  /* {
    path: 'sidebar',
    component: SidebarComponent,

  }, */
  {
    component: SidebarComponent,
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
