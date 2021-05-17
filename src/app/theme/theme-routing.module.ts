import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: "",
    component: ThemeComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../admin/Dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: '', redirectTo: "dashboard", pathMatch: "full" }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }