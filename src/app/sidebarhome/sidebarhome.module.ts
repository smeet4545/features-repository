import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarhomeRoutingModule } from './sidebarhome-routing.module';
import { SidebarhomeComponent } from './sidebarhome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SidebarhomeComponent],
  imports: [
    CommonModule,
    SidebarhomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class SidebarhomeModule {}
