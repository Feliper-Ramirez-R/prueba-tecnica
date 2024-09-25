import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
