import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarhomeComponent } from './sidebarhome.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarhomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarhomeRoutingModule {}
