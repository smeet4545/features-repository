import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
import { FooterModule } from './pages/header/footer/footer.module';
import { NavbarModule } from './pages/header/navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoDialogComponent } from './pages/video-dialog/video-dialog.component';

import { register } from 'swiper/element/bundle';

register();
@NgModule({
  declarations: [AppComponent, VideoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FooterModule,
    NavbarModule,
    FormsModule,
    HttpClientModule,

    // MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
