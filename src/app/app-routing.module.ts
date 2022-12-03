import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './modules/pages/one/one.component';

const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: '**', component: OneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
