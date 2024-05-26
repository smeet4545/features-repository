import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from '../header/navbar/navbar.module';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from '../header/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatCardModule,
    HttpClientModule,
    NavbarModule,
    MatInputModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class LandingPageModule {}
