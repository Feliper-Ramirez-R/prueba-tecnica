import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { 
    path:'',
    children:[ 

        {
            path:'home',
            component: HomeComponent
        }, 
        {
            path:'companies',
            component: CompaniesComponent
        }, 
        {
            path:'articles',
            component: ArticlesComponent
        }, 

        {
            path: '**',
            redirectTo: ''
        }
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
