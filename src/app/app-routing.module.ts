import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', loadChildren: () => import('./pages/student-list/student-list.module').then(m => m.StudentListPageModule) },
  { path: 'student-courses/:id', loadChildren: () => import('./pages/student-courses/student-courses.module').then(m => m.StudentCoursesPageModule) },
  { path: 'request', loadChildren: () => import('./pages/request/request.module').then(m => m.RequestPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
