import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineDosageComponent } from './medicine-dosage.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineDosageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineDosageRoutingModule {}
