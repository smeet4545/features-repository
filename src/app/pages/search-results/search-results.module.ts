import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import {MatCardModule} from '@angular/material/card';
import { LandingPageModule } from '../landing-page/landing-page.module';


@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    MatCardModule,
    LandingPageModule
  ]
})
export class SearchResultsModule { }
