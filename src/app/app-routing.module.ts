import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'body',
    loadChildren: () =>
      import('./pages/body/body.module').then((m) => m.BodyModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'navbar',
    loadChildren: () =>
      import('./pages/header/navbar/navbar.module').then((m) => m.NavbarModule),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./pages/header/footer/footer.module').then((m) => m.FooterModule),
  },
  {
    path: 'search-results',
    loadChildren: () =>
      import('./pages/search-results/search-results.module').then(
        (m) => m.SearchResultsModule
      ),
  },
  {
    path: 'test-page',
    loadChildren: () =>
      import('./pages/test-page/test-page.module').then(
        (m) => m.TestPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
