import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule) },

 { path: 'theme', loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule),data: { moduleId: '' }, canLoad: [] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }